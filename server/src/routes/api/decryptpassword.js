import express from 'express';
import {decrypt} from '../../utils/encryptionHandler.js'

const decryptPassword = express.Router();

decryptPassword.post('/',(req, res) => {
    res.send(decrypt(req.body))
})


export default decryptPassword;
