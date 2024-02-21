import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import mongoose from 'mongoose';
import resolvers from './resolvers/bookResolver';
import typedefs from './typedefs/bookTypedefs';

//starts and configures the server
async function startServer() {
    const app = express();

const server = new ApolloServer({
    typeDefs: typedefs,
    resolvers: resolvers,
});

server.applyMiddleware({app});

const PORT = process.env.PORT || 4000;

mongoose.connect('mongodb://localhost:27017/mydatabase')
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}/graphql`);
    });
})
.catch(err => {
    console.error("Error connecting to database", err);
});
}

startServer();