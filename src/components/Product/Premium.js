import React from 'react';
import ProductList from '../common/board/ProductList';

export default function Premium() {
  return (
    <ProductList
      collectionName="premium"
      menuTitle="Product"
      menuTitleList={['Premium', 'Special', 'Others']}
      mainTitle="Premium"
      isAdminPage={true}
    />
  );
}
