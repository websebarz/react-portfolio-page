export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src="public/imgs/devjane.png" alt="" />
      </div>
      <button className="nav-toggle" aria-label="toggle navigation">
        <span className="hamburger"></span>
      </button>
      <nav className="hidden">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Services
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              About me
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              My Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
