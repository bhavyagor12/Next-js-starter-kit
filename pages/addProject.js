import React from 'react'
import Sidebar from '../components/Sidebar'
import { signIn } from 'next-auth/react'
import { VscGithub } from 'react-icons/vsc'
import { AiFillLinkedin, AiFillGoogleSquare } from 'react-icons/ai'
import Link from 'next/link'
function addProject() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="min-h-screen flex-grow flex-col bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="flex items-center justify-center text-2xl text-white">
          <div className="mt-5 font-sans text-6xl font-bold ">
            <span className="mr-2 pt-5 pb-5 text-black">ADD PROJECTS</span>
          </div>
        </div>

        <div className="text- mt-20 flex items-center justify-center">
          <div className="flex w-full max-w-7xl justify-center rounded-2xl bg-white shadow-2xl">
            <div className="w-full ">
              <div className="py-5 text-center">
                <h2 className="mb-2 text-3xl font-bold text-[#0082EF] ">
                  Submit details of your Project
                </h2>
                <div className="mb-2 inline-block w-10 border-2 border-[#0082EF]"></div>
              </div>
              <form>
                <div className="ml-10 mb-6 mt-5">
                  <div className="flex items-center p-5">
                    <label
                      for="email"
                      className="mb-2 block p-2.5 px-20 text-lg font-medium text-gray-900 dark:text-gray-300"
                    >
                      Project Title
                    </label>

                    <input
                      type="text"
                      id="title"
                      className="dark:shadow-sm-light w-100 ml-20 block rounded-lg border border-gray-300 bg-gray-50 p-2.5 px-20 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="flex items-center p-5">
                    <label
                      for="email"
                      className="ml-10 mb-2 block text-lg font-medium text-gray-900 dark:text-gray-300"
                    >
                      Project Description
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="dark:shadow-sm-light w-100 ml-10 block rounded-lg border border-gray-300 bg-gray-50 p-2.5 px-20 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="flex items-center p-5">
                    <label
                      for="email"
                      className="ml-10 mb-2 block text-lg font-medium text-gray-900 dark:text-gray-300"
                    >
                      Members
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="dark:shadow-sm-light w-100 ml-10 block rounded-lg border border-gray-300 bg-gray-50 p-2.5 px-20 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder=""
                      required
                    />
                  </div>
                  <button className="flex  justify-center rounded-full border-2 border-gray-200 px-12 py-2 font-semibold hover:bg-[#0082EF] hover:text-white ">
                    <Link href="/homePage">Add project</Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default addProject
