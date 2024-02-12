import React from 'react';
import BoardAdd from '../common/board/BoardAdd';

export default function SpecialAdd() {
  return (
    <BoardAdd
      collectionName="special"
      menuTitle="Product"
      menuTitleList={['Premium', 'Special', 'Others']}
      mainTitle="Special"
    />
  );
}
