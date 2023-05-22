import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { BASEURL } from '@/shared/baseUrl'

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function AddContentForm() {

  // FormsFields
  const [formField, setFormField] = useState({})

  // FieldsInfos
  const [fieldsInfos, setFieldsInfos] = useState([])

  // Lists
  const [fields, setFields] = useState([])
  const [tracks, setTracks] = useState([])
  const [modules, setModules] = useState([])

  useEffect(() => {

    axios.get(`${BASEURL}/files`)
    .then(response => {
      const fieldsInfosTmp = response.data;
      setFieldsInfos(fieldsInfosTmp)

      let fieldsTmp = []


      fieldsInfosTmp.forEach((field) => {
        fieldsTmp.push({
          id: field.id,
          title: field.title
        })
      })

      setFields(fieldsTmp)
    })
  }, [])

  const handleFieldChange = (e) => {

    let tracksTmp = []

    fieldsInfos.forEach((field) => {
      if(field.id === e.target.value) {
        field.tracks.forEach((track) => {
          tracksTmp.push({
            id: track.id,
            title: track.title
          })
        })
      }
    })

    setTracks(tracksTmp)
  }

  const handleTrackChange = (e) => {

    let modulesTmp = []

    fieldsInfos.forEach((field) => {
      field.tracks.forEach((track) => {
        if(track.id === e.target.value) {
          track.modules.forEach((module) => {
            if(module.links) {
              modulesTmp.push({
                id: module.id,
                title: module.title
              })
            }
          })
        }
      })
    })

    setModules(modulesTmp)
  }

  const handleChange = (field, value) => {
    let obj = formField
    obj[field] = value
    setFormField(obj)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const ContentFormData = new FormData()
    ContentFormData.append("folder", JSON.stringify(`/${formField.field}/${formField.track}/${formField.module}`));
    ContentFormData.append("file", formField.file);

    axios({
      method: 'post',
      url: `${BASEURL}/files/add`,
      data: ContentFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((response) => {
      alert('Content added successfully')
      console.log(response.data);
    })
    .catch((err) => {
      alert("Something Went Wrong ! Please Try Again")
      console.log(err.message);
    })

  }

  const fieldsOptions = fields.map((field) => (
    <option key={field.id} value={field.id}>{field.title}</option>
  ))

  const tracksOptions = tracks.map((track) => (
    <option key={track.id} value={track.id}>{track.title}</option>
  ))

  const modulesOptions = modules.map((module) => (
    <option key={module.id} value={module.id}>{module.title}</option>
  ))

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-7">
          <h2 className="text-xl font-semibold leading-7 text-gray-900">Add Content Form</h2>
          <p className="mt-1 text-base leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
            {/* Title */}
            <div className="sm:col-span-4">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                Title
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    autoComplete="title"
                    onChange={(e) => handleChange('title', e.target.value)}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="The Art of Hacking : The Book"
                  />
                </div>
              </div>
            </div>

            {/* File Upload */}
            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                File Upload
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input 
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        onChange={(e) => handleChange('file', e.target.files[0])}
                        className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">Video, Pdf up to 100MB</p>
                </div>
              </div>
            </div>

            {/* Field */}
            <div className="col-span-2">
              <label htmlFor="field" className="block text-sm font-medium leading-6 text-gray-900">
                Field
              </label>
              <div className="mt-2">
                <select
                  id="field"
                  name="field"
                  autoComplete="field-name"
                  onChange={(e) => {
                    handleFieldChange(e)
                    handleChange('field', e.target.value)
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="" disabled selected>Select a Field</option>
                  {fieldsOptions}
                </select>
              </div>
            </div>

            {/* Track */}
            <div className="col-span-2">
              {tracksOptions.length > 0 && (
                <>
                  <label htmlFor="track" className="block text-sm font-medium leading-6 text-gray-900">
                    Track
                  </label>
                  <div className="mt-2">
                    <select
                      id="track"
                      name="track"
                      autoComplete="track-name"
                      onChange={(e) => {
                        handleTrackChange(e);
                        handleChange('track', e.target.value);
                      }}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value="" disabled selected>Select a Track</option>
                      {tracksOptions}
                    </select>
                  </div>
                </>
              )}
            </div>

            {/* Module */}
            <div className="col-span-2">
              {modulesOptions.length > 0 && (
                <>
                  <label htmlFor="module" className="block text-sm font-medium leading-6 text-gray-900">
                    Module
                  </label>
                  <div className="mt-2">
                    <select
                      id="module"
                      name="module"
                      autoComplete="module-name"
                      onChange={(e) => handleChange('module', e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value="" disabled selected>Select a Module</option>
                      {modulesOptions}
                    </select>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}
