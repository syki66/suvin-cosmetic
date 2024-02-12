import React from 'react';
import BoardAdd from '../common/board/BoardAdd';

export default function OthersAdd() {
  return (
    <BoardAdd
      collectionName="others"
      menuTitle="Product"
      menuTitleList={['Premium', 'Special', 'Others']}
      mainTitle="Others"
    />
  );
}
