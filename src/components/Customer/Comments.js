import React from 'react';
import BoardList from '../common/board/BoardList';

export default function Comments() {
  return (
    <BoardList
      collectionName="comments"
      menuTitle="Customer"
      menuTitleList={['Notice', 'Comments']}
      mainTitle="Comments"
      isAdminPage={false}
    />
  );
}
