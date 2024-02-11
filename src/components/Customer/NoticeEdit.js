import React from 'react';
import BoardEdit from '../common/board/BoardEdit';

export default function NoticeEdit() {
  return (
    <BoardEdit
      collectionName="notice"
      menuTitle="Customer"
      menuTitleList={['Notice', 'Comments']}
      mainTitle="Notice"
    />
  );
}
