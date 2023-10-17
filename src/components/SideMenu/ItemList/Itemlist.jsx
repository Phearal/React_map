import React from 'react'

const items = [];

function createItems() {
    for(let i = 0 ; i > 100 ; i++) {
        let item = {
            id: i,
            title: "item title",
            content: "item content"
        }
        items.push(item);
    }
}
console.log(items);

const Itemlist = () => {
  return (
    <ul>
        {

        }
    </ul>
  )
}

export default Itemlist