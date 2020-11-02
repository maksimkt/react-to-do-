import React from 'react';

function ListItems(props){
    const items = props.items;
    const listItems = items.map( item =>
        {
            return <div className = "list" key={item.key}>
                <p className = 'item-field'>
                    <input type="text"
                    className='item-text '
                    id={item.key}
                    value={item.text}
                    onChange={
                        (e) =>{
                            props.setUpdate(e.target.value, item.key)
                        }
                    }
                    />
                 <span>
                    <button className="done-btn"
                    >✔</button>
                 </span>
                 <span>
                    <button className="delet-btn"
                    onClick={() => props.deleteItem(item.key)}>✘</button>
                 </span>
                </p>
                
            </div>
        })

    return(
        <div>{listItems}</div>
    )
}

export default ListItems;