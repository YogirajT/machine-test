# Install npm
# run "npm i" in project directory
# run "npm start" if you have nodemon installed as global package
# run "npm run start-prod" if you dont have nodemon
# requests if running on localhost:3002

# records
curl --location --request GET 'http://localhost:3002/records'

# managed records page is the page no you wan tto look at
curl --location --request GET 'http://localhost:3002/managed-records?page=0'

# p.s. you can change port in env.js 