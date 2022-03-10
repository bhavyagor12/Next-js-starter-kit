import React from 'react'
import Sidebar from '../components/Sidebar'
import Profile from '../components/Profile'

function profile() {
  return (
    <div className="flex">
      <Sidebar />
      <Profile />
    </div>
  )
}

export default profile
