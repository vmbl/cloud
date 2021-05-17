// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs-extra'
import moment from 'moment'
import sortjson from 'sort-json-array'

export default function getfiles(req, res) {
  console.log("BRAND", req.query.brand);
  try {
      const dir = `./public/${req.query.brand}/${req.query.type}/`
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
      res.send({ success: true, root_dir_files: allFileDir, sub_dir_files: allSub })
  } catch(e) {
      res.send({ success: false, root_dir_files: [], sub_dir_files: [] })
  }

}
