
import './HomePage.css'
import img1 from '../../img/testimonial-1.jpg'
import img2 from '../../img/testimonial-2.jpg'
import img3 from '../../img/testimonial-3.jpg'
import img4 from '../../img/testimonial-4.jpg'
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Student",
    message: "This platform has really improved my learning experience!",
    img: img1
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Developer",
    message: "Great community and excellent resources. Highly recommended!",
    img: img2
  },
  {
    id: 3,
    name: "Michael Johnson",
    role: "Designer",
    message: "I love how simple and user-friendly this website is.",
    img: img3
  },
  {
    id: 4,
    name: "Sarah Williams",
    role: "Entrepreneur",
    message: "It helped me scale my business faster than I expected.",
    img: img4
  },
];

const Testimonial = () => {
  return (
    <div className="w-[90%]  my-[50px] mx-auto bg-gray-100 py-10 overflow-hidden">
      <h2 className="text-2xl font-bold text-center my-10">Testimonial</h2>

      {/* Scrolling container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll space-x-6 px-6">
          {testimonials.concat(testimonials).map((item) => (
            <div
              key={item.id + Math.random()}
              className="min-w-[300px] max-w-sm bg-white p-6 rounded-2xl shadow-md flex-shrink-0"
            >
              <div className=" flex gap-4">
                <img className="w-[15%] rounded-full" src={item.img} alt="" />
                <p className="text-gray-700 italic">"{item.message}"</p>
              </div>

              <div className="mt-4">
                <h4 className="font-bold text-green-700">{item.name}</h4>
                <span className="text-sm text-gray-500">{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
