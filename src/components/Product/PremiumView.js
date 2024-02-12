import React from 'react';
import BoardView from '../common/board/BoardView';

export default function PremiumView() {
  return (
    <BoardView
      collectionName="premium"
      menuTitle="Product"
      menuTitleList={['Premium', 'Special', 'Others']}
      mainTitle="Premium"
    />
  );
}
