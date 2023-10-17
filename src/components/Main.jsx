import React from 'react'
import Map from './Map/Map';
import SideMenu from './SideMenu/SideMenu';

const Main = () => {
  return (
    <main className="mapMain">
        <Map />
        <SideMenu />
    </main>
  )
}

export default Main;