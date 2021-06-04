// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from 'fs'



/*export default function handler(req, res) {
	const dir = './public/'
	const files = fs.readdirSync(dir)
	for (const file of files) {
		console.log(file)
	}
  	res.status(200).json({ name: 'John Doe' })
}
*/


export async function getData() {
    const response = await fetch('api/product')
    const jsonData = await response.json()
    return jsonData
}

export default async function handler(req, res) {
    const jsonData = await getData()
    res.status(200).json(jsonData)
}