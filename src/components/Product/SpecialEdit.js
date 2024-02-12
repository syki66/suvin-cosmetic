import React from 'react';
import BoardEdit from '../common/board/BoardEdit';

export default function SpecialEdit() {
  return (
    <BoardEdit
      collectionName="special"
      menuTitle="Product"
      menuTitleList={['Premium', 'Special', 'Others']}
      mainTitle="Special"
    />
  );
}
