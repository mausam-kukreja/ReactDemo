import React, { Component } from 'react';
import List from './List';

class Header extends Component {
  addTodo: () => void;
  _onKeyUp: (e: SyntheticInputEvent & KeyboardEvent) => void; 

  constructor(props) {
    super(props);
    this.state=  {
      todo: ['todo 1','todo 2','todo 3'],
      text : ""
    };



    this.addTodo = _ => { this.setState({
        todo: [...this.state.todo,this.state.text],
      }, this.onadded());};
    this._onKeyUp = e => {
       this.setState({
        text: e.target.value
      }, this.onEnter(e.keyCode));
    };
  }

  onEnter = (keyCode: number) => _ => keyCode === 13 && this.addTodo();
  onadded = () =>_=> console.log(this.state);

  render() {
    return (
      <div >
          <input
            type="text"
            onKeyUp={this._onKeyUp}
            placeholder="Add to do..."
            autoFocus
          />
         <List {...this.state} />
      </div>
    );
  }
}
export default Header;