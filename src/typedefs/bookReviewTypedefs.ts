
import { gql } from 'apollo-server-express';

const bookReviewTypeDefs = gql`
  type Book {
    title: String!
    author: String!
  }

  type Review {
    id: ID!
    book: Book!
    reviewer: String!
    rating: Int!
    comment: String
  }

  type Query {
    getReviewById(id: ID!): Review
    getReviewsByBook(bookTitle: String!): [Review]
  }

  type Mutation {
    createReview(bookTitle: String!, reviewer: String!, rating: Int!, comment: String): Review
  }
`;

export default bookReviewTypeDefs;
