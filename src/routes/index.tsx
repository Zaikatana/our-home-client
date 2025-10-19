import { createFileRoute } from '@tanstack/react-router';

import { ItemsContainer } from '../components/ItemsContainer';

export const Route = createFileRoute('/')({
  component: ItemsContainer,
});
