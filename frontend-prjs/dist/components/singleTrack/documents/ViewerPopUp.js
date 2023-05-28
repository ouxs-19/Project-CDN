import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import DocIconSwitch from './DocIconSwitch';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Styling

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// Data
import { PDFWORKERURL } from '@/shared/pdfWorkerUrl';

export default function ViewerPopUp({ open, setOpen, selectedDoc }) {

  // Note : selectedDoc[0] is the selected Doc, it is an array because documents property of DocViewer takes an array as value

  const cancelButtonRef = useRef(null)
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full w-4/5 mx-auto items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4/5">
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-center sm:space-x-4">
                    <DocIconSwitch type={selectedDoc[0].type}/>
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        {selectedDoc[0].title}
                    </Dialog.Title>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    {selectedDoc[0].fileType == "video" ?
                      <video className='w-3/4 mx-auto my-8' controls>
                        <source src={selectedDoc[0].uri} type="video/mp4"></source>
                      </video>
                      : selectedDoc[0].fileType == "pdf" ?
                      <Worker workerUrl={PDFWORKERURL + '/pdf.worker.js'}>
                          <div style={{ height: '750px' }}>
                              <Viewer
                                  fileUrl={selectedDoc[0].uri}
                                  plugins={[
                                      defaultLayoutPluginInstance,
                                  ]}
                              />
                          </div>
                      </Worker>
                      :
                      <DocViewer
                            pluginRenderers={DocViewerRenderers}
                            documents={selectedDoc}
                            className="h-full"
                            config={{
                                header: {
                                disableFileName: true,
                                retainURLParams: false
                                }
                            }}
                            />
                    }
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
