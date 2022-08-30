export default function Intro() {
  return (
    <section
      className="h-[100vh] relative text-left p-4 sm:grid grid-cols-2 grid-rows-2 gap-x-4 max-w-2xl mt-16 mb-0 mr-auto ml-auto"
      id="home"
    >
      <h1 className="text-5xl text-teal-400 font-light sm:col-start-2 row-start-1 self-center">
        Hi, I am <strong className="block font-bold">Seb Arz</strong>
      </h1>
      <p className="mt-4 mb-4 sm:absolute -left-6 w-full font-mono p-2 text-xl mt-[.25em] bg-orange-600 self-start text-right col-span-full row-start-1">
        front end developer
      </p>
      <img
        className="sm:relative w-min row-start-1"
        src="./imgs/current-profile.jpg"
        alt="a picture of Seb Arz"
      />
      <div className="flex p-2 justify-center align-center justify-evenly text-3xl text-orange-600 mt-4 sm:row-start-1 col-start-2 self-end">
        <span>
          <i className="fab fa-html5"></i>
        </span>
        <span>
          <i className="fab fa-css3-alt"></i>
        </span>
        <span>
          <i className="fab fa-js"></i>
        </span>
        <span>
          <i className="fab fa-react"></i>
        </span>
        <span>
          <i className="fab fa-git-alt"></i>
        </span>
        <span>
          <i className="fab fa-npm"></i>
        </span>
      </div>
    </section>
  );
}
