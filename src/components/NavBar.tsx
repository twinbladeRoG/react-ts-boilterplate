const NavBar = () => (
  <nav className="bg-blue-600 px-5 py-3 shadow-2xl text-white flex">
    <a href="/" className="font-semibold">
      NAVBAR
    </a>

    <ul className="ml-auto space-x-3 hidden md:flex">
      <li>
        <a href="/" className="hover:text-gray-300">
          Home
        </a>
      </li>
      <li>
        <a href="/" className="hover:text-gray-300">
          About
        </a>
      </li>
      <li>
        <a href="/" className="hover:text-gray-300">
          Dashboard
        </a>
      </li>
      <li>
        <a href="/" className="hover:text-gray-300">
          Contact
        </a>
      </li>
    </ul>
  </nav>
);

export default NavBar;
