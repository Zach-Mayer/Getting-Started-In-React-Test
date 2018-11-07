import React from 'react';
import { shallow, mount } from 'enzyme';
import FilterableProductTable from '../FilterableProductTable';
import ProductTable from '../ProductTable';
import SearchBar from '../SearchBar';

let products;

beforeEach(() => {
  products = [
    {"category": "TEST_1", "price": "$1.00", "stocked": true, "name": "PRODUCT_1"},
    {"category": "TEST_2", "price": "$2.50", "stocked": true, "name": "PRODUCT_2"},
    {"category": "TEST_2", "price": "$2.01", "stocked": false, "name": "PRODUCT_3"},
  ]
});

afterEach(() => {
  products = undefined;
});

it('renders without crashing', () => {
  const fpt = shallow(<FilterableProductTable products={[]} />);
  expect(fpt.find(SearchBar).length).toBe(1);
  expect(fpt.find(ProductTable).length).toBe(1);
});

it('passes products to ProductTable', () => {
  const fpt = shallow(<FilterableProductTable products={products} />);
  expect(fpt.find(ProductTable).prop('products')).toBe(products);
});

it('updates filterText', () => {
  const fpt = mount(<FilterableProductTable products={products} />);
  expect(fpt.state('filterText')).toBe('');
  fpt.instance().onFilterTextChanged('test_filter');
  expect(fpt.state('filterText')).toBe('test_filter');
});

it('updates onlyInStock', () => {
  const fpt = mount(<FilterableProductTable products={products} />);
  expect(fpt.state('onlyInStock')).toBe(false);
  fpt.instance().onOnlyInStockChanged(true);
  expect(fpt.state('onlyInStock')).toBe(true);
});
