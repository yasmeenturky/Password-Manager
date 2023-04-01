import express from 'express';
import db from '../../database.js';
import {encrypt} from '../../utils/encryptionHandler.js'

const addpassword = express.Router();

addpassword.post('/',(req, res) => {
    const {password , service} = req.body;
    const encryptedPassword = encrypt(password);

    db.query("INSERT INTO passwords (password, service, iv) VALUES (?,?,?)",
    [encryptedPassword.password, service, encryptedPassword.iv], 
    (err) => {
        if(err){

            console.log(err);
        }
        else{
            console.log("added")
            res.send("Success");
        }
    })
})


export default addpassword;
