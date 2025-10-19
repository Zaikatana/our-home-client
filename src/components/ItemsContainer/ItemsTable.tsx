import { MessageSquare, Pencil, Trash2 } from 'lucide-react';

import { Button, ButtonGroup, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@heroui/react';
import { useNavigate } from '@tanstack/react-router';

import type { Item, Room } from '../../models';
import { formatPrice } from '../../utils';

interface ItemsTableProps {
  items: Item[];
  room?: Room;
}

const ItemsTable = ({ items, room }: ItemsTableProps) => {
  const filteredItems = room !== undefined ? items.filter((item) => item.type.roomId === room.roomId) : items;
  const navigate = useNavigate();

  return (
    <div className="c-items-table">
      <Table aria-label="Items table">
        <TableHeader>
          <TableColumn>Item Name</TableColumn>
          <TableColumn>Room</TableColumn>
          <TableColumn>Description</TableColumn>
          <TableColumn>Cost ($)</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody emptyContent={'No rows to display.'}>
          {filteredItems.map((item) => {
            return (
              <TableRow key={item.itemId}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.type.name}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{formatPrice(item.cost)}</TableCell>
                <TableCell>
                  <ButtonGroup>
                    <Button isIconOnly variant="flat" aria-label="Edit">
                      <Pencil />
                    </Button>
                    <Button
                      isIconOnly
                      aria-label="View comments"
                      variant="flat"
                      onPress={() => navigate({ to: '/item/$itemId', params: { itemId: item.itemId } })}
                    >
                      <MessageSquare />
                    </Button>
                    <Button isIconOnly variant="flat" aria-label="Delete" color="danger">
                      <Trash2 />
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export { ItemsTable };
