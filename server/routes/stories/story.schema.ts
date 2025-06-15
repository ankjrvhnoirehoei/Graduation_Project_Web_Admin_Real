import { Schema, model, Types } from 'mongoose';
import { AbstractDocument } from '@Common/database';

export interface StoryDocument extends AbstractDocument {
  ownerId: Types.ObjectId;
  mediaUrl: string;
  music: {
    id: Types.ObjectId;
    time_start: number;
    time_end: number;
  };
  content: {
    text: string;
    x: number;
    y: number;
  };
  createAt: Date;
}

export const StorySchema = new Schema<StoryDocument>({
  ownerId: { type: Schema.Types.ObjectId, required: true },
  mediaUrl: { type: String, required: true },
  music: {
    id: { type: Schema.Types.ObjectId, },
    time_start: { type: Number, },
    time_end: { type: Number, },
  },
  content: {
    text: { type: String, },
    x: { type: Number, },
    y: { type: Number, },
  },
  createAt: { type: Date, default: Date.now },
});

export const StoryModel = model<StoryDocument>('Story', StorySchema);
