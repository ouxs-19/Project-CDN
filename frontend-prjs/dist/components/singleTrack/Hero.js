export default function Hero({ item }) {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Discover Our Track</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {item.title}
          </p>
          <p className="mt-6 text-2xl leading-8 text-gray-600">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  )
}