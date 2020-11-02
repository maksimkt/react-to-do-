import React from 'react';
import ListItems from './ListItem'
import '../src/App.css'
import { v4 as uuidv4 } from 'uuid';


class App extends React.Component{
  constructor(props){
    super(props);

    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      },
      done:false
    
    }
    this.handleInput = this.handleInput.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.setUpdate = this.setUpdate.bind(this)
    
  }


  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key:uuidv4()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    
    if(newItem !==""){
      const newItems =[...this.state.items, newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }
  deleteItem(key){
    const filter = this.state.items.filter(item =>
      item.key!==key);
      this.setState({
        items:filter
      })
  }

  setUpdate(text, key){
    const items = this.state.items;
    items.map(item =>{
      if(item.key===key){
        item.text=text;
      }
    })
    this.setState({
      items:items
    })
  }
  render(){
    return(
      <div className='container'>
        <h1>To do:</h1>
        <ListItems
          
          items={this.state.items}
          deleteItem={this.deleteItem}
          done={this.doneTask}
          setUpdate={this.setUpdate}>
            
        </ListItems>
        <form id="todo-form" onSubmit={this.addItem}>
          <hr></hr>
          <p className="task">Task <input className="task-add" type="text" placeholder="what do need to do ?"
          value={this.state.currentItem.text}
          onChange={this.handleInput}/></p>
          
          <button type="submit" className='save-btn'>Save item</button>

        </form>
        
      </div>
      
    );
  }
}

  
export default App;
