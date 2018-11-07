import React, { Component } from 'react';

export default class SearchBar extends Component {
  render () {
    const { onFilterTextChanged, onOnlyInStockChanged, filterText, onlyInStock } = this.props;
    return (
      <form className='searchBar'>
        <input type="text" placeholder="Search..." value={filterText} onChange={(e) => { onFilterTextChanged(e.target.value); }} />
        <p>
          <input type="checkbox" value={onlyInStock} onChange={(e) => { onOnlyInStockChanged(e.target.checked); }} />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}
