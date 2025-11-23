import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="relative ">
        <div className="flex justify-between items-center text-center px-5 py-3 ">
          <img
            className="w-32"
            src="https://i.ibb.co/ds2t94B5/618b65a590211c5501c4dcd53b5aeadf26f9afb6.png"
            alt="Logo"
          />

          <div className="px-5 hidden md:inline">
            <ul className="flex justify-center items-center">
              <li>
                <a
                  href="#looks"
                  className="block px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors text-lg"
                >
                  Looks
                </a>
              </li>
              <li>
                <a
                  href="#lancamentos"
                  className="block px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors text-lg"
                >
                  Lançamentos
                </a>
              </li>
              <li>
                <a
                  href="#novidades"
                  className="block px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors text-lg"
                >
                  Novidades
                </a>
              </li>
            </ul>
          </div>

          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-gray-100 rounded transition-colors z-50 relative md:hidden"
            aria-label="Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        <div
          className={`fixed inset-0 bg-black transition-opacity duration-300 z-30 ${
            isMenuOpen ? "opacity-50 visible" : "opacity-0 invisible"
          }`}
          onClick={toggleMenu}
        />

        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transition-transform duration-300 ease-in-out z-40 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="pt-20 px-5">
            <ul className="flex flex-col space-y-2">
              <li>
                <a
                  href="#looks"
                  className="block px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors text-lg"
                >
                  Looks
                </a>
              </li>
              <li>
                <a
                  href="#lancamentos"
                  className="block px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors text-lg"
                >
                  Lançamentos
                </a>
              </li>
              <li>
                <a
                  href="#novidades"
                  className="block px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors text-lg"
                >
                  Novidades
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
