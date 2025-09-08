import Footer from './Home/Footer'
import { Link } from 'react-router-dom'

import carousel from '../assets/carousel2.jpg'

const ContactPage = () => {
  return (
    <div>
      {/* Carousel */}
      <div
        data-hs-carousel='{
          "loadingClasses": "opacity-0",
          "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
          "isAutoPlay": true
        }'
        className="relative overflow-hidden"
      >
        <div className="hs-carousel relative flex w-screen overflow-hidden z-0 h-screen">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap w-full h-[80%] transition-transform duration-700">
            <div className="absolute top-0 bg-black/65 w-full h-full"></div>
            <div className="hs-carousel-slide overflow-hidden w-screen h-screen">
              <div className="flex overflow-hidden justify-center items-center w-full h-[80%] dark:bg-neutral-900">
                <img
                  src={carousel}
                  alt="carousel1"
                  className="w-full flex overflow-hidden h-full object-cover"
                />
                <div className="absolute text-white font-bold justify-end text-center flex gap-5">
                  <Link to="/" className="buttonbg rounded-sm py-1 px-4 border-2">
                    Home
                  </Link>
                  <Link to="/servicepage" className="buttonbg px-4 py-1 rounded-sm border-2">
                    Service
                  </Link>
                  <Link to="/contactpage" className="buttonbg px-4 py-1 rounded-sm border-2">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 gap-x-2"></div>
      </div>

      {/* Contact Heading */}
      <h1
        className="duration-700 transition-all ease-in-out text-center mb-10 text-2xl md:text-[40px] text-green-700 font-bold"
      >
        Contact Us
      </h1>

      {/* Contact Form */}
      <form className="max-w-sm mb-5 mx-auto">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            placeholder="name@gmail.com"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            required
          />
        </div>

        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a href="#" className="text-green-700 hover:underline dark:text-green-700">
              terms and conditions
            </a>
          </label>
        </div>

        <div className="mb-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>

        {/* WhatsApp Button */}
        <div className="mb-5">
          <a
            href="https://wa.me/2349038051512?text=Hello%20I%20want%20to%20make%20an%20inquiry"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-2 py-1 bg-green-300 text-green-700 font-semibold rounded-sm shadow hover:bg-green-600 hover:text-white transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="text-white bg-green-700 cursor-pointer hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-700"
        >
          Submit
        </button>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default ContactPage
