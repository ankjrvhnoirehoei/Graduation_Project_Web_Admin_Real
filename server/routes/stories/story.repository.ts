import { AbstractRepository } from '@Common/database';
import { Story as StoryDocument } from './story.schema';
import type { Model } from 'mongoose';

export class StoryRepository extends AbstractRepository<StoryDocument> {
  constructor(model: Model<StoryDocument>) {
    super(model, 'StoryRepository');
  }
}
