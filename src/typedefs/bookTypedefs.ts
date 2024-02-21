import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [Book!]!
    book(id: ID!): Book
    bookByTitle(title: String!): Book
    bookByAuthor(author: String!): Book
    
  }

  type Mutation {
    addBook(title: String!, author: String!): Book!
    updateBook(id: ID!, title: String!, author: String!): Book!
    deleteBook(id: ID!): Book

  }
`;

export default typeDefs;
