import React from 'react'
import {HomeIcon, SearchIcon, LibraryIcon, PlusCircleIcon} from "@heroicons/react/outline";

export default function Sidebar() {
  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
      <div className="space-y-4">
            <button className="flex items-center space-x-2 hover:text-white">
              <User-circleIcon className="h-5 w-5" />
              <p>Profile</p>
          </button>
          <button className="flex items-center space-x-2 hover:text-white">
              <HomeIcon className="h-5 w-5" />
              <p>Home</p>
          </button>
          <button className="flex items-center space-x-2 hover:text-white">
              <HomeIcon className="h-5 w-5" />
              <p>My Projects</p>
          </button>
          <button className="flex items-center space-x-2 hover:text-white">
              <HomeIcon className="h-5 w-5" />
              <p>Home</p>
          </button>
          <button className="flex items-center space-x-2 hover:text-white">
              <NewspaperIcon className="h-5 w-5" />
              <p>News</p>
          </button>
          <hr className="border-t-[0.1px] border-gray-900"/>
      </div>
    </div>
  )
}
