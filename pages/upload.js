import React from 'react'
import axios, { post } from 'axios';
import Layout from '../components/layout'
import Head from 'next/head'
import { withIronSession } from "next-iron-session";
import Router from 'next/router'




export const getServerSideProps = withIronSession(
  async ({ req, res }) => {
    const user = req.session.get("user");
    console.log(user);
    if (user) {
      if(user.type == "user") {
        res.statusCode = 302
        res.setHeader('Location', `/`) // Replace <link> with your url link
        
      }
      return {
        props: { user }
      };
    } else {
        res.statusCode = 302
        res.setHeader('Location', `/`) // Replace <link> with your url link
        return {props: {}}
    }

  },
  {
    cookieName: "MYSITECOOKIE",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false
    },
    password: process.env.APPLICATION_SECRET
  }
);

class SimpleReactFileUpload extends React.Component {

  constructor(props) {
    console.log("Logged in user", props)
    super(props);
    /*if(props) {
      if (!props.user.username) {
        Router.push('http://localhost:3000/')
      }
    } else {
      Router.push('/')
    }*/
    
    this.state ={
      file:null,
      type:null,
      utype:props.user.type,
      brand:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onChangeField = this.onChangeField.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    //this.setState({type:e.target.})
    this.fileUpload(this.state.file, this.state.type, this.state.brand).then((response)=>{
      //console.log(response.data);
      alert("Uploaded Successfully!")
    })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }
  onChangeField(e) {
    //alert(e.target.value)
    if(e.target.name == 'type') {
      this.setState({type:e.target.value})
    } else {
      this.setState({brand:e.target.value})
    }
    
  }
  fileUpload(file, type, brand){
    const url = `api/upload?type=${type}&brand=${brand}`;
    const formData = new FormData();
    formData.append('file',file)
    formData.append('type',type)
    formData.append('brand',type)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }

  render() {
    return (
      <Layout type={this.state.utype}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
         
          <form onSubmit={this.onFormSubmit}>
            <h2>Upload Section</h2>
            <div className="form-group">
              <label>Brand:</label>
              <select className="form-control" name="brand" onChange={this.onChangeField} required>
                <option value="">--Choose Brand Here</option>
                <option value="LG">Livguard</option>
                <option value="LF">LivFast</option>
              </select>
            </div>
            <div className="form-group">
              <label>File Type:</label>
              <select className="form-control" name="type" onChange={this.onChangeField} required>
                <option value="">--Choose Type Here</option>
                <option value="product">Product Catalogue</option>
                <option value="solution">Solution Catalogue</option>
                <option value="datasheets">Datasheets</option>
                <option value="price">Price Details</option>
                <option value="license">License & Other Documents</option>
                <option value="whitepaper">White Paper Documents</option>
              </select>
            </div>
            <div className="form-group">
              <label>Select File:</label>
              <input type="file" className="form-control" onChange={this.onChange} required/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </Layout>
   )
  }
}

export default SimpleReactFileUpload
