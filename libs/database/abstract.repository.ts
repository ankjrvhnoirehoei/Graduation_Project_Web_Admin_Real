import type { FilterQuery, Model, UpdateQuery } from 'mongoose';
import { Types } from 'mongoose';
import type { AbstractDocument } from './abstract.document';
import createLogger from '../logger';

export abstract class AbstractRepository<TDocument extends AbstractDocument> {
  protected readonly logger;

  constructor(
    protected readonly model: Model<TDocument>,
    sourceName: string
  ) {
    this.logger = createLogger(sourceName);
  }

  async create(document: Omit<TDocument, '_id'>): Promise<TDocument> {
    try {
      const createdDocument = new this.model({
        ...document,
        _id: new Types.ObjectId(),
      });
      return (await createdDocument.save()).toJSON() as unknown as TDocument;
    } catch (err) {
      this.logger.error(`Can not create ${this.model.name}`, err);
      throw err;
    }
  }

  async findOne(filterQuery: FilterQuery<TDocument>): Promise<TDocument> {
    const document = await this.model
      .findOne(filterQuery)
      .lean<TDocument>(true);

    if (!document) {
      this.logger.warn(`${this.model.name} was not found with filterQuery ${JSON.stringify(filterQuery)}`);
      throw new Error(`${this.model.name} was not found`);
    }

    return document;
  }

  async findOneAndUpdate(
    filterQuery: FilterQuery<TDocument>,
    update: UpdateQuery<TDocument>,
  ): Promise<TDocument> {
    const document = await this.model
      .findOneAndUpdate(filterQuery, update, {
        new: true,
      })
      .lean<TDocument>(true);

    if (!document) {
      this.logger.warn(`${this.model.name} was not found with filterQuery ${JSON.stringify(filterQuery)}`);
      throw new Error(`${this.model.name} was not found`);
    }

    return document;
  }

  async find(filterQuery: FilterQuery<TDocument>): Promise<TDocument[]> {
    return this.model.find(filterQuery).lean<TDocument[]>(true);
  }

  async findOneAndDelete(
    filterQuery: FilterQuery<TDocument>,
  ): Promise<TDocument> {
    const document = await this.model.findOneAndDelete(filterQuery).lean<TDocument>(true);

    if (!document) {
      this.logger.warn(`${this.model.name} was not found with filterQuery ${JSON.stringify(filterQuery)}`);
      throw new Error(`${this.model.name} was not found`);
    }
    return document;
  }
}
