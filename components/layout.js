import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

const Layout = ({ children }) => (

  <>
     <Head>
        <title>Livguard Cloud Application</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      </Head>
    <div class="jumbotron" style={{ background: "white" }}>
      <div class="container text-center">
        <Image src="/logo.png" alt="Livguard Solar" width="170" height="64" />
        <p>Cloud Application</p>
      </div>
    </div>

    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>                        
          </button>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
          
           <li><a href="/">Upload</a></li>
            <li><a href="/products">Product Catalogue</a></li>
            <li><a href="/solutions">Solution Catalogue</a></li>
            <li><a href="/datasheets">Data Sheets</a></li>
            <li><a href="/price">Price Documents</a></li> 
            <li><a href="/license">License & Other Documents</a></li>
            <li><a href="/register">LivSol Registration</a></li>
          </ul>
    
        </div>
      </div>
    </nav>
    <main>{children}</main>
    
    <style jsx>{`
    .navbar {
      margin-bottom: 50px;
      border-radius: 0;
    }
    
     .jumbotron {
      margin-bottom: 0;
      background: white !important;
    }
   
    footer {
      background-color: #f2f2f2;
      padding: 25px;
    }
    `}</style>
  </>
)

export default Layout
