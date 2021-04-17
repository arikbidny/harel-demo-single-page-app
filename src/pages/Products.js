import React from 'react';
import products from '../data/products.json';
import { Card, Col, Row } from 'antd';

const { Meta } = Card;

const ProductsPage = () => {
  return (
    <div>
      {products.map((product) => {
        return (
          <Card
            className='product-card'
            key={product.id}
            hoverable
            style={{ width: 350 }}
            cover={<img alt='example' src={product.imgUrl} />}
          >
            <Meta title={product.name} description={product.name} />
            <div style={{ marginTop: '5px' }}>
              <strong>Price:</strong> {product.price}$
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default ProductsPage;
