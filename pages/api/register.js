// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require('fs');
export default function handler(req, res) {
  	console.log(req.body);
  	var states =req.body.states.toString();
  	var cities = req.body.cities.toString();
  	var allData = req.body
  	var writeString = `${allData.brand},${allData.post},${allData.asm},${allData.name},${allData.mobile},${allData.email},"${states}","${cities}"\n`
  	fs.appendFile('./public/accounts.csv', writeString, function (err) {
		if (err) throw err;
	  	console.log('Saved!');
	});
	res.status(200).json({ name: 'John Doe' })
  //res.send({ name: 'John Doe' })

}
