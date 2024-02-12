import React from 'react';
import BoardAdd from '../common/board/BoardAdd';

export default function PremiumAdd() {
  return (
    <BoardAdd
      collectionName="premium"
      menuTitle="Product"
      menuTitleList={['Premium', 'Special', 'Others']}
      mainTitle="Premium"
    />
  );
}
