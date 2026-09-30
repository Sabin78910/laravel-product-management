import React from 'react'

export function JoinUs() {
  return (
    <div className="relative w-full mb-[300px] bg-amber-50">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          {/* Decorative pottery wheel icon */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
              fill="#8B4513"
            />
          </svg>
          <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-amber-100 p-1">
            <div className="rounded-full bg-white p-1 px-2">
              <p className="text-sm font-medium">Join Our Community</p>
            </div>
            <p className="text-sm font-medium">Sell Your Handicrafts &rarr;</p>
          </div>
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-[#8B4513] md:text-4xl lg:text-6xl">
            Showcase Your Artisan Crafts
          </h1>
          <p className="mt-8 text-lg text-gray-700">
            Join our community of skilled artisans. Subscribe with your email to open your seller account 
            and start sharing your handcrafted treasures with the world. Verification process takes less than 24 hours.
          </p>
          <form action="" className="mt-8 flex items-start space-x-2">
            <div>
              <input
                className="flex w-full rounded-md border border-amber-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Enter your email"
                id="email"
              ></input>
              <p className="mt-2 text-sm text-gray-500">Your artistry deserves recognition</p>
            </div>
            <div>
              <button
                type="button"
                className="rounded-md bg-amber-700 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
              >
                Join Now
              </button>
            </div>
          </form>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <img
            className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
            src="https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?q=80&w=1200"
            alt="Artisan crafting pottery"
          />
        </div>
      </div>
    </div>
  )
}

export default JoinUs;