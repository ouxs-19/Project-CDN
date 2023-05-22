import Link from 'next/link'

export default function Card({ item, fieldId }) {
    return (
        <div className="group relative bg-white sm:py-8 sm:px-6 p-4 rounded-lg flex flex-col xs:space-y-6 space-y-4 border-2 border-black">
            <h3 className="sm:text-xl text-base text-black font-bold capitalize">
                {item.title}
            </h3>
            <p className="mt-1 sm:text-lg text-sm leading-4 text-gray-600">{item.description}</p>
            <div className="flex justify-end items-end h-full">
                <Link href={`/fields/${fieldId}/tracks/${item.id}`} className="inline-flex w-1/2 h-fit items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
            </div>
        </div>
    )
  }