import React from 'react'
import "./sidemenu.css"
import Itemlist from './ItemList/Itemlist'

const SideMenu = ({ visibleItems }) => {
  return (
    <div className="sidemenu">
        <Itemlist visibleItems={visibleItems} />
    </div>
  )
}

export default SideMenu
