import React from 'react'
import NewsItem from '../components/NewsItem'
import Sidebar from '../components/Sidebar'
import { NewsContextProvider } from '../context/NewsContext'
import News from '../components/News'
function newsPage() {
  return (
    <NewsContextProvider>
      <div className="flex">
        <Sidebar />
        <News />
      </div>
    </NewsContextProvider>
  )
}

export default newsPage
