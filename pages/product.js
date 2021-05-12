
import axios, { post } from 'axios';
import Layout from '../components/layout'
import Head from 'next/head'
import fs from 'fs-extra'
import moment from 'moment'
import sortjson from 'sort-json-array'
import { useRouter } from 'next/router';

const Product = ({allFileDir}) => (
  <Layout>
    <div class="container">
      <h2>Product Files</h2>
       <div class="form-group">
          <label>Brand:</label>
          <select class="form-control" name="brand" onChange={e => changeData(e.target.value)} required>
            <option value="">--Choose Brand Here</option>
            <option value="LG">Livguard</option>
            <option value="LF">LivFast</option>
          </select>
        </div>
      <table class="table table-bordered">
          <thead>
            <tr>
              <th>File Name</th>
              <th>Last Modified</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
      
          {
            Object.entries(allFileDir).map((value, index) => {
              console.log(value)
              var downLink = `/${value[1].name}`
              return (

                <tr>
                  <td><a href={downLink} target="_blank">{value[1].name}</a></td>
                  <td>{value[1].modified}</td>
                  <td>{value[1].size} KB</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  </Layout>


);


function changeData(props) {
  const router = useRouter();
  // Call this function whenever you want to
  // refresh props!
  const refreshData = () => {
    router.replace(router.asPath);
  }
}

export async function getServerSideProps(context) {
  const dir = './public/'
  const files = fs.readdirSync(dir)
  var path;
  var allFileDir = [];
  for (const file of files) {
    path = `${dir}${file}`
    const stats = fs.statSync(path)
    const btokb = (stats.size/1000).toFixed(2);
    allFileDir.push({name: file, pathurl: path, size: btokb, unit: "MB", modified: moment(stats.mtime).format("YYYY-MM-DD HH:mm:ss")})
  }
  allFileDir = sortjson(allFileDir, 'modified', 'des')
 
  return { props: { allFileDir } }
 
}

export default Product


