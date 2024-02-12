import React from 'react';
import BoardEdit from '../common/board/BoardEdit';

export default function OthersEdit() {
  return (
    <BoardEdit
      collectionName="others"
      menuTitle="Product"
      menuTitleList={['Premium', 'Special', 'Others']}
      mainTitle="Others"
    />
  );
}
