import React from 'react'
import axios, { post } from 'axios';
import Layout from '../components/layout'
import Head from 'next/head'

class SimpleReactFileUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null,
      type:null,
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
      <Layout>
        <div class="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
         
          <form onSubmit={this.onFormSubmit}>
            <h2>Upload Section</h2>
            <div class="form-group">
              <label>Brand:</label>
              <select class="form-control" name="brand" onChange={this.onChangeField} required>
                <option value="">--Choose Brand Here</option>
                <option value="LG">Livguard</option>
                <option value="LF">LivFast</option>
              </select>
            </div>
            <div class="form-group">
              <label>File Type:</label>
              <select class="form-control" name="type" onChange={this.onChangeField} required>
                <option value="">--Choose Type Here</option>
                <option value="product">Product Catalogue</option>
                <option value="solution">Solution Catalogue</option>
                <option value="datasheets">Datasheets</option>
                <option value="price">Price Details</option>
                <option value="license">License & Other Documents</option>
              </select>
            </div>
            <div class="form-group">
              <label>Select File:</label>
              <input type="file" class="form-control" onChange={this.onChange} required/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </Layout>
   )
  }
}

export default SimpleReactFileUpload
