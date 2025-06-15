import { Types, Document } from 'mongoose';

export abstract class AbstractDocument extends Document {
  _id: Types.ObjectId;
  constructor() {
    super();
    this._id = new Types.ObjectId();
  }
}
