import React from 'react';
import BoardEdit from '../common/board/BoardEdit';

export default function PremiumEdit() {
  return (
    <BoardEdit
      collectionName="premium"
      menuTitle="Product"
      menuTitleList={['Premium', 'Special', 'Others']}
      mainTitle="Premium"
    />
  );
}
