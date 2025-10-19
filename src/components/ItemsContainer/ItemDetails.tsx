import { Suspense } from 'react';

import { Spinner } from '@heroui/react';
import { useSuspenseQueries } from '@tanstack/react-query';

import { getCommentsForItem, getItem } from '../../api';

interface ItemDetailsProps {
  itemId: string;
}

const ItemDetails = ({ itemId }: ItemDetailsProps) => {
  const [{ error: commentsError, data: commentsResponse }, { error: itemError, data: itemResponse }] =
    useSuspenseQueries({
      queries: [
        {
          queryKey: ['comments', itemId],
          queryFn: () => getCommentsForItem(itemId),
        },
        { queryKey: ['item', itemId], queryFn: () => getItem(itemId) },
      ],
    });

  const hasError = commentsError !== null || itemError !== null;

  if (hasError) {
    return <div>Error detected...</div>;
  }

  const { comments } = commentsResponse;
  const { item } = itemResponse;

  return (
    <div className="c-item-details">
      <Suspense fallback={<Spinner size="lg" />}>
        <h1>Comments for {item.name}</h1>
        {comments.map((comment) => {
          return (
            <p key={comment.commentId}>
              {comment.author} - {comment.content}
            </p>
          );
        })}
      </Suspense>
    </div>
  );
};

export { ItemDetails };
