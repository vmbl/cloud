import React from 'react'
import Layout from '../components/loginlayout'
import Head from 'next/head'
import { useRouter } from "next/router";
import Router from 'next/router'


class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      error:false,
      type:null,
      brand:null
    }
    this.loginUser = this.loginUser.bind(this)
  }
  
  loginUser = async e => {
     
      e.preventDefault() // Stop form submit
      //this.setState({type:e.target.})
      console.log(e.currentTarget.username.value);
      console.log(e.currentTarget.password.value);
      var url = `api/login`
      var inData = {
          'username' : e.currentTarget.username.value,
          'password' : e.currentTarget.password.value
      }

      //const router = useRouter();

      const config = {
          headers: {
              'content-type': 'application/json'
          }
      }
      const res = await fetch(
        `${process.env.basepath}api/login/`,
        {
          body: JSON.stringify(inData),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }
      ).then((response) => response.json());
        console.log("RESPONSE", res);
        if(res.success) {
          if(res.type == "admin") {
            Router.push('/upload', undefined, { shallow: true })
          } else if(res.type == "user") {
            Router.push('/register', undefined, { shallow: true })
          } else if(res.type == "sale") {
            Router.push('/products', undefined, { shallow: true })
          }
        } else {
          this.setState({ error: true });
        }
  }


  render() {
    return (
      <Layout>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
         
          <form onSubmit={this.loginUser}>
            <h2>Login Section </h2>
            <div className="form-group">
              <label>Username:</label>
              <input type="text" className="form-group" name="username" />
            </div>
            <div className="form-group">
              <label>Password :</label>
              <input type="password" className="form-group" name="password" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            { this.state.error == true && <p style={{ color: "red" }}>Enter valid credentials</p> }
          </form>
        </div>
      </Layout>
   )
  }
}

export default Login
