import express from 'express';
import db from '../../database.js';

const showpasswords = express.Router();

showpasswords.get('/',(req, res) => {
    db.query('SELECT * FROM passwords', 
    (err, result) => {
        if(err) {
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})


export default showpasswords;
