import { ItemFormState } from './models';
import type {
  AddItemRes,
  GetCommentsForItemRes,
  GetItemRes,
  GetItemsByRoomRes,
  GetItemsRes,
  GetRoomsRes,
  UpdateItemRes,
} from './models/api.res';

const API_URL = 'http://our-home-server:3001';

export const getItemsForRoom = async (roomId: string): Promise<GetItemsByRoomRes> => {
  try {
    const response = await fetch(`${API_URL}/api/items/room/${roomId}`);
    if (!response.ok) {
      throw new Error('Failed to retrieve items');
    }

    return (await response.json()) as GetItemsByRoomRes;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getItems = async (): Promise<GetItemsRes> => {
  try {
    const response = await fetch(`${API_URL}/api/items/all/`);
    if (!response.ok) {
      throw new Error('Failed to retrieve items');
    }

    return (await response.json()) as GetItemsRes;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getItem = async (itemId: string): Promise<GetItemRes> => {
  try {
    const response = await fetch(`${API_URL}/api/items/${itemId}`);
    if (!response.ok) {
      throw new Error('Failed to retrieve item');
    }

    return (await response.json()) as GetItemRes;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addItem = async (itemRequest: ItemFormState): Promise<AddItemRes> => {
  try {
    ItemFormState.parse(itemRequest);
    const response = await fetch(`${API_URL}/api/items/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(itemRequest),
    });
    if (!response.ok) {
      throw new Error('Failed to add item');
    }

    return (await response.json()) as AddItemRes;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteItem = async (itemId: string): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/api/items/${itemId}`, { method: 'DELETE' });
    if (!response.ok) {
      throw new Error('Failed to delete item');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateItem = async (itemId: string, updateItemRequest: ItemFormState): Promise<UpdateItemRes> => {
  try {
    ItemFormState.parse(updateItemRequest);

    const response = await fetch(`${API_URL}/api/items/${itemId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateItemRequest),
    });
    if (!response.ok) {
      throw new Error('Failed to update item');
    }

    return (await response.json()) as UpdateItemRes;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getRooms = async (): Promise<GetRoomsRes> => {
  try {
    const response = await fetch(`${API_URL}/api/rooms/all/`);
    if (!response.ok) {
      throw new Error('Failed to retrieve items');
    }

    return (await response.json()) as GetRoomsRes;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCommentsForItem = async (itemId: string): Promise<GetCommentsForItemRes> => {
  try {
    const response = await fetch(`${API_URL}/api/comments/item/${itemId}`);
    if (!response.ok) {
      throw new Error(`Failed to retrieve comments for item ${itemId}`);
    }

    return (await response.json()) as GetCommentsForItemRes;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteComment = async (commentId: string): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/api/comments/${commentId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete comment');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
