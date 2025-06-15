import { Hono } from 'hono';
// import { StoryDocument } from './story.schema';
// import { Types } from 'mongoose';

// const fakeStory: StoryDocument[] = [
//   {
//     _id: new Types.ObjectId('507f1f77bcf86cd799439011'),
//     ownerId: new Types.ObjectId('507f1f77bcf86cd799439012'),
//     mediaUrl: 'https://example.com/media/1',
//     music: {
//       id: new Types.ObjectId('507f1f77bcf86cd799439013'),
//       time_start: 0,
//       time_end: 10,
//     },
//     content: {
//       text: '',
//       x: 0,
//       y: 0,
//     },
//     createAt: new Date(),
//   }
// ];

export const storyController = new Hono()

.get('/', async (c) => {
  return c.json({
    stories: []
  });
})

.post('/', async (c) => {
  return c.json({
    story: {}
  });
})

