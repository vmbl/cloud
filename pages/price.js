import React from "react";
import Layout from '../components/layout'
import Dirtype from '../components/dirtype'

import Head from 'next/head'
import { useRouter } from 'next/router'
import fs from 'fs-extra'
import moment from 'moment'
import sortjson from 'sort-json-array'
import path from 'path'
import axios from 'axios';

const pathtype = 'price'
export async function getServerSideProps(context) {
	const dir = `./public/LG/${pathtype}/`
	const files = fs.readdirSync(dir)
	var path;
	var spath;
	var allFileDir = [];
	var allSub = [];
	for (const file of files) {
	    path = `${dir}${file}`
	    const stats = fs.statSync(path)
	    if(stats.isDirectory()) {
	    	 const subfiles = fs.readdirSync(path)
	    	 for (const sfile of subfiles) {
	    	 	 spath = `${dir}${file}/${sfile}`
	    	 	 const sstats = fs.statSync(spath)
	    	 	 const sbtokb = (sstats.size/1000).toFixed(2);
	    	 	 allSub.push({name: sfile, pathurl: spath, size: sbtokb, unit: "KB", modified: moment(sstats.mtime).format("YYYY-MM-DD HH:mm:ss")})
	    	 }	
	    } else {
	    	const btokb = (stats.size/1000).toFixed(2);
	    	allFileDir.push({name: file, pathurl: path, size: btokb, unit: "KB", modified: moment(stats.mtime).format("YYYY-MM-DD HH:mm:ss")})
	    }
	    
	}
	allFileDir = sortjson(allFileDir, 'modified', 'des')
	console.log("Files", allSub)
  	return { props: { allFileDir, allSub } }
 
}

class Products extends React.Component {
  
  

  constructor(props) {
    super(props);
    
    this.showStates = []
    this.showCities = []
    this.handleInputChange = this.handleInputChange.bind(this);
   
 	this.state = {
      dataValue: "LG",
      allFiles: props.allFileDir,
      allRecent: props.allSub
    };
    console.log("PROPS", props.allSub)
    //this.onChange = this.onChange.bind(this);
  }

  /*onChange = async event => {
    if(event.target.name == "")
    this.setState({file:e.target.files[0]})
  }*/
 

 	onChange = async event => {
 	 	var brandValue = event.target.value;

		const res = await fetch(
      	`${process.env.basepath}api/getfiles/?brand=${brandValue}&type=${pathtype}`,
	      {	        
	        headers: {
	          'Content-Type': 'application/json'
	        },
	        method: 'POST'
	      }
	    ).then((response) => response.json());
	  	console.log(res)
	  	this.setState({ allFiles: res.root_dir_files });
	  	this.setState({ allRecent: res.sub_dir_files });
	  	this.setState({ dataValue: brandValue });

	};

  	handleInputChange(event) {
	  	alert(event.target.value)
	    getServerSideProps()
	}


  render() {
    const { dataValue } = this.state;
    const { allFiles } = this.state;
    const { allRecent } = this.state;
    //console.log(allFiles)
    //alert(cityOptions)
    const passData = {dataValue: dataValue, allFiles: allFiles, allRecent: allRecent, pathtype: pathtype}
  
    return (
        <Layout menu={{active: "solution"}}>
          
          <div class="container">
		      <h2>Price Documents</h2>
		       <div class="form-group">
		          <label>Brand:</label>
		          <select class="form-control" name="brand" onChange={this.onChange} required>
		            <option value="LG">Livguard</option>
		            <option value="LF">LivFast</option>
		          </select>
		        </div>
		      	<Dirtype setdata = {passData} />
		    </div>          
        </Layout>
    );
  }
}

export default Products;
