import React from 'react';

import './search-box.styles.scss';

export const SearchBox = props => (
  <input
    className='search-box'
    type='search'
    placeholder='filter list'
    onChange={props.onSearchChange}
  />
);