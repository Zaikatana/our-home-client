import { Card, CardBody, Spinner, Tab, Tabs } from '@heroui/react';
import { useSuspenseQueries } from '@tanstack/react-query';

import { Suspense } from 'react';
import { getItems, getRooms } from '../../api';
import type { Room } from '../../models';
import { AddItemModal } from './AddItemModal';
import { ItemsTable } from './ItemsTable';

const ItemsContainer = () => {
  const [{ error: itemsError, data: itemsResponse }, { error: roomsError, data: roomsResponse }] = useSuspenseQueries({
    queries: [
      {
        queryKey: ['items'],
        queryFn: () => getItems(),
      },
      {
        queryKey: ['rooms'],
        queryFn: () => getRooms(),
      },
    ],
  });

  const hasError = itemsError !== null || roomsError !== null;

  if (hasError) {
    return <div>Error detected...</div>;
  }

  const { items } = itemsResponse;
  const { rooms } = roomsResponse;
  const roomsWithDefault: Room[] = [{ roomId: 'all', name: 'All' }, ...rooms];

  return (
    <div className="c-items-container">
      <Suspense fallback={<Spinner size="lg" />}>
        <Tabs aria-label="Rooms" isVertical={true} defaultSelectedKey="all">
          {roomsWithDefault.map((room) => {
            return (
              <Tab className="grow" key={room.roomId} aria-label={room.name} title={room.name}>
                <Card>
                  <CardBody>
                    <ItemsTable items={items} room={room.roomId === 'all' ? undefined : room} />
                  </CardBody>
                </Card>
              </Tab>
            );
          })}
        </Tabs>
        <AddItemModal rooms={rooms} />
      </Suspense>
    </div>
  );
};

export { ItemsContainer };
