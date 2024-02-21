import mongoose, { Schema, Document } from 'mongoose';

export interface IBook extends Document {
  title: string;
  author: string;
}
export interface IBook extends Document {
    title: string;
    author: string;
    releaseDate: Date;
    reviews: string[];
    
}

const BookSchema: Schema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true }
});

export default mongoose.model<IBook>('Book', BookSchema);
