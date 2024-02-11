import React from 'react';
import BoardView from '../common/board/BoardView';

export default function NoticeView() {
  return (
    <BoardView
      collectionName="notice"
      menuTitle="Customer"
      menuTitleList={['Notice', 'Comments']}
      mainTitle="Notice"
    />
  );
}
