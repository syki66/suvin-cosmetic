import React from 'react';
import BoardEdit from '../common/board/BoardEdit';

export default function CommentsEdit() {
  return (
    <BoardEdit
      collectionName="comments"
      menuTitle="Customer"
      menuTitleList={['Notice', 'Comments']}
      mainTitle="Comments"
    />
  );
}
