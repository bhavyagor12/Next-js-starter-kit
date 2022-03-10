import React from 'react'
import Sidebar from '../components/Sidebar'
import AddProject from '../components/AddProject'

export default function addProject() {
  return (
    <div className="flex">
      <Sidebar />
      <AddProject />
    </div>
  )
}
