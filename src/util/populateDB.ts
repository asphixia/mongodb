import mongoose from 'mongoose';
import BookModel from '../models/book';

mongoose.connect('mongodb://localhost:27017/graphql-mongoose');

mongoose.connection.once('open', async () => {
  try {
    // Clear existing data
    await BookModel.deleteMany({});

    // Add initial books
    const books = [
      { title: 'Book 1', author: 'Author 1' },
      { title: 'Book 2', author: 'Author 2' },
      { title: 'Book 3', author: 'Author 3' }
    ];

    await BookModel.insertMany(books);
    console.log('Database populated successfully');
  } catch (error) {
    console.error('Error populating database:', error);
  } finally {
    mongoose.connection.close();
  }
});
