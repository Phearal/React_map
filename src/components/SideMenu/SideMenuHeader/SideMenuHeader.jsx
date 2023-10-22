import React from 'react'
import './SideMenuHeader.css'

function SideMenuHeader({ visibleItems }) {
  return (
    <div className="side-menu-header">
        <h1>SPOTLOC</h1>
        <p>{visibleItems.length} spots trouvés :</p>
    </div>
  )
}

export default SideMenuHeader