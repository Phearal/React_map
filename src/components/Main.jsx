import React, { useState } from 'react';
import Map from './Map/Map';
import SideMenu from './SideMenu/SideMenu';

function Main() {
  const [visibleItems, setVisibleItems] = useState([]);

  return (
    <main className="mapMain">
      <Map setMapVisibleItems={setVisibleItems} />
      <SideMenu visibleItems={visibleItems} />
    </main>
  )
}

export default Main;