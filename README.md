# react-node-boilerplate
A simple boilerplate for creating full stack application in javascript using react for client side and node/express as backend for creating APIs. 

## Quick Start

  The quickest way to get started with this boilerplate is to fork it into your own repo.
  Get into the root of the application

```bash
cd react-node-boilerplate/
```

  Install dependencies:

```bash
$ npm install
```

  Start the server:

```bash
$ npm start
```

  View the website at: http://localhost:3000

## Folder structure
- bin
  - www file is the server start script 
- *client*
    - actions
      - lists actions
    - components
      - lists presentational components
    - containers
      - lists stateful components
    - reducers
      - lists all reducers
    - scss
      - for all styles in react
    - index.js
      - entry point for react application
    - store.js
      - redux store
    - Wrapper.js
      - wrapper for all routes in react

- public
    - contains static assets in express

- routes
    - route handler for node application

- views
    - for express templates

- .babelrc
    - transpiler for react and ES6 codes

- .gitignore
    - ignore node_modules and bundles
  
- app.js
    - entry point for express application

- package.json
    - project metadata and dependencies list

- webpack.config.js
    - bundler for react application
  
