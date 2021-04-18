let fs = require("fs");
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

let ud = JSON.parse(fs.readFile("./1.json", ()=>{}));

let userData = {
	FIO:"IvanovII",
	CODE0:1,
	CODE1: 2
}

var schema = buildSchema(`
 type Query {
    hello: String,
 }
`);
 


var root = { 
    hello: () => ud.FIO,
};
 
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));