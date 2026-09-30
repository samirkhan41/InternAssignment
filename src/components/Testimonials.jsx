import React, { useState } from "react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < 3) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const previousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <section className="bg-[#fff0f0] py-12 md:py-16">

      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600">
          Testimonials
        </h2>

        <div className="flex justify-center items-center gap-2 mt-3">
          <div className="w-12 h-[3px] bg-black"></div>
          <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
          <div className="w-12 h-[3px] bg-black"></div>
        </div>

        <p className="max-w-4xl mx-auto mt-5 text-gray-600 text-sm md:text-base leading-7">
          Your Voice, Our Pride! Dive into the heartfelt accounts of our valued
          patrons. From life-changing experiences to exceptional service, their
          stories illuminate the essence of our commitment. Join our family of
          satisfied customers and witness firsthand the transformative power of
          our offerings. Your satisfaction is our greatest achievement!
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-[1300px] mx-auto px-4 relative">

        {/* Left Button */}
        <button
          onClick={previousSlide}
          disabled={currentSlide === 0}
          className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20
          w-11 h-11 rounded-full items-center justify-center text-2xl
          ${
            currentSlide === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-red-600 text-white hover:bg-red-700"
          }`}
        >
          ‹
        </button>

        {/* Cards */}
        <div className="overflow-hidden md:mx-12 pt-10">

          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >

            {/* ================= SLIDE 1 ================= */}
            <div className="min-w-full flex flex-col md:flex-row gap-6">

              {/* Card 1 */}
              <div className="w-full md:w-1/3 mt-10">
                <div className="relative bg-white rounded-lg shadow-md px-7 pt-16 pb-8 min-h-[365px] flex flex-col items-center justify-center text-center">

                  <div className="absolute -top-[38px] w-[82px] h-[82px] rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                    <img
                      src="https://i.pravatar.cc/150?img=12"
                      alt="Rahul Sharma"
                      className="w-[55px] h-[55px] rounded-full object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800">
                    Rahul Sharma
                  </h3>

                  <p className="text-red-600 text-sm mt-1">
                    Business Owner
                  </p>

                  <p className="text-gray-600 mt-5 leading-7">
                    Excellent service and professional team. They understood
                    our requirements perfectly and delivered everything on
                    time.
                  </p>

                  <div className="text-yellow-500 text-xl mt-5">
                    ★★★★★
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-full md:w-1/3 mt-10">
                <div className="relative bg-white rounded-lg shadow-md px-7 pt-16 pb-8 min-h-[365px] flex flex-col items-center justify-center text-center">

                  <div className="absolute -top-[38px] w-[82px] h-[82px] rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                    <img
                      src="https://i.pravatar.cc/150?img=32"
                      alt="Priya Mehta"
                      className="w-[55px] h-[55px] rounded-full object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800">
                    Priya Mehta
                  </h3>

                  <p className="text-red-600 text-sm mt-1">
                    Marketing Manager
                  </p>

                  <p className="text-gray-600 mt-5 leading-7">
                    The team was very supportive throughout the project. The
                    final product was exactly what we were looking for.
                  </p>

                  <div className="text-yellow-500 text-xl mt-5">
                    ★★★★★
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="w-full md:w-1/3 mt-10">
                <div className="relative bg-white rounded-lg shadow-md px-7 pt-16 pb-8 min-h-[365px] flex flex-col items-center justify-center text-center">

                  <div className="absolute -top-[38px] w-[82px] h-[82px] rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                    <img
                      src="https://i.pravatar.cc/150?img=47"
                      alt="Amit Verma"
                      className="w-[55px] h-[55px] rounded-full object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800">
                    Amit Verma
                  </h3>

                  <p className="text-red-600 text-sm mt-1">
                    Founder
                  </p>

                  <p className="text-gray-600 mt-5 leading-7">
                    Amazing experience from start to finish. Their technical
                    knowledge and dedication are truly impressive.
                  </p>

                  <div className="text-yellow-500 text-xl mt-5">
                    ★★★★★
                  </div>
                </div>
              </div>

            </div>

            {/* ================= SLIDE 2 ================= */}
            <div className="min-w-full flex flex-col md:flex-row gap-6">

              {/* Card 4 */}
              <div className="w-full md:w-1/3 mt-10">
                <div className="relative bg-white rounded-lg shadow-md px-7 pt-16 pb-8 min-h-[365px] flex flex-col items-center justify-center text-center">

                  <div className="absolute -top-[38px] w-[82px] h-[82px] rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                    <img
                      src="https://i.pravatar.cc/150?img=5"
                      alt="Neha Kapoor"
                      className="w-[55px] h-[55px] rounded-full object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800">
                    Neha Kapoor
                  </h3>

                  <p className="text-red-600 text-sm mt-1">
                    Entrepreneur
                  </p>

                  <p className="text-gray-600 mt-5 leading-7">
                    Their team made the complete development process smooth
                    and simple for us. Highly professional work.
                  </p>

                  <div className="text-yellow-500 text-xl mt-5">
                    ★★★★★
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="w-full md:w-1/3 mt-10">
                <div className="relative bg-white rounded-lg shadow-md px-7 pt-16 pb-8 min-h-[365px] flex flex-col items-center justify-center text-center">

                  <div className="absolute -top-[38px] w-[82px] h-[82px] rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                    <img
                      src="https://i.pravatar.cc/150?img=15"
                      alt="Arjun Malhotra"
                      className="w-[55px] h-[55px] rounded-full object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800">
                    Arjun Malhotra
                  </h3>

                  <p className="text-red-600 text-sm mt-1">
                    Director
                  </p>

                  <p className="text-gray-600 mt-5 leading-7">
                    Great communication and excellent execution. We are very
                    happy with the final results.
                  </p>

                  <div className="text-yellow-500 text-xl mt-5">
                    ★★★★★
                  </div>
                </div>
              </div>

              {/* Card 6 */}
              <div className="w-full md:w-1/3 mt-10">
                <div className="relative bg-white rounded-lg shadow-md px-7 pt-16 pb-8 min-h-[365px] flex flex-col items-center justify-center text-center">

                  <div className="absolute -top-[38px] w-[82px] h-[82px] rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                    <img
                      src="https://i.pravatar.cc/150?img=25"
                      alt="Sneha Gupta"
                      className="w-[55px] h-[55px] rounded-full object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800">
                    Sneha Gupta
                  </h3>

                  <p className="text-red-600 text-sm mt-1">
                    Product Manager
                  </p>

                  <p className="text-gray-600 mt-5 leading-7">
                    Very responsive and reliable team. They always listened to
                    our feedback and improved the product accordingly.
                  </p>

                  <div className="text-yellow-500 text-xl mt-5">
                    ★★★★★
                  </div>
                </div>
              </div>

            </div>

            {/* ================= SLIDE 3 ================= */}
            <div className="min-w-full flex flex-col md:flex-row gap-6">

              {/* Card 7 */}
              <div className="w-full md:w-1/3 mt-10">
                <div className="relative bg-white rounded-lg shadow-md px-7 pt-16 pb-8 min-h-[365px] flex flex-col items-center justify-center text-center">

                  <div className="absolute -top-[38px] w-[82px] h-[82px] rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                    <img
                      src="https://i.pravatar.cc/150?img=35"
                      alt="Karan Singh"
                      className="w-[55px] h-[55px] rounded-full object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800">
                    Karan Singh
                  </h3>

                  <p className="text-red-600 text-sm mt-1">
                    Business Consultant
                  </p>

                  <p className="text-gray-600 mt-5 leading-7">
                    Their innovative approach helped us achieve exactly what
                    we wanted. Really satisfied with their work.
                  </p>

                  <div className="text-yellow-500 text-xl mt-5">
                    ★★★★★
                  </div>
                </div>
              </div>

              {/* Card 8 */}
              <div className="w-full md:w-1/3 mt-10">
                <div className="relative bg-white rounded-lg shadow-md px-7 pt-16 pb-8 min-h-[365px] flex flex-col items-center justify-center text-center">

                  <div className="absolute -top-[38px] w-[82px] h-[82px] rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                    <img
                      src="https://i.pravatar.cc/150?img=45"
                      alt="Ananya Sharma"
                      className="w-[55px] h-[55px] rounded-full object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800">
                    Ananya Sharma
                  </h3>

                  <p className="text-red-600 text-sm mt-1">
                    HR Manager
                  </p>

                  <p className="text-gray-600 mt-5 leading-7">
                    Professional, creative and very easy to work with. The
                    entire experience was excellent.
                  </p>

                  <div className="text-yellow-500 text-xl mt-5">
                    ★★★★★
                  </div>
                </div>
              </div>

              {/* Card 9 */}
              <div className="w-full md:w-1/3 mt-10">
                <div className="relative bg-white rounded-lg shadow-md px-7 pt-16 pb-8 min-h-[365px] flex flex-col items-center justify-center text-center">

                  <div className="absolute -top-[38px] w-[82px] h-[82px] rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                    <img
                      src="https://i.pravatar.cc/150?img=8"
                      alt="Rohit Joshi"
                      className="w-[55px] h-[55px] rounded-full object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800">
                    Rohit Joshi
                  </h3>

                  <p className="text-red-600 text-sm mt-1">
                    CEO
                  </p>

                  <p className="text-gray-600 mt-5 leading-7">
                    We really appreciate their commitment and attention to
                    detail. Would definitely work with them again.
                  </p>

                  <div className="text-yellow-500 text-xl mt-5">
                    ★★★★★
                  </div>
                </div>
              </div>

            </div>

            {/* ================= SLIDE 4 ================= */}
            <div className="min-w-full flex flex-col md:flex-row gap-6">

              {/* Card 10 */}
              <div className="w-full md:w-1/3 mt-10">
                <div className="relative bg-white rounded-lg shadow-md px-7 pt-16 pb-8 min-h-[365px] flex flex-col items-center justify-center text-center">

                  <div className="absolute -top-[38px] w-[82px] h-[82px] rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                    <img
                      src="https://i.pravatar.cc/150?img=18"
                      alt="Pooja Agarwal"
                      className="w-[55px] h-[55px] rounded-full object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800">
                    Pooja Agarwal
                  </h3>

                  <p className="text-red-600 text-sm mt-1">
                    Business Owner
                  </p>

                  <p className="text-gray-600 mt-5 leading-7">
                    Fantastic service and great support. Everything was
                    delivered exactly according to our expectations.
                  </p>

                  <div className="text-yellow-500 text-xl mt-5">
                    ★★★★★
                  </div>
                </div>
              </div>

              {/* Card 11 */}
              <div className="w-full md:w-1/3 mt-10">
                <div className="relative bg-white rounded-lg shadow-md px-7 pt-16 pb-8 min-h-[365px] flex flex-col items-center justify-center text-center">

                  <div className="absolute -top-[38px] w-[82px] h-[82px] rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                    <img
                      src="https://i.pravatar.cc/150?img=28"
                      alt="Vikram Patel"
                      className="w-[55px] h-[55px] rounded-full object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800">
                    Vikram Patel
                  </h3>

                  <p className="text-red-600 text-sm mt-1">
                    Founder
                  </p>

                  <p className="text-gray-600 mt-5 leading-7">
                    Excellent technical team with great communication skills.
                    They delivered a quality product within the deadline.
                  </p>

                  <div className="text-yellow-500 text-xl mt-5">
                    ★★★★★
                  </div>
                </div>
              </div>

              {/* Card 12 */}
              <div className="w-full md:w-1/3 mt-10">
                <div className="relative bg-white rounded-lg shadow-md px-7 pt-16 pb-8 min-h-[365px] flex flex-col items-center justify-center text-center">

                  <div className="absolute -top-[38px] w-[82px] h-[82px] rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                    <img
                      src="https://i.pravatar.cc/150?img=38"
                      alt="Meera Kapoor"
                      className="w-[55px] h-[55px] rounded-full object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800">
                    Meera Kapoor
                  </h3>

                  <p className="text-red-600 text-sm mt-1">
                    Operations Head
                  </p>

                  <p className="text-gray-600 mt-5 leading-7">
                    A wonderful experience overall. The team was professional,
                    helpful and delivered exactly what they promised.
                  </p>

                  <div className="text-yellow-500 text-xl mt-5">
                    ★★★★★
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          disabled={currentSlide === 3}
          className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20
          w-11 h-11 rounded-full items-center justify-center text-2xl
          ${
            currentSlide === 3
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-red-600 text-white hover:bg-red-700"
          }`}
        >
          ›
        </button>

        {/* Mobile Buttons */}
        <div className="flex md:hidden justify-center gap-4 mt-7">

          <button
            onClick={previousSlide}
            disabled={currentSlide === 0}
            className={`w-10 h-10 rounded-full text-xl
            ${
              currentSlide === 0
                ? "bg-gray-300 text-gray-500"
                : "bg-red-600 text-white"
            }`}
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide === 3}
            className={`w-10 h-10 rounded-full text-xl
            ${
              currentSlide === 3
                ? "bg-gray-300 text-gray-500"
                : "bg-red-600 text-white"
            }`}
          >
            ›
          </button>

        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-7">

          <button
            onClick={() => setCurrentSlide(0)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === 0 ? "bg-red-600" : "bg-gray-300"
            }`}
          ></button>

          <button
            onClick={() => setCurrentSlide(1)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === 1 ? "bg-red-600" : "bg-gray-300"
            }`}
          ></button>

          <button
            onClick={() => setCurrentSlide(2)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === 2 ? "bg-red-600" : "bg-gray-300"
            }`}
          ></button>

          <button
            onClick={() => setCurrentSlide(3)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === 3 ? "bg-red-600" : "bg-gray-300"
            }`}
          ></button>

        </div>

      </div>
    </section>
  );
};

export default Testimonials