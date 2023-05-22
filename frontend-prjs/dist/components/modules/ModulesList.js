import React, { useState } from 'react'
import ViewerPopUp from '../singleTrack/documents/ViewerPopUp'

export default function ModulesList({ modules }) {

    const [module, setModule] = useState(modules[0])

      // Close Doc Viewer
    const [viewerOpen, setViewerOpen] = useState(false)

    // SelectedDoc
    const [selectedDoc, setSelectedDoc] = useState([])

    const handleClick = (link) =>{
        setSelectedDoc([{
          ...link,
          fileType: link.type.toLowerCase(),
        }])
        setViewerOpen(!viewerOpen)
      }


    const modulesList = modules.map((module, id) => (
        <li key={id} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <button onClick={() => setModule(module)} className='hover:cursor-pointer w-full text-left'>
                <span className="ml-3 capitalize">{module.title}</span>
            </button>
        </li>
    ))

    const pdfsList = module.links.map((link, id) => {
        if (link.type.toLowerCase() === "pdf") {
            return (<li key={id} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-400 hover:text-white">
                <button onClick={() => handleClick(link)} className='hover:cursor-pointer w-full text-left'>
                    <span className="ml-3">{link.title}</span>
                </button>
            </li>)
        }
    })

    const videosList = module.links.map((link, id) => {
        if (link.type.toLowerCase()  === "video") {
            return (<li key={id} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-400 hover:text-white">
                <button onClick={() => handleClick(link)} className='hover:cursor-pointer w-full text-left'>
                    <span className="ml-3">{link.title}</span>
                </button>
            </li>)
        }
    })

  return (
    <div className="mx-auto mt-12 max-w-[1300px] px-6">
        {/* TODO : To be Checked */}
        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
        </button>
        {viewerOpen ?
            <ViewerPopUp open={viewerOpen} setOpen={setViewerOpen} selectedDoc={selectedDoc}/>
            :
            <></>
        }

        <div className='flex space-x-6'>
            <aside id="default-sidebar" className="relative z-40 w-[30%] transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="mt-12 ml-8 text-2xl font-bold leading-8 text-white">
                    Tous les Modules
                </p>
                <ul className="space-y-8 font-medium mt-8">
                    {modulesList}
                </ul>
            </div>
            </aside>
            
            <div className="p-4 w-[65%]">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <h2 className="mt-12 ml-8 text-4xl font-bold leading-8 text-black">
                    Tous les Cours
                </h2>

                <h2 className="mt-12 ml-8 text-2xl font-bold leading-8 text-black">
                    Documents
                </h2>
                <ul className="space-y-8 font-medium mt-8">
                    {pdfsList}
                </ul>

                <h2 className="mt-12 ml-8 text-2xl font-bold leading-8 text-black">
                    Videos
                </h2>
                <ul className="space-y-8 font-medium mt-8">
                    {videosList}
                </ul>
            </div>
            </div>
        </div>
    </div>
  )
}
