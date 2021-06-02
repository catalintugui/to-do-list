import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      newItem: "",
      list: [],
    }
  }

    updateInput(key, value){
      this.setState({
        [key]: value
      })
    }

    addItem(){
      const newItem = {
        id: 1 + Math.random(),
        value: this.state.newItem.slice(),
      }  

      const list = [...this.state.list];

      if(newItem.value.length > 0) list.push(newItem);

      this.setState({
        list,
        newItem: "",
      })
  }

  deleteItem(id){
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id !== id)

    this.setState({list: updatedList})
  }

  itemCompleted(){

  }

  render(){
  return (
    <div className="App">
      <h1>To Do List</h1>
          <div className="input-container">
            <input 
              type="text"
              placeholder="type your item"
              value={this.state.newItem}
              onChange = { e => this.updateInput("newItem", e.target.value)}
            />
            <button
              onClick={() => this.addItem()}
              > Add item
            </button>
          </div>
      <ul>
        {this.state.list.map((item, index) => {
          return (
            <li 
              key={index} 
              id={item.id}
            >
              {item.value}
              <button
              onClick={()=> this.deleteItem(item.id)}>
              x
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  );
  }
}

export default App;

