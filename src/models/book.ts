import mongoose, { Schema, Document } from 'mongoose';

export interface IBook extends Document {
  title: string;
  author: string;
}

export interface IBookReview extends Document {
    title: string;
    author: string;
    releaseDate: Date;
    rating: number;
    comments: string;

}
export interface Testinterface extends Document {
    title: string;
}

const BookSchema: Schema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true }
});

export default mongoose.model<IBook>('Book', BookSchema);

