import React from 'react'
import Sidebar from '../components/Sidebar'
import Center from '../components/Center'
function homePage() {
  return (
   <>
   <div className="flex">
   <Sidebar/>
   <Center/>
   </div>
   </>
  )
}

export default homePage