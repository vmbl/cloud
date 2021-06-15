import { withIronSession } from "next-iron-session";
import cookieCutter from 'cookie-cutter'
const VALID_EMAIL_ADMIN = "Admin";
const VALID_PASSWORD_ADMIN= "LivguardCloud123$";

const VALID_EMAIL_USER = "Livsol";
const VALID_PASSWORD_USER= "LivsolRegister123$";

const VALID_EMAIL_SALE = "LFLGSales";
const VALID_PASSWORD_SALE = "LFLGSALES123$";

export default withIronSession(
  async (req, res) => {
    if (req.method === "POST") {
      const { username, password } = req.body;
      console.log(req.body)
      if (username == VALID_EMAIL_ADMIN && password == VALID_PASSWORD_ADMIN) {
      	console.log("Admin true")
      	var type = 'admin'
        req.session.set("user", { username, type });
        await req.session.save();
        res.status(200).json({'success': true, 'type': "admin"});
      } else if (username === VALID_EMAIL_USER && password === VALID_PASSWORD_USER) {
      		var type = 'user'
        	req.session.set("user", { username, type });
        	await req.session.save();
        	res.status(200).json({'success': true, 'type': "user"});
      } else if (username === VALID_EMAIL_SALE && password === VALID_PASSWORD_SALE) {
          var type = 'sale'
          req.session.set("user", { username, type });
          await req.session.save();
          res.status(200).json({'success': true, 'type': "sale"});
      } else {
        res.status(200).json({'success': false});
      }

      //return res.status(403).send("");
    }

    //return res.status(404).send("");
  },
  {
    cookieName: "MYSITECOOKIE",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false
    },
    password: process.env.APPLICATION_SECRET
  }
);
