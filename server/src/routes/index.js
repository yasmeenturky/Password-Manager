import express from 'express';
import addpassword from './api/addpassword.js';
import showpasswords from './api/showpasswords.js';
import decryptPassword from './api/decryptpassword.js';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('main api');
});

routes.use('/addpassword', addpassword);
routes.use('/showpasswords', showpasswords);
routes.use('/decryptpassword', decryptPassword )

export default routes;
