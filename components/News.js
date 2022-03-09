import React, { useContext } from 'react'
import { NewsContext } from '../context/NewsContext'
import NewsItem from './NewsItem'

function News(props) {
  const { data } = useContext(NewsContext)
  console.log(data)
  const news_url =
    'https://newsapi.org/v2/top-headlines?&apiKey=8feda37496a144feb095c3f6c2e18312&q='

  return (
    <div className="min-h-screen flex-grow bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex items-center justify-center text-2xl text-white">
        <div className="mt-5 font-sans text-6xl font-bold ">
          <span className="mr-2 text-black ">Latest</span>
          <span className="ml-2 mr-2 text-black">Developer News</span>
        </div>
      </div>
      <div className="justify center flex">
        {data
          ? data.articles.map((news) => (
              <div className="flex">
                {' '}
                <NewsItem data={news} key={news_url} />{' '}
              </div>
            ))
          : 'no news'}
      </div>
    </div>
  )
}

export default News
