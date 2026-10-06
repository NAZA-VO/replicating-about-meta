import meta from '../assets/Meta AI Glasses.mp4';
import glass1 from '../assets/glass1.jpeg';
import glass2 from '../assets/glass2.jpeg';
import glass3 from '../assets/glass3.jpeg';
import glass4 from '../assets/glass4.jpeg';

const glasses = [
  { name: 'Meta Glasses', image: glass1, alt: 'Meta Glasses' },
  { name: 'Ray-Ban Meta', image: glass2, alt: 'Ray-Ban Meta glasses' },
  { name: 'Oakley Meta', image: glass3, alt: 'Oakley Meta glasses' },
  { name: 'Meta Ray-Ban Display', image: glass4, alt: 'Meta Ray-Ban Display glasses' },
]

const AIglasses = () => {
  return (
    <main>
    <div className="relative h-svh min-h-120 w-full overflow-hidden">
      <video className="absolute inset-0 h-full w-full object-cover" src={meta}
      autoPlay
      loop 
       playsInline
       />
       <div className="absolute inset-0 flex items-end justify-center px-4 pb-16 sm:px-8 sm:pb-20 md:pb-24">
      <h1 className="max-w-6xl text-center text-3xl font-medium leading-tight text-white sm:text-4xl md:text-6xl lg:text-7xl">
        AI glasses for effortless connection</h1>
      </div>
    </div>
      <section className="mx-auto max-w-360 px-5 py-10 sm:px-8 md:px-12">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-medium text-gray-900 sm:text-3xl">
            AI glasses
          </h2>

          <div className="flex items-center gap-5">
            <p className="text-right text-sm text-gray-700">
              Starting at
              <br />
              <strong className="text-base text-gray-950">$224</strong>
              <span className="ml-2 text-gray-500 line-through">$299</span>
            </p>
            <button
              type="button"
              className="rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Shop all
            </button>
          </div>
        </div>

    <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 sm:gap-6">
          {glasses.map((glass) => (
            <article key={glass.name} className="text-center">
              <div className="flex h-28 items-center justify-center sm:h-36">
                <img
                  src={glass.image}
                  alt={glass.alt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900 sm:text-base">
                {glass.name}
              </h3>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            type="button"
            className="rounded-full border-2 border-gray-200 px-6 py-3 text-sm font-semibold text-blue-700 hover:border-gray-400"
          >
            Compare styles
          </button>
        </div>

          <div className="mx-auto mb-12 mt-24 max-w-3xl text-center sm:mt-32">
          <h2 className="text-3xl font-medium leading-tight text-gray-950 sm:text-4xl md:text-5xl">
            Capture high-quality photos and videos
          </h2>
          <p className="mt-4 text-base text-gray-500 sm:text-lg">
            Use voice controls to record and share hands-free, and stay in the moment.
          </p>
        </div>
   </section>
  </main>
  )
}

export default AIglasses