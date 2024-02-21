import BookModel from '../models/book';

const resolvers = {
  Query: {
    books: async () => await BookModel.find(),
    book: async (_, { id }: { id: string }) => await BookModel.findById(id)
  },
  Mutation: {
    addBook: async (_, { title, author }: { title: string, author: string }) => {
      const newBook = new BookModel({ title, author });
      return await newBook.save();
    },
    updateBook: async (_, { id, title, author }: { id: string, title: string, author: string }) => {
      return await BookModel.findByIdAndUpdate(id, { title, author }, { new: true });
    },
    deleteBook: async (_, { id }: { id: string }) => {
      return await BookModel.findByIdAndDelete(id);
    }
  }
};

export default resolvers;
