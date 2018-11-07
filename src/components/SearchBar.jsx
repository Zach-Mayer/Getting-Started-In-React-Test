import React, { Component } from 'react';

export default class SearchBar extends Component {
  render () {
    const { onFilterTextChanged, onOnlyInStockChanged, filterText, onlyInStock } = this.props;
    return (
      <form>
        <input type="text" placeholder="Search..." value={filterText} onChange={onFilterTextChanged} />
        <p>
          <input type="checkbox" value={onlyInStock} onChange={onOnlyInStockChanged} />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}
