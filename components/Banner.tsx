import Image from "next/image";

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <p className="font-normal text-2xl mb-3">Hi, I am</p>
        <h1 className="text-5xl">W. Thomas McCollough</h1>
        <h2 className="mt-5 md:mt-2 text-xl font-normal">Product and Technology Leadership for Developer Solutions</h2>
        <div className="mt-4 mb-10 text-base font-normal">
          <p className="mt-3">A software leader with considerable experience in building and running product management
            and engineering teams. Achieves high-performance delivery of innovative solutions that drive
            recurring revenue by giving application developers the outcomes they need.</p>
          <p className="mt-3">Have had a broad impact on the organizations I have led. Most notably, have overseen many new product
            introductions, scaled teams globally, transformed large organizations, been recognized for a
            strong customer focus, and have been consistent at delivering results on a rapid & unrelenting cadence.    </p>
          <p className="mt-3">Starting off in engineering, have gone on to lead software architecture, engineering practice,
            user experience design, and product management vision & strategy. This broad experience gives a
            comprehensive perspective from which to both understand my developer customer and lead the
            product & engineering teams building developer solutions.          </p>
        </div>
      </div>
      <div className="hidden items-center md:flex">
        <Image
          className="rounded-xl"
          src="/pm3.jpg"
          alt="People brainstorming in a conference room"
          height={1200}
          width={1200}
        />
      </div>
    </div>
  )
}

export default Banner