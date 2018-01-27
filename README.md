# Typescript-restful-starter
Node.js + ExpressJS + TypeOrm + Typescript + JWT + ES2015 + Clustering + Tslint + Mocha + Chai + Superagent
------------
# What use this Starter App?
- **JWT** for protect routes.
- **Clustering mode** for load many forks depending of the CPU's units.
- **Typeorm** for ORM.
- **ES2015** with the last of javascript like promises and async/await
- **Mocha - Chai** for test

## Structure
```json
/app
	/controllers (Controllers of the app)
	/middlewares (Middlewares for the routes of the app)
	/routes (Routes for Controllers of the app)
	/service (Services for using in any Controller)
	/entity (Models configuration for use)
	/repository (Custom queries)
/config
	/Router.ts (Config file for Routing)
	/Database (DB configuration for use)
	/Server.ts (Server configuration)
config.ts (Config file for the app)
tsconfig.json (File configuration typescript)
tslint.json (File configuration rules typescript)
Index.ts (Main file to start the app)
```
# Install
1. First clone this repository.
		git@github.com:camesine/Typescript-restful-starter.git
2. Download all dependencies.
		npm install
3. Edit the file config/config.ts with your own settings:
```json
{
    SECRET: "HltH3R3",
    PORT: 1344,
    local: {
        SERVER: "127.0.0.1",
        DB: "test",
        USER_DB: "root",
        PASSWORD: "",
        DIALECT: "mysql",
    },
    production: {
        SERVER: process.env.SERVER || 'localhost',
        DB: process.env.DB || "prod",
        USER_DB: process.env.USER_DB || 'root',
        PASSWORD: process.env.PASSWORD || '',
        DIALECT: process.env.DIALECT || 'mysql',
    }
}

```
# Start App
When execute any of this commands the app start with clustering, creating many cluster apps depending of the numbers of CPU's your computer had.
### Development: In Development mode the express app is starter with nodemon for automatic refresh when do changes.
	npm run dev
### Test: Run test in development environment
	npm test
### Production: Run app in production environment
	npm start
