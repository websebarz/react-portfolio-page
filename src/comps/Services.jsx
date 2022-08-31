export default function Services() {
  return (
    <section
      className="flex flex-col h-[100vh] bg-neutral-600 bg-[url('../imgs/services-bg.jpg')] bg-cover bg-blend-multiply text-center p-4 leading-relaxed sm:flex-col min-h-[50vh] items-center justify-center gap-4 lg:flex-row"
      id="services"
    >
      <h2 className="text-teal-400 text-4xl sm:text-6xl font-bold">
        What I do
      </h2>
      <div className="max-w-[500px] sm: max-w-md lg:flex max-w-4xl">
        <div className="mt-4">
          <h3 className="text-xl text-white sm:text-2xl">
            Design + Development
          </h3>
          <p className="text-white sm:text-xl">
            Object oriented front end developer with a Reposive & Mobile First
            approach for design. I have a passion for detail and a good taste
            for colors and typography.
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl text-white sm:text-2xl">React JS</h3>
          <p className="text-white sm:text-xl">
            React developer with one year of experience building React apps with
            Vite+Tasilwindcss. React Router, React Query & Redux.
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl text-white sm:text-2xl">WordPress</h3>
          <p className="text-white sm:text-xl">
            WordPress + Elementor previous experience building custom designs
            por personal and freelance projects.
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
