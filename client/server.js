import '@babel/polyfill';
const { GraphQLServer, PubSub } = require('graphql-yoga')
import { makeExecutableSchema } from 'graphql-tools';
import { importSchema } from 'graphql-import';
import prisma from './prisma';
import resolvers from './resolvers/index';
const typeDefs = importSchema('./client/schema.graphql');
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});
const pubsub = new PubSub();
const server = new GraphQLServer({
  schema,
  context(){
    return {
    pubsub,
    prisma
    }
  }
});
const options = {
  port: 4000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
}
server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`,
  ),
)