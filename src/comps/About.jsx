export default function About() {
  return (
    <section
      className="h-[50vh] flex flex-col justify-center items-center justify-evenly p-2 sm:flex min-h-[50vh] max-w-screen-xl lg:max-w-4xl mr-auto ml-auto"
      id="about"
    >
      <h2 className="mb-1 text-teal-400 text-4xl sm:text-6xl font-bold">
        Who I am
      </h2>
      <p className="sm:w-fit font-mono p-2 text-xl mt-[.25em] bg-orange-600 self-center">
        Designer & developer based out of Mexico City
      </p>

      <div className="mt-2 sm:flex">
        <p className="mb-2 text-white sm:text-xl">
          Front End developer from Mexico City (Relocation/ Remote possible).
          I'm interested in teams valuing quality, clean code principles &
          testing.
        </p>
        <p className="text-white sm:text-xl">
          Front End: JavaScript(ES6+), TypeScript, React JS, Tailwindcss, HTML5,
          CSS3, JSON, AJAX, Bootstrap.
          <br /> Principles & methodologies: Agile, Scrum, OOP, Test Driven
          Development, Mobile First Design & Responsive Design.
          <br /> Testing & other: git, npm, pnpm.
        </p>
      </div>
    </section>
  );
}
