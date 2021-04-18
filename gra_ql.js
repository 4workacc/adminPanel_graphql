let fs = require("fs");
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

let uData = JSON.parse(fs.readFile("./1.json", ()=>{}));

const UserData = new GraphQLObjectType({
    FIO: uData.FIO,
    CODE0: uData.CODE0,
    CODE1: uData.CODE1
  });

var schema = buildSchema(`
 type Query {
    hello: String,
    user: UserData
 }
`);
 


var root = { 
    hello: () => 'Hello world!',
    user: userData
};
 
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));