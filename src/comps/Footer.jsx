export default function Footer() {
  return (
    <footer>
      <a href="mailto:websebarz@gmail.com" className="footer__link">
        websebarz@gmail.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a className="social-list__link" href="https://codepen.io">
            a
          </a>
        </li>
        <li className="social-list__item">
          b<a className="social-list__link" href="http://dribbble.com"></a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://twitter.com">
            c
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://github.com">
            d
          </a>
        </li>
      </ul>
    </footer>
  );
}
