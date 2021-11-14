import React, { useState} from 'react';
import './document.css';
import ListItems from './ListItems'

function Document() {
    const [itemList, setItemList] = useState({
        items:[],
        currentItem:{
            text:'',
            key:''
        }
    })
    const handleInput = (e) => {
        setItemList({...itemList,
        currentItem:{
            text: e.target.value,
            key: Date.now()
        }
        })
    }
    const addItem = (e) =>{
        e.preventDefault();
        const newItem = itemList.currentItem;
        console.log(newItem);
        if(newItem.text!==""){
            const item = [...itemList.items, newItem];
            setItemList({
                items: item,
                currentItem:{
                    text:'',
                    key:''
                }
            })
        }
    }
    const deleteItem = (key) => {
        const filteredItem = itemList.items.filter(item =>
            item.key!==key
            );
        setItemList({
            ...itemList,
            items: filteredItem
        })

    }
    const setItem = (e) => {
        const item = itemList.items;
        item.map(item =>{
            item.text=e.text;
        })
        setItemList({
            ...itemList,
            items: item
        })
    }
    return (<div className="doc">
        <header>
            <form id="to-do-form" onSubmit={addItem} >
                <input type="text" placeholder="Enter Text" value={itemList.currentItem.text} onChange={handleInput} />
                <button type="submit">Add</button>
            </form>
            <ListItems items={itemList.items} deleteItem={deleteItem} setUpdate={setItem} />
        </header>
        </div>
    )
}

export default Document;
