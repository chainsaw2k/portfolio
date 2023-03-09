import Image from "next/image";

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <p className="font-normal text-2xl mb-3">Hi, I am</p>
        <h1 className="text-5xl">W. Thomas McCollough</h1>
        <h2 className="mt-5 md:mt-2 text-xl font-normal">Product and Technology Leadership for Developer Solutions</h2>
        <div className="mt-4 mb-10 text-base font-normal">
          <p className="mt-3">I am a technology leader with considerable experience building and running product
          management and engineering teams. With a computer science background, I focus on serving developers with
          cloud-native managed services.</p>
          <p className="mt-3">Able to serve in product roles at the principal or director level,
          or as director-level leadership overseeing both product+engineering.</p>
          <p className="mt-3">I'm able to contribute in either the pre-product market fit phase or
          the growth phase. Small, dynamic companies preferred.</p>
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