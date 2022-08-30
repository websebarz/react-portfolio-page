export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-orange-600 p-4">
      <a href="mailto:websebarz@gmail.com" className="text-2xl font-bold">
        websebarz@gmail.com
      </a>
      <ul className="flex justify-center mt-2 text-2xl">
        <li className="p-2 hover:scale-125 duration-200">
          <a
            className="social-list__link"
            href="https://linkedin.com/in/websebarz"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="ml-2 p-2 hover:scale-125 duration-200">
          <a
            className="social-list__link"
            href="https://twitter.com/websebarz"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="ml-2 p-2 hover:scale-125 duration-200">
          <a
            className="social-list__link"
            href="https://github.com/websebarz"
            target="_blank"
          >
            <i class="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
