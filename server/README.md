# Password Manager

## Database setup
- open MySQL Workbench
- Create new database with name 'passwordmanager';
- Add three columns [id, service, iv];


## Add .env in the project root directory and populate the file with the following and enter the missing data
MYSQL_HOST=localhost
MYSQL_DB=passwrodmanager 
MYSQL_USER=<user>
MYSQL_PASSWORD=<password>
CRYPTO_SECRET=<32 characters>

## Project set up
### `npm install` 
Installs required dependencies

## Run
### `npm start`
Server runs on port 3001 [http://localhost:3001]