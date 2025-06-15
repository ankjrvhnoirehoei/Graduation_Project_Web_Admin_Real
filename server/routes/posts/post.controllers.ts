import { Hono } from "hono";
// import { createPost, getPosts, getPost, deletePost, updatePost, createComment } from './post.services';

export const postController = new Hono();

// postController.post('/', async (c) => {
//   const body = await c.req.json();
//   const post = await createPost(body);
//   return c.json(post, 201);
// });

// postController.get('/', async (c) => {
//   const posts = await getPosts();
//   return c.json(posts);
// });

// postController.get('/:id', async (c) => {
//   const id = c.req.param('id');
//   const post = await getPost(Number(id));
//   if (!post) {
//     return c.json({ message: 'Post not found' }, 404);
//   } 
//   return c.json(post, 200);
// });

// postController.delete('/:id', async (c) => {
//   const id = c.req.param('id');
//   const post = await deletePost(Number(id));
//   if (!post) {
//     return c.json({ message: 'Post not found' }, 404);
//   }
//   return c.json({ message: 'Post deleted' }, 200);
// });         

// postController.put('/:id', async (c) => {
//   const id = c.req.param('id');
//   const body = await c.req.json();
//   const post = await updatePost(Number(id), body);
//   if (!post) {
//     return c.json({ message: 'Post not found' }, 404);
//   }
//   return c.json(post, 200);
// });

// postController.patch('/:id', async (c) => {
//   const id = c.req.param('id');
//   const body = await c.req.json();
//   const post = await updatePost(Number(id), body);
//   if (!post) {
//     return c.json({ message: 'Post not found' }, 404);
//   }
//   return c.json(post, 200);
// });

// postController.post('/:id/comments', async (c) => {
//   const id = c.req.param('id');
//   const body = await c.req.json();
//   const comment = await createComment(Number(id), body);
//   if (!comment) {
//     return c.json({ message: 'Post not found' }, 404);
//   }
//   return c.json(comment, 201);
// });

// postController.get('/:id/comments', async (c) => {
//   const id = c.req.param('id');
//   const comments = await getComments(Number(id));
//   if (!comments) {
//     return c.json({ message: 'Post not found' }, 404);
//   }
//   return c.json(comments, 200);
// });

// postController.delete('/:id/comments/:commentId', async (c) => {
//   const id = c.req.param('id');
//   const commentId = c.req.param('commentId');
//   const comment = await deleteComment(Number(id), Number(commentId));
//   if (!comment) {
//     return c.json({ message: 'Comment not found' }, 404);
//   }
//   return c.json({ message: 'Comment deleted' }, 200);
// });

// postController.put('/:id/comments/:commentId', async (c) => {
//   const id = c.req.param('id');
//   const commentId = c.req.param('commentId');
//   const body = await c.req.json();
//   const comment = await updateComment(Number(id), Number(commentId), body);
//   if (!comment) {
//     return c.json({ message: 'Comment not found' }, 404);
//   }
//   return c.json(comment, 200);
// });

// postController.patch('/:id/comments/:commentId', async (c) => {
//   const id = c.req.param('id');
//   const commentId = c.req.param('commentId');
//   const body = await c.req.json();
//   const comment = await updateComment(Number(id), Number(commentId), body);
//   if (!comment) {
//     return c.json({ message: 'Comment not found' }, 404);
//   }
//   return c.json(comment, 200);
// });