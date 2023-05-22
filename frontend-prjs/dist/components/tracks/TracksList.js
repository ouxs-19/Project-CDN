import React from 'react'
import Card from './Card'

export default function TracksList({ item }) {
  return (
    <div className="bg-white py-8 mx-auto max-w-[1300px]">
        <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-6xl">
            All Tracks
          </p>
        <div className='flex flex-row justify-end mt-12'>
            <form className='w-full md:w-1/3'>   
                <label htmlFor="default-search" class="mb-2 text-sm font-medium text-white sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Track" required />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                </div>
            </form>
        </div>
        <div className="mt-20 mx-auto grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {item.tracks.map((track, id) => (
              <Card key={id} item={track} fieldId={item.id}/>
          ))}
        </div>
    </div>

  )
}
