import React from 'react';
import BoardList from '../common/board/BoardList';

export default function Notice() {
  return (
    <BoardList
      collectionName="notice"
      menuTitle="Customer"
      menuTitleList={['Notice', 'Comments']}
      mainTitle="Notice"
      isAdminPage={true}
    />
  );
}
