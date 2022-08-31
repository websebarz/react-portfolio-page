export default function Header() {
  return (
    <header className="flex p-4 justify-between">
      <div>
        <img
          className="max-w-[100px] lg:max-w-[200px]"
          src="./imgs/webseb-logo.png"
        />
      </div>
      <button className="nav-toggle" aria-label="toggle navigation">
        <span className="hamburger">OK</span>
      </button>
      <nav className="fixed h-full bg-slate-900 text-orange-600 text-2xl flex flex-col justify-evenly top-0 left-0 bottom-0 right-0 z-50 translate-x-full">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#" className="hover:text-teal-400">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="hover:text-teal-400">
              Services
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="hover:text-teal-400">
              About me
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="hover:text-teal-400">
              My Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
