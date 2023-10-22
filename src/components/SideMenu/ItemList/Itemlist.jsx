import React, { useEffect, useState } from 'react'
import "./itemList.css"

function ItemList({ visibleItems }) {
  const [items, setItems] = useState([]);

  console.log(visibleItems);

  return (
    <ul className="item-list">
      {
        visibleItems.map((item) => {
          return (
            <li key={item.id} className="list-item">
              <div className="item-text-container">
                <h3 title={item.title}>{item.title}</h3>
                <p title={item.adresse}>{item.adresse}</p>
              </div>
              <div className="sideitem-img-container">
                <img src={`/assets/img/skateparks/${item.img}`} alt="" />
              </div>
            </li>
          )
        })}
    </ul>
  )

}

export default ItemList