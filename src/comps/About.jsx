export default function About() {
  return (
    <section
      className="flex flex-col justify-center items-center justify-evenly p-2 sm:flex min-h-[50vh] max-w-screen-xl xl:max-w-full mr-autom ml-auto"
      id="about"
    >
      <h2 class="mb-1 text-teal-400 text-4xl sm:text-6xl font-bold">
        Who I am
      </h2>
      <p class="sm:w-fit font-mono p-2 text-xl mt-[.25em] bg-orange-600 self-center">
        Designer & developer based out of Mexico City
      </p>

      <div class="mt-2 sm:flex">
        <p className="mb-2 text-white sm:text-xl">
          Front End developer from Mexico City (Relocation/ Remote possible).
          I'm interested in teams valuing quality, clean code principles &
          testing.
        </p>
        <p className="text-white sm:text-xl">
          Front End: JavaScript(ES6+), TypeScript, React JS, Tailwindcss, HTML5,
          CSS3, JSON, AJAX, Bootstrap. Principles & methodologies: Agile, Scrum,
          OOP, Test Driven Development, Mobile First Design & Responsive Design.
          Testing & other: Git, Docker, NPM.
        </p>
      </div>
    </section>
  );
}
