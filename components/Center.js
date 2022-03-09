import React from 'react'
import Image from 'next/image'
import Home_Page from '../assets/Home_Page.jpeg'
import Particle from '../components/Particles'
import Card from './Card'
import Link from 'next/link'

const Center = () => {
  return (
    <div className="min-h-screen flex-grow flex-col bg-gradient-to-r from-cyan-500 to-blue-500">
      <Particle />
      <div className="flex items-center justify-center text-2xl text-white">
        <div className="mt-5 font-sans text-6xl font-bold ">
          <span className="mr-2 text-black ">Smart</span> and{' '}
          <span className="ml-2 mr-2 text-black">talented</span> people are our
          thing.
        </div>
      </div>

      <div className="flex justify-center">
        <Link href="/findProject">
          <div className="m-10 flex p-10">
            <div class="max-w-sm overflow-hidden rounded-xl bg-gray-100 shadow-lg">
              <div class="px-6 py-4">
                <div class="mb-2 text-xl font-bold">FIND A PROJECT</div>
                <p class="py-3 text-base text-gray-700">
                  Find people that are working on projects that need members to
                  contribute. This page basically shows how many projects are
                  available in the feed that you can view
                </p>
              </div>
              <div class="px-6 pt-10 pb-2">
                <span class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  #developers
                </span>
                <span class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  #members
                </span>
                <span class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  #collaborators
                </span>
              </div>
            </div>
          </div>
        </Link>

        <div className="m-10 flex p-10">
          <Link href="/addProject">
            <div class="max-w-sm overflow-hidden rounded-xl bg-gray-100 shadow-lg">
              <div class="px-6 py-4">
                <div class="mb-2 text-xl font-bold">ADD A NEW PROJECT</div>
                <p class="py-3 text-base text-gray-700">
                  Find members to help you create your own project, helps you
                  connect to people with your interests and allows you to build
                  a community for futher usage
                </p>
              </div>
              <div class="px-6 pt-10 pb-2">
                <span class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  #projects
                </span>
                <span class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  #owners
                </span>
                <span class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  #connections
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="m-10 flex p-10">
          <Link href="/newsPage">
            <div class="max-w-sm overflow-hidden rounded-xl bg-gray-100 shadow-lg">
              <div class="px-6 py-4">
                <div class="mb-2 text-xl font-bold">
                  READ THE LATEST TECH NEWS
                </div>
                <p class="py-3 text-base text-gray-700">
                  This is the news that will be available for you to check out
                  This page is right now fetching all current news that you will
                  be interested in and just to keep the developers on our site
                  updated
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  #news
                </span>
                <span class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  #feed
                </span>
                <span class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  #updates
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex justify-around">
        <Link href="chat">
          <div className="m-10 flex p-10">
            <div class="max-w-sm overflow-hidden rounded-xl bg-gray-100 shadow-lg">
              <div class="px-6 py-4">
                <div class="mb-2 text-xl font-bold">
                  CHAT WITH OTHER DEVELOPERS!
                </div>
                <p class="py-3 text-base text-gray-700">
                  This page will help you connect with other developers and will
                  allow sharing of info so that you don't have to use 3rd party
                  tools.
                </p>
              </div>
              <div class="px-6 pt-16 pb-0">
                <span class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  #connect
                </span>
                <span class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  #chat
                </span>
                <span class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  #messages
                </span>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/profile">
          <div className="m-10 flex p-10">
            <div class="max-w-sm overflow-hidden rounded-xl bg-gray-100 shadow-lg">
              <div class="px-6 py-4">
                <div class="mb-2 text-xl font-bold">VIEW YOUR PROFILE</div>
                <p class="py-3 text-base text-gray-700">
                  This page will be the base of your account. This page also
                  allows you to add what you have worked on before so that
                  people can see what you like and dislike Everything here will
                  be developer related.
                </p>
              </div>
              <div class="relative px-6 pt-4 pb-2">
                <span class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  #photography
                </span>
                <span class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  #travel
                </span>
                <span class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  #winter
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Center
