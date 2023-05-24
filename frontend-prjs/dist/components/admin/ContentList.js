import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { BASEURL } from '@/shared/baseUrl'
// import { FIELDSINFOS } from '@/shared/fieldsInfos'
import ViewerPopUp from './ViewerPopUp'
import ContentTable from './ContentTable'


export default function ContentList() {

    // Close Add Content Form
    const [addContentFormOpen, setAddContentForm] = useState(false)

    // Files
    const [filesObjects, setfilesObjects] = useState([])

    const handleClick = () =>{
        setAddContentForm(!addContentFormOpen)
      }

      const handleDelete = (fileObject) => {
        axios({
            method: 'delete',
            url: `${BASEURL}/files/`,
            data: {
                path: `/${fileObject.field.id}/${fileObject.track.id}/${fileObject.module.id}/${fileObject.title}`
            },
          })
          .then((response) => {
            alert('Content Delete successfully')

            axios.get(`${BASEURL}/files`)
            .then(response => {
              const fieldsInfos = response.data;
              let filesObjectsTmp = []
              fieldsInfos.forEach((field) => {
                field.tracks.forEach((track) => {
                  track.modules.forEach((module) => {
                    if(module.links) {
                      module.links.forEach((link) => {
                        filesObjectsTmp.push({
                          ...link,
                          field: {
                            id: field.id,
                            title: field.title
                          },
                          track: {
                            id: track.id,
                            title: track.title
                          },
                          module: {
                            id: module.id,
                            title: module.title
                          }
                        })
                      })
                    }
                  })
                })
              })

              setfilesObjects(filesObjectsTmp)
            })
          })
          .catch((err) => {
            alert("Something Went Wrong ! Please Try Again")
            console.log(err.message);
          })
    }

      useEffect(() => {
        axios.get(`${BASEURL}/files`)
          .then(response => {
            const fieldsInfos = response.data;
            let filesObjectsTmp = []
            fieldsInfos.forEach((field) => {
              field.tracks.forEach((track) => {
                track.modules.forEach((module) => {
                  if(module.links) {
                    module.links.forEach((link) => {
                      filesObjectsTmp.push({
                        ...link,
                        field: {
                          id: field.id,
                          title: field.title
                        },
                        track: {
                          id: track.id,
                          title: track.title
                        },
                        module: {
                          id: module.id,
                          title: module.title
                        }
                      })
                    })
                  }
                })
              })
            })

            setfilesObjects(filesObjectsTmp)
          })
      }, [])

  return (
    <div className="bg-white py-8 mx-auto max-w-[1300px]">
        <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-6xl">
            Global Content
          </p>
        <div className='flex flex-row justify-between mt-12'>
            <form className='w-full md:w-1/3'>   
                <label for="default-search" class="mb-2 text-sm font-medium text-white sr-only">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Field" required />
                    <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                </div>
            </form>
            <button type="button" onClick={() => handleClick()} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-4 py-2">Add Content +</button>
        </div>
        <div className="mt-20 mx-auto grid grid-cols-1 gap-y-8">
          <ContentTable filesObjects={filesObjects} handleDelete={handleDelete} />
        </div>
        {addContentFormOpen ?
            <ViewerPopUp open={addContentFormOpen} setOpen={setAddContentForm} setfilesObjects={setfilesObjects}/>
            :
            <></>
        }
    </div>

  )
}