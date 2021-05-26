import formidable from 'formidable';
import fs from 'fs-extra'
import moment from 'moment'

export const config = {
  api: {
    bodyParser: false,
  },
};

var fieldType = null

export default async (req, res) => {
	console.log(req.query)
  const form = new formidable.IncomingForm();
  form.uploadDir = "./public/";

  form.keepExtensions = true;
  /*form.parse(req, (err, fields, files) => {
    console.log(err, fields, files);
  });*/
  
  	form.parse(req)
	    .on('field', (name, field) => {
	      	
	 	 })
	    /* this is where the renaming happens */
	    .on ('fileBegin', function(name, file){
            //rename the incoming file to the file's name
            var getExt = file.name.split(".");
            var ext = getExt[getExt.length-1];
            console.log("EXTENSION", ext)
            form.extType = ext

            file.path = `${form.uploadDir}${req.query.brand}/${req.query.type}/${getExt[0]}_${moment().format("YY-MM-DD_h:mm")}.${ext}`;

            fs.emptyDirSync(`${form.uploadDir}${req.query.brand}/${req.query.type}/latest/`)           
	    })
	    .on('file', (name, file) => {
	    	if(req.query.type == "product" || req.query.type == "solution" || req.query.type == "datasheets") {
	    		var getExt = file.name.split(".");
	    		fs.copyFile(file.path, `${form.uploadDir}${req.query.brand}/${req.query.type}/latest/${req.query.type}_latest.${form.extType}`, (err) => {
					if (err) {
						console.log("Error Found:", err);
					}
					else {
						console.log("\nFile Contents of copied_file:")
					}
				});
		    }
	      
	  	})
	    .on('aborted', () => {
	      	console.error('Request aborted by the user')
	    })
	    .on('error', (err) => {
	      	console.error('Error', err)
	      	throw err
	    })
	    .on('end', () => {
	      	res.end()
    })
};

