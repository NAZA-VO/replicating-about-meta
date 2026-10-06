import video3 from '../assets/video3.mp4'
import video2 from '../assets/video2.mp4'

const About = () => (
  <main>
    <section className="relative h-screen overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={video3}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <h1 className="mx-10 mb-3 max-w-2xl text-center text-4xl font-medium text-white">
          We're building the future of human connection
        </h1>
        <button className="rounded-full bg-blue-600 px-5 py-3 text-white">
          Our Mission
        </button>
      </div>
    </section>

    <section className="relative h-screen overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={video2}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <h1 className="mx-10 mb-3 max-w-2xl text-center text-4xl font-medium text-white">
          And the technologies that make it possible
        </h1>
        <button className="rounded-full bg-blue-600 px-5 py-3 text-white">
          Our Technologies
        </button>
      </div>
    </section>
  </main>
)

export default About





