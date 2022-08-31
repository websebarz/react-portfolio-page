export default function Services() {
  return (
    <section
      className="h-[100vh] bg-neutral-600 bg-[url('../imgs/services-bg.jpg')] bg-cover bg-blend-multiply text-center p-4 leading-relaxed sm:min-h-[50vh] flex flex-col items-center justify-center gap-4"
      id="services"
    >
      <h2 className="mb-1 text-teal-400 text-4xl sm:text-6xl font-bold">
        What I do
      </h2>
      <div className="max-w-[500px] sm:flex max-w-[100%]">
        <div className="service">
          <h3 className="text-xl text-white sm:text-2xl">
            Design + Development
          </h3>
          <p className="text-white sm:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="service">
          <h3 className="text-xl text-white sm:text-2xl">React JS</h3>
          <p className="text-white sm:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="service">
          <h3 className="text-xl text-white sm:text-2xl">WordPress</h3>
          <p className="text-white sm:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <a
        href="#work"
        className="inline-block bg-teal-400 p-2 rounded-full font-bold uppercase hover:scale-125 duration-200"
      >
        My Work
      </a>
    </section>
  );
}
