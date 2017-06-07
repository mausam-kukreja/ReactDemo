
import React, { PropTypes } from 'react';
import Item from './Item';

const List = ({
  todo
}: {
  todo: Array<SearchResult>
}) => (
  <div className="ui link cards">
    {todo.map((item, i) => <Item key={i} name={item} />)}
  </div>
);

export default List;
