import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


export default class FilterableProductTable extends Component {
  constructor (props) {
    super(props);
    this.state = {
      filterText: '',
      onlyInStock: false
    };
    this.onFilterTextChanged = this.onFilterTextChanged.bind(this);
    this.onOnlyInStockChanged = this.onOnlyInStockChanged.bind(this);
  }

  onFilterTextChanged (e) {
    this.setState({ filterText: e.target.value });
  }

  onOnlyInStockChanged (e) {
    this.setState({ onlyInStock: e.target.checked });
  }

  render() {
    const { filterText, onlyInStock } = this.state;
    return (
      <div className='productTable'>
        <SearchBar 
          filterText={filterText}
          onlyInStock={onlyInStock}
          onFilterTextChanged={this.onFilterTextChanged}
          onOnlyInStockChanged={this.onOnlyInStockChanged}
        />
        <ProductTable 
          products={this.props.products} 
          filterText={filterText}
          onlyInStock={onlyInStock}
        />
      </div>
    );
  }
};
