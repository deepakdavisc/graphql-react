const express = require("express");

const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDb = require("./config/db");
const colors = require("colors");

connectDb();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("dotenv").config();

const port = process.env.PORT || 4000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.get("/test", (req, res) => {
  res.send("test test");
});

app.listen(port, console.log(`app started on ${port}`));
