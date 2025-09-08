import { useEffect, useState, useRef } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import './Home/HomePage.css'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdown, setDropdown] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY > 200 && window.scrollY < 450) {
        setNavVisible(false); // hide navbar
      } else {
        setNavVisible(true); // show navbar
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleDropdown() {
    setDropdown(!dropdown)
  }

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <nav
      ref={navRef}
      className={`${navVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
      fixed w-full z-50 duration-500 ease-in-out transition-all 
      bg-white text-font border-gray-200 dark:bg-gray-900 dark:border-gray-700`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-primary text-color text-2xl font-semibold whitespace-nowrap dark:text-white">JobEntry</span>
        </Link>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none cursor-pointer focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* Menu items */}
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/" className="block py-2 px-3 md:text-black md:hover:text-green-700 bg-green-700 rounded-sm md:bg-transparent md:p-0 text-white">Home</Link>
            </li>
            <li>
              <Link to="/aboutpage" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent hover:text-green-700 md:p-0">About</Link>
            </li>
            <li className='relative group'>
              <button onClick={handleDropdown} className="flex cursor-pointer items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:w-auto">
                Jobs 
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {dropdown && (
                <div className="absolute left-0 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                    <li><Link to="/dashboardpage" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Categories</Link></li>
                    <li><Link to="/settingspage" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Avaliable Jobs</Link></li>
                    <li><Link to="/earningspage" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link></li>
                  </ul>
                  <div className="py-1">
                    <Link to="/signoutpage" className="block buttonbg px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link to="/servicepage" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent hover:text-green-700 md:p-0">Service</Link>
            </li>
            <li>
              <Link to="/contactpage" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent hover:text-green-700 md:p-0">Contact</Link>
            </li>
          </ul>

          {/* Mobile buttons */}
          <div className='flex md:hidden'>
            <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 hover:buttonbg focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer buttonbg border-2 hover:text-black">Login</button>
            <button type="button" className="text-green-700 bg-white border cursor-pointer border-green-700 focus:outline-none hover:bg-green-700 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hover:text-white">Sign in</button>
          </div>
        </div>

        {/* Desktop buttons */}
        <div className='md:flex hidden'>
          <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer">Login</button>
          <button type="button" className="text-green-700 bg-white border cursor-pointer border-green-700 focus:outline-none hover:bg-green-700 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hover:text-white">Sign in</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
