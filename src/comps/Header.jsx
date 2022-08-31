export default function Header({ clicked, toggle }) {
  return (
    <header className="flex p-4 justify-between">
      <div>
        <img
          className="max-w-[100px] lg:max-w-[200px]"
          src="./imgs/webseb-logo.png"
        />
      </div>
      {clicked ? (
        <button
          onClick={toggle}
          className="fixed right-2 z-[100] lg:scale-150"
          aria-label="toggle navigation"
        >
          <span className="text-orange-600">
            <i className="fas fa-bars"></i>
          </span>
        </button>
      ) : (
        <button
          onClick={toggle}
          className="absolute right-2 z-[100] lg:scale-150"
          aria-label="toggle navigation"
        >
          <span className="text-orange-600">
            <i className="fas fa-bars"></i>
          </span>
        </button>
      )}
      {clicked && (
        <nav className="fixed h-full bg-slate-900 text-orange-600 text-4xl flex flex-col justify-evenly top-0 left-0 bottom-0 right-0 z-50 translate-x-0">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="hover:text-teal-400" onClick={toggle}>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#services"
                className="hover:text-teal-400"
                onClick={toggle}
              >
                Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="hover:text-teal-400" onClick={toggle}>
                About me
              </a>
            </li>
            {/* <li className="nav__item">
              <a href="#" className="hover:text-teal-400">
                My Work
              </a>
            </li> */}
          </ul>
        </nav>
      )}
    </header>
  );
}
