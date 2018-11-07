import React, { Component } from 'react';

const ProductCategoryRow = ({ category }) => (
  <tr className='category'>
    <th colSpan="2">{category}</th>
  </tr>
);

const ProductRow = ({ product }) => (
  <tr className='product'>
    <td>
      {product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span>}
    </td>
    <td>{product.price}</td>
  </tr>
);

export default class ProductTable extends Component {
  render () {
    const { products, filterText, onlyInStock } = this.props;
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (onlyInStock && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
