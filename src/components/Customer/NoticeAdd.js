import React from 'react';
import BoardAdd from '../common/board/BoardAdd';

export default function NoticeAdd() {
  return (
    <BoardAdd
      collectionName="notice"
      menuTitle="Customer"
      menuTitleList={['Notice', 'Comments']}
      mainTitle="Notice"
    />
  );
}
