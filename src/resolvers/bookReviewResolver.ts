import ReviewModel from '../models/reviews';
import BookModel from '../models/book';

const bookReviewResolver = {
  Query: {
    getReviewById: async (_, { id }: { id: string }) => {
      return await ReviewModel.findById(id);
    },
    getReviewsByBook: async (_, { bookTitle }: { bookTitle: string }) => {
      const book = await BookModel.findOne({ title: bookTitle });
      if (!book) {
        throw new Error('Book not found');
      }
      return await ReviewModel.find({ book: book._id });
    },
  },
  Mutation: {
    createReview: async (_, { bookTitle, reviewer, rating, comment }: { bookTitle: string; reviewer: string; rating: number; comment: string }) => {
      const book = await BookModel.findOne({ title: bookTitle });
      if (!book) {
        throw new Error('Book not found');
      }
      const newReview = new ReviewModel({ book: book._id, reviewer, rating, comment });
      return await newReview.save();
    },
  },
  Review: {
    book: async (parent: { book: string }, args: any, context: any, info: any) => {
      return await BookModel.findById(parent.book);
    },
  },
};

export default bookReviewResolver;
