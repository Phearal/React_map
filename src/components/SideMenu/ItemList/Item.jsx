import React from 'react'

function Item ({item, key}) {

  return (
    <li className="listItem">
        <h5>{item}</h5>
    </li>
  )
}

export default Item