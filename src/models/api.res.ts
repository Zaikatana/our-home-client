import * as z from 'zod';

import { Comment, Item, Room } from '.';

const GetItemsRes = z.object({
  items: z.array(Item),
});
export type GetItemsRes = z.infer<typeof GetItemsRes>;

const GetRoomsRes = z.object({
  rooms: z.array(Room),
});
export type GetRoomsRes = z.infer<typeof GetRoomsRes>;

const GetItemsByRoomRes = z.object({
  items: z.array(Item),
});
export type GetItemsByRoomRes = z.infer<typeof GetItemsByRoomRes>;

const GetItemRes = z.object({
  item: Item,
});
export type GetItemRes = z.infer<typeof GetItemRes>;

const UpdateItemRes = z.object({
  itemId: Item.shape.itemId,
});
export type UpdateItemRes = z.infer<typeof UpdateItemRes>;

const AddItemRes = z.object({
  itemId: Item.shape.itemId,
});
export type AddItemRes = z.infer<typeof AddItemRes>;

const GetCommentsForItemRes = z.object({
  comments: z.array(Comment),
});
export type GetCommentsForItemRes = z.infer<typeof GetCommentsForItemRes>;

const AddCommentRes = z.object({
  commentId: Comment.shape.commentId,
});
export type AddCommentRes = z.infer<typeof AddCommentRes>;

const UpdateCommentRes = z.object({
  commentId: Comment.shape.commentId,
});
export type UpdateCommentRes = z.infer<typeof UpdateCommentRes>;
