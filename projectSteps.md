#1. npm i

#2. killall node
<!-- Use this if port # is already being ran elsewhere -->

#3. npm run server

#4. npm i -D supertest jest
<!-- Add supertest and jest as dev dependencies  -->

#5. Make sure package.json start script looks like this 
  "scripts": {
    "server": "nodemon index.js",
    "test": "cross-env DB_ENV=testing jest --watch",
    "start": "node index.js"
  },

#6. npm test

#7. npx jest --init 
answer no to questions in terminal and select node if asked
Creates a jest.config.js file and sets testEnvironment to be Node - can make sure this is uncommented in jestconfig 

#8. Build out Server.spec.js tests 

#9. Build out hobbitsModel.spec.js 







