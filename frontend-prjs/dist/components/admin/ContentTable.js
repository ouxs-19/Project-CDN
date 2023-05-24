import React from 'react'
import axios from 'axios'

// Data
import { BASEURL } from '@/shared/baseUrl'

export default function ContentTable({ filesObjects, handleDelete }) {

    const filesList = filesObjects.map((fileObject, id) => (
        <tr key={id}>
            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                {id}
            </td>
            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {fileObject.title}
            </td>
            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {fileObject.field.title}
            </td>
            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {fileObject.track.title}
            </td>
            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {fileObject.module.title}
            </td>
            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {fileObject.type}
            </td>
            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(fileObject)}
                >
                    Delete
                </button>
            </td>
        </tr>
    ))


  return (
    <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Title
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Field
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Track
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Module
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Type
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {filesList}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
  )
}
