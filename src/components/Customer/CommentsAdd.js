import React from 'react';
import BoardAdd from '../common/board/BoardAdd';

export default function CommentsAdd() {
  return (
    <BoardAdd
      collectionName="comments"
      menuTitle="Customer"
      menuTitleList={['Notice', 'Comments']}
      mainTitle="Comments"
    />
  );
}
