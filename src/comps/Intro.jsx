export default function Intro() {
  return (
    <section
      className="relative text-left sm:grid grid-cols-2 grid-rows-2 gap-x-4 max-w-2xl mt-0 mb-0 mr-auto ml-auto p-4"
      id="home"
    >
      <h1 className="text-5xl text-teal-400 font-light">
        Hi, I am <strong className="block font-bold">Seb Arz</strong>
      </h1>
      <p className="sm:absolute -left-2 w-full font-mono p-1 text-xl mt-[.25em] bg-orange-600 self-start text-right col-span-full row-start-2">
        front end developer
      </p>
      <img
        className="sm:relative w-min row-span-full"
        src="public/imgs/current-profile.jpg"
        alt="a picture of Seb Arz"
      />
    </section>
  );
}
