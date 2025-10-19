import { createFileRoute } from '@tanstack/react-router';

import { ItemDetails } from '../../components/ItemsContainer/ItemDetails';

export const Route = createFileRoute('/item/$itemId')({
  component: ItemDetailsRoute,
});

function ItemDetailsRoute() {
  const { itemId } = Route.useParams();
  return <ItemDetails itemId={itemId} />;
}
