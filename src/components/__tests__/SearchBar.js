import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchBar from '../SearchBar';

it('renders without crashing', () => {
  const sb = shallow(<SearchBar />);
  expect(sb.find('.searchBar').length).toBe(1);
});

it('invokes onFilterTextChanged', () => {
  let filterText = 'oldFilterText';
  const onFilterTextChanged = (newFilterText) => {
    filterText = newFilterText
  }
  const sb = mount(<SearchBar onFilterTextChanged={onFilterTextChanged} />);
  expect(filterText).toBe('oldFilterText');
  sb.find('input[type="text"]').simulate('change', { target: { value: 'newFilterText' } })
  expect(filterText).toBe('newFilterText');
});

it('invokes onOnlyInStockChanged', () => {
  let onlyInStock = false;
  const onOnlyInStockChanged = (newOnlyInStock) => {
    onlyInStock = newOnlyInStock;
  }
  const sb = mount(<SearchBar onOnlyInStockChanged={onOnlyInStockChanged} />);
  expect(onlyInStock).toBe(false);
  sb.find('input[type="checkbox"]').simulate('change', { target: { checked: true } });
  expect(onlyInStock).toBe(true);
});
