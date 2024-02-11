import React from 'react';
import BoardView from '../common/board/BoardView';

export default function InquiryView() {
  return (
    <BoardView
      collectionName="inquiry"
      menuTitle="Inquiry"
      menuTitleList={['Inquiry']}
      mainTitle="Inquiry"
    />
  );
}
