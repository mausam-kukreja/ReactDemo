import React, { PropTypes } from 'react';


class Item extends React.Component {

   constructor(props) {
    super(props);
  }


   render() {
    return (
     <div>{this.props.name}</div>
    );
  }
  }




export default Item;
