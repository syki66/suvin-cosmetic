import React from 'react';
import BoardView from '../common/board/BoardView';

export default function CommentsView() {
  return (
    <BoardView
      collectionName="comments"
      menuTitle="Customer"
      menuTitleList={['Notice', 'Comments']}
      mainTitle="Comments"
    />
  );
}
