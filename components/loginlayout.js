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
    <div className="jumbotron" style={{ background: "white" }}>
      <div className="container text-center" style={{ margin: "0 auto" }}>
        <Image src="/logo.png" alt="Livguard Solar" width="170" height="64" />
        <p>Cloud Application</p>
      </div>
    </div>
    <hr />
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
