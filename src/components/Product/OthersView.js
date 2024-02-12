import React from 'react';
import BoardView from '../common/board/BoardView';

export default function OthersView() {
  return (
    <BoardView
      collectionName="others"
      menuTitle="Product"
      menuTitleList={['Premium', 'Special', 'Others']}
      mainTitle="Others"
    />
  );
}
