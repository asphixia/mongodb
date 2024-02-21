
import { IBookReview } from "../models/book";
import mongoose, { Schema, Document } from 'mongoose';

const ReviewSchema: Schema = new Schema({
    book: { type: Schema.Types.ObjectId, ref: 'Book' },
    reviewer: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String }
});

export default mongoose.model<IBookReview>('Review', ReviewSchema);