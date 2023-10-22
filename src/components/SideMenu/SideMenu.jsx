import React from 'react'
import "./sidemenu.css"
import Itemlist from './ItemList/Itemlist'
import SideMenuHeader from './SideMenuHeader/SideMenuHeader'

const SideMenu = ({ visibleItems }) => {
  return (
    <div className="sidemenu">
        <SideMenuHeader visibleItems={visibleItems} />
        <Itemlist visibleItems={visibleItems} />
    </div>
  )
}

export default SideMenu
