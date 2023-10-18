import React, { useEffect, useState } from 'react'
import "./itemList.css"

function ItemList() {
  const [items, setItems] = useState([]);

  // useEffect permet de ne déclencher qu'une seule fois le comportement au chargement de la page
  useEffect(() => {
    fetch("http://localhost:3000/assets/data/items.json")
      .then((response) => response.json())
      .then(data => setItems(data))
  }, [])


  return (
    <ul className="item-list">
      {
        items.map((item) => {
          return (
            <li className="list-item">
              <div className="item-text-container">
                <h3>{item.title}</h3>
                <p>{item.adresse}</p>
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