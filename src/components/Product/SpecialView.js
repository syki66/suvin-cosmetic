import React from 'react';
import BoardView from '../common/board/BoardView';

export default function SpecialView() {
  return (
    <BoardView
      collectionName="special"
      menuTitle="Product"
      menuTitleList={['Premium', 'Special', 'Others']}
      mainTitle="Special"
    />
  );
}
