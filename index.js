// import from server
const jsonserver = require('json-server')


// create a server
const server =jsonserver.create()

// set up path for db.json file
const router =jsonserver.router('db.json')


// use a middleware
const middleware = jsonserver.defaults()

// set port 
const port =process.env.PORT || 4000


// use in server
server.use(middleware)
server.use(router)

// to run port
server.listen(port,()=>{
    console.log(`json server start at port ${port}`);
})
