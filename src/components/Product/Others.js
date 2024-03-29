import React from 'react';
import ProductList from '../common/board/ProductList';

export default function Others() {
  return (
    <ProductList
      collectionName="others"
      menuTitle="Product"
      menuTitleList={['Premium', 'Special', 'Others']}
      mainTitle="Others"
      isAdminPage={true}
    />
  );
}
