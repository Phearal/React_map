import React from 'react'
import Item from './Item';
import "./itemList.css"

function ItemList() {
  const items = [];

  for (let i = 1; i <= 51; i++) {
    items.push({
      key: i,
      title: `Item ${i}`
    });
  }


  const listItems = items.map(item => (
    <li key={item.key} className="listItem">
      <h5>{item.key} : {item.title}</h5>
    </li>
  ));

  return (
    <ul className="item-list">
      {listItems}
    </ul>
  )
}

export default ItemList