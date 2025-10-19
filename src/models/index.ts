import * as z from 'zod';

export const Room = z.object({
  roomId: z.uuid(),
  name: z.string(),
});
export type Room = z.infer<typeof Room>;

export const Item = z.object({
  itemId: z.uuid(),
  name: z.string(),
  description: z.string(),
  link: z.url(),
  cost: z.number(),
  type: Room,
});
export type Item = z.infer<typeof Item>;

export const Comment = z.object({
  commentId: z.uuid(),
  itemId: Item.shape.itemId,
  content: z.string(),
  author: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
export type Comment = z.infer<typeof Comment>;

export const CommentFormState = z.object({
  content: z.string().min(1),
  itemId: Item.shape.itemId,
  author: z.string().min(1),
});
export type CommentFormState = z.infer<typeof CommentFormState>;

export const ItemFormState = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  link: z.url(),
  cost: z.number().min(0),
  roomId: Room.shape.roomId,
});
export type ItemFormState = z.infer<typeof ItemFormState>;
