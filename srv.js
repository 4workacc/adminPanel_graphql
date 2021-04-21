let express = require("express");
let { graphqlHTTP } = require("express-graphql");
let { buildSchema } = require("graphql");

let schema = buildSchema(`
    type Query {
        id: Int
    }
`);

let root = {
    id : -10
};

let app = express();

app.use("/graphql", graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));

app.listen(5000, ()=>{});


