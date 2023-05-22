export default function Hero({ item }) {
    return (
      <div className="bg-white py-12">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="max-w-4xl">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Discover Our Admin Panel</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome To OpenCDN Admin Panel
            </p>
            <p className="mt-6 text-2xl leading-8 text-gray-600">
              As an adminitrator to the CDN content, you can add, modify or delete files and videos to guarantie a better exeprience to our students.
            </p>
          </div>
        </div>
      </div>
    )
  }