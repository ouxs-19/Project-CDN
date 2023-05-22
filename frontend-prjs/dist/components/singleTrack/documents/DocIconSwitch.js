import React from 'react'
import { BsFileEarmarkPdf, BsFileEarmarkWord, BsFileEarmarkExcel, BsFileEarmarkImage, BsFileEarmark, BsFileEarmarkZip } from "react-icons/bs"
import { FaRegFilePowerpoint } from 'react-icons/fa'


export default function DocIconSwitch({ type }) {
    switch (type) {
        case "pdf":
            return (
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <BsFileEarmarkPdf className="h-8 w-8 p-1 text-red-600" aria-hidden="true" />
                </div>)
        case "doc":
            return (
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                    <BsFileEarmarkWord className="h-8 w-8 p-1 text-blue-600" aria-hidden="true" />
                </div>)
        case "docx":
            return (
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                    <BsFileEarmarkWord className="h-8 w-8 p-1 text-blue-600" aria-hidden="true" />
                </div>)
        case "xls":
            return (
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <BsFileEarmarkExcel className="h-8 w-8 p-1 text-green-600" aria-hidden="true" />
                </div>)
        case "xlsx":
            return (
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <BsFileEarmarkExcel className="h-8 w-8 p-1 text-green-600" aria-hidden="true" />
                </div>)
        case "png":
            return (
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-violet-100 sm:mx-0 sm:h-10 sm:w-10">
                    <BsFileEarmarkImage className="h-8 w-8 p-1 text-violet-600" aria-hidden="true" />
                </div>)
        case "jpeg":
            return (
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-violet-100 sm:mx-0 sm:h-10 sm:w-10">
                    <BsFileEarmarkImage className="h-8 w-8 p-1 text-violet-600" aria-hidden="true" />
                </div>)
        case "jpg":
            return (
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-violet-100 sm:mx-0 sm:h-10 sm:w-10">
                    <BsFileEarmarkImage className="h-8 w-8 p-1 text-violet-600" aria-hidden="true" />
                </div>)
        case "svg":
            return (
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-violet-100 sm:mx-0 sm:h-10 sm:w-10">
                    <BsFileEarmarkImage className="h-8 w-8 p-1 text-violet-600" aria-hidden="true" />
                </div>)
        case "gif":
            return (
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-violet-100 sm:mx-0 sm:h-10 sm:w-10">
                    <BsFileEarmarkImage className="h-8 w-8 p-1 text-violet-600" aria-hidden="true" />
                </div>)
        case "ppt":
            return (
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 sm:mx-0 sm:h-10 sm:w-10">
                    <FaRegFilePowerpoint className="h-8 w-8 p-1 text-orange-600" aria-hidden="true" />
                </div>)
        case "pptx":
            return (
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 sm:mx-0 sm:h-10 sm:w-10">
                    <FaRegFilePowerpoint className="h-8 w-8 p-1 text-orange-600" aria-hidden="true" />
                </div>)
        case "zip":
            return (
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-rose-100 sm:mx-0 sm:h-10 sm:w-10">
                    <BsFileEarmarkZip className="h-8 w-8 p-1 text-rose-600" aria-hidden="true" />
                </div>)
        default:
            return (
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10">
                    <BsFileEarmark className="h-8 w-8 p-1 text-gray-600" aria-hidden="true" />
                </div>)
    }
}
