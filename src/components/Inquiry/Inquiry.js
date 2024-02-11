import React from 'react';
import BoardList from '../common/board/BoardList';

export default function Inquiry() {
  return (
    <BoardList
      collectionName="inquiry"
      menuTitle="Inquiry"
      menuTitleList={['Inquiry']}
      mainTitle="Inquiry"
      description="Please write freely about business matter here or use email directly (suvin@suvincos.com)"
      isAdminPage={false}
    />
  );
}
