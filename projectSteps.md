<!-- TESTING  -->

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

<!-- DEPLOYMENT w/ Postgres (used existing shouts project we deployed to Heorku ) -->

#Heroku
Heorku - Project - Resources - add ons
Add Heorku Postgres as an add on (attaches it to the database)

#terminal - install postgres
npm i pg

#knexfile.js
point application to production
Heroku is setting the connection with config vars

# Run migrations in production environment on Herokue

npx heroku run knex migrate:latest -a shouts-guided-project
(would want to do the same thing for the seeds to if you have any seeds)

#REVIEW

1. dont have to change knex code or endpoints - knex knows how to talk to database driver and translate
2. Heroku - resources - add Postgres (gives you config variable that points to Heroku)
3. Tell application to use Postgress - knexfile.js production key
4. install pg package with npm i pg
5. in dbConfig file you need to have a way to pick the right production key

- Why switch to postgres? Dont lose the changes you have on your file anymore
