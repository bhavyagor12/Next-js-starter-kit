import Head from 'next/head'

const Card = ({title,desc,names,techStack}) => (
  <div className="px-8 mt-10">
    <Head>
      <title>Article Preview Component</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="mx-auto lg:w-3/5 lg:flex lg:flex-row lg:h-auto">
      <img className="rounded-tr-md rounded-tl-md h-48 w-full lg:h-auto lg:w-2/5 lg:rounded-bl-md lg:rounded-tr-none" src="/images/drawers.jpg" alt="" />
      <div className="bg-white p-8 rounded-bl-md rounded-br-md lg:rounded-bl-none lg:rounded-tr-md">
        <h2 className="text-gray-700 font-semibold">{title}</h2>
        <p className="text-sm text-gray-600 mt-4">{desc}</p>
        <div className="flex items-center mt-8">
          <div className="flex items-center">
            <img className="h-10 w-10 rounded-full" src="/images/avatar-michelle.jpg" alt="" />
            <div className="ml-4">
              <p className="text-gray-800 text-sm font-semibold">{techStack}</p>
              <p className="text-gray-600 text-sm">{names}</p>
            </div>
          </div>
          <div className="w-8 h-8 ml-auto bg-gray-200 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" /></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Card