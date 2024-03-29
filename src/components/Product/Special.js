import React from 'react';
import ProductList from '../common/board/ProductList';

export default function Special() {
  return (
    <ProductList
      collectionName="special"
      menuTitle="Product"
      menuTitleList={['Premium', 'Special', 'Others']}
      mainTitle="Special"
      isAdminPage={true}
    />
  );
}
