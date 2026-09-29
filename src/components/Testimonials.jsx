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

      {/* ================= HEADING ================= */}

      <div className="text-center px-5">

        <h2 className="text-[28px] md:text-[36px] font-bold text-red-600">
          Testimonials
        </h2>

        <div className="relative w-[98px] h-[5px] bg-black mx-auto mt-4">
          <span className="absolute left-0 top-0 w-[20px] h-full bg-[#20c9b5]"></span>
        </div>

      </div>


      {/* ================= DESCRIPTION ================= */}

      <div className="max-w-[950px] mx-auto px-5 mt-7">

        <p className="text-center text-[16px] md:text-[20px] leading-[1.7] text-gray-900">
          Your Voice, Our Pride! Dive into the heartfelt accounts of our
          valued patrons. From life-changing experiences to exceptional
          service, their stories illuminate the essence of our commitment.
          Join our family of satisfied customers and witness firsthand the
          transformative power of our offerings. Your satisfaction is our
          greatest achievement!
        </p>

      </div>


      {/* ================= SLIDER ================= */}

      <div className="max-w-[1300px] mx-auto px-5 mt-20 relative">

        {/* LEFT BUTTON */}

        <button
          onClick={previousSlide}
          disabled={currentSlide === 0}
          className="
            hidden
            md:flex
            absolute
            left-0
            top-1/2
            -translate-y-1/2
            -translate-x-2
            z-10

            w-[42px]
            h-[42px]

            bg-white
            rounded-full
            shadow-md

            items-center
            justify-center

            text-[25px]
            text-gray-700

            hover:bg-gray-100
            transition

            disabled:opacity-30
            disabled:cursor-not-allowed
          "
        >
          ‹
        </button>


        {/* ================= SLIDER WINDOW ================= */}

        <div className="overflow-hidden">

          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >


            {/* ================================================= */}
            {/* ================= SLIDE 1 ======================= */}
            {/* ================================================= */}

            <div className="w-full shrink-0 flex flex-col md:flex-row gap-8">

              {/* TESTIMONIAL 1 */}

              <div className="w-full md:w-1/3">

                <div className="relative bg-white rounded-[12px] shadow-md px-7 pt-16 pb-8 min-h-[365px] flex flex-col items-center justify-center">

                  {/* IMAGE SPACE */}

                  <div className="absolute -top-[38px] w-[82px] h-[82px] rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                    {/* ADD IMAGE HERE */}
                  </div>

                  <p className="text-[17px] md:text-[19px] text-center leading-[1.4]">
                    Working with Cling Info Tech was a game-changer for our
                    business. Their expertise and dedication helped us achieve
                    remarkable results. I highly recommend them to anyone
                    looking for top-notch service
                  </p>

                  <h3 className="text-[24px] mt-8 italic font-serif">
                    Praveen Shetty
                  </h3>

                </div>

              </div>


              {/* TESTIMONIAL 2 */}

              <div className="w-full md:w-1/3">

                <div className="relative bg-white rounded-[12px] shadow-md px-7 pt-16 pb-8 min-h-[365px] flex flex-col items-center justify-center">

                  {/* IMAGE SPACE */}

                  <div className="absolute -top-[38px] w-[82px] h-[82px] rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                    {/* ADD IMAGE HERE */}
                  </div>

                  <p className="text-[17px] md:text-[19px] text-center leading-[1.4]">
                    Cling Info Tech' professionalism and efficiency surpassed
                    our expectations, understanding our needs exceptionally
                    well. Rarely do we find such a reliable partner in today's
                    market. Their dedication sets them apart.
                  </p>

                  <h3 className="text-[24px] mt-8 italic font-serif">
                    Swatee Agrawal
                  </h3>

                  <p className="text-[18px] italic font-serif mt-1">
                    Founder - Piaah.com
                  </p>

                </div>

              </div>


              {/* TESTIMONIAL 3 */}

              <div className="w-full md:w-1/3">

                <div className="relative bg-white rounded-[12px] shadow-md px-7 pt-16 pb-8 min-h-[365px] flex flex-col items-center justify-center">

                  {/* IMAGE SPACE */}

                  <div className="absolute -top-[38px] w-[82px] h-[82px] rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                    {/* ADD IMAGE HERE */}
                  </div>

                  <p className="text-[17px] md:text-[19px] text-center leading-[1.4]">
                    Choosing Cling Info Tech was one of the best decisions we
                    made. Their team's creativity and strategic approach
                    transformed our vision into reality. I'm grateful for their
                    outstanding support and guidance throughout the process.
                  </p>

                  <h3 className="text-[24px] mt-8 italic font-serif">
                    Elizabeth Jean Thomas
                  </h3>

                  <p className="text-[18px] italic font-serif mt-1">
                    Founder - Speech Ally
                  </p>

                </div>

              </div>

            </div>


            {/* ================================================= */}
            {/* ================= SLIDE 2 ======================= */}
            {/* ================================================= */}

            <div className="w-full shrink-0 flex flex-col md:flex-row gap-8">

              {/* CARD 4 */}

              <div className="w-full md:w-1/3">
                <div className="relative bg-white rounded-[12px] shadow-md px-7 pt-16 pb-8 min-h-[365px] flex flex-col items-center justify-center">

                  <div className="absolute -top-[38px] w-[82px] h-[82px] rounded-full bg-white border-4 border-white shadow-md">
                    {/* IMAGE 4 */}
                  </div>

                  <p className="text-[17px] md:text-[19px] text-center leading-[1.4]">
                    Add your fourth customer testimonial here. Write the
                    customer's experience with your company.
                  </p>

                  <h3 className="text-[24px] mt-8 italic font-serif">
                    Customer Name
                  </h3>

                  <p className="text-[18px] italic font-serif mt-1">
                    Founder
                  </p>

                </div>
              </div>


              {/* CARD 5 */}

              <div className="w-full md:w-1/3">
                <div className="relative bg-white rounded-[12px] shadow-md px-7 pt-16 pb-8 min-h-[365px] flex flex-col items-center justify-center">

                  <div className="absolute -top-[38px] w-[82px] h-[82px] rounded-full bg-white border-4 border-white shadow-md">
                    {/* IMAGE 5 */}
                  </div>

                  <p className="text-[17px] md:text-[19px] text-center leading-[1.4]">
                    Add your fifth customer testimonial here. Write the
                    customer's experience with your company.
                  </p>

                  <h3 className="text-[24px] mt-8 italic font-serif">
                    Customer Name
                  </h3>

                  <p className="text-[18px] italic font-serif mt-1">
                    Founder
                  </p>

                </div>
              </div>


              {/* CARD 6 */}

              <div className="w-full md:w-1/3">
                <div className="relative bg-white rounded-[12px] shadow-md px-7 pt-16 pb-8 min-h-[365px] flex flex-col items-center justify-center">

                  <div className="absolute -top-[38px] w-[82px] h-[82px] rounded-full bg-white border-4 border-white shadow-md">
                    {/* IMAGE 6 */}
                  </div>

                  <p className="text-[17px] md:text-[19px] text-center leading-[1.4]">
                    Add your sixth customer testimonial here. Write the
                    customer's experience with your company.
                  </p>

                  <h3 className="text-[24px] mt-8 italic font-serif">
                    Customer Name
                  </h3>

                  <p className="text-[18px] italic font-serif mt-1">
                    Founder
                  </p>

                </div>
              </div>

            </div>


            {/* ================================================= */}
            {/* ================= SLIDE 3 ======================= */}
            {/* ================================================= */}

            <div className="w-full shrink-0 flex flex-col md:flex-row gap-8">

              <div className="w-full md:w-1/3">
                <div className="relative bg-white rounded-[12px] shadow-md px-7 pt-16 pb-8 min-h-[365px] flex flex-col items-center justify-center">

                  <div className="absolute -top-[38px] w-[82px] h-[82px] rounded-full bg-white border-4 border-white shadow-md">
                    {/* IMAGE 7 */}
                  </div>

                  <p className="text-[17px] md:text-[19px] text-center leading-[1.4]">
                    Add your seventh customer testimonial here.
                  </p>

                  <h3 className="text-[24px] mt-8 italic font-serif">
                    Customer Name
                  </h3>

                </div>
              </div>


              <div className="w-full md:w-1/3">
                <div className="relative bg-white rounded-[12px] shadow-md px-7 pt-16 pb-8 min-h-[365px] flex flex-col items-center justify-center">

                  <div className="absolute -top-[38px] w-[82px] h-[82px] rounded-full bg-white border-4 border-white shadow-md">
                    {/* IMAGE 8 */}
                  </div>

                  <p className="text-[17px] md:text-[19px] text-center leading-[1.4]">
                    Add your eighth customer testimonial here.
                  </p>

                  <h3 className="text-[24px] mt-8 italic font-serif">
                    Customer Name
                  </h3>

                </div>
              </div>


              <div className="w-full md:w-1/3">
                <div className="relative bg-white rounded-[12px] shadow-md px-7 pt-16 pb-8 min-h-[365px] flex flex-col items-center justify-center">

                  <div className="absolute -top-[38px] w-[82px] h-[82px] rounded-full bg-white border-4 border-white shadow-md">
                    {/* IMAGE 9 */}
                  </div>

                  <p className="text-[17px] md:text-[19px] text-center leading-[1.4]">
                    Add your ninth customer testimonial here.
                  </p>

                  <h3 className="text-[24px] mt-8 italic font-serif">
                    Customer Name
                  </h3>

                </div>
              </div>

            </div>


            {/* ================================================= */}
            {/* ================= SLIDE 4 ======================= */}
            {/* ================================================= */}

            <div className="w-full shrink-0 flex flex-col md:flex-row gap-8">

              <div className="w-full md:w-1/3">
                <div className="relative bg-white rounded-[12px] shadow-md px-7 pt-16 pb-8 min-h-[365px] flex flex-col items-center justify-center">

                  <div className="absolute -top-[38px] w-[82px] h-[82px] rounded-full bg-white border-4 border-white shadow-md">
                    {/* IMAGE 10 */}
                  </div>

                  <p className="text-[17px] md:text-[19px] text-center leading-[1.4]">
                    Add your tenth customer testimonial here.
                  </p>

                  <h3 className="text-[24px] mt-8 italic font-serif">
                    Customer Name
                  </h3>

                </div>
              </div>


              <div className="w-full md:w-1/3">
                <div className="relative bg-white rounded-[12px] shadow-md px-7 pt-16 pb-8 min-h-[365px] flex flex-col items-center justify-center">

                  <div className="absolute -top-[38px] w-[82px] h-[82px] rounded-full bg-white border-4 border-white shadow-md">
                    {/* IMAGE 11 */}
                  </div>

                  <p className="text-[17px] md:text-[19px] text-center leading-[1.4]">
                    Add your eleventh customer testimonial here.
                  </p>

                  <h3 className="text-[24px] mt-8 italic font-serif">
                    Customer Name
                  </h3>

                </div>
              </div>


              <div className="w-full md:w-1/3">
                <div className="relative bg-white rounded-[12px] shadow-md px-7 pt-16 pb-8 min-h-[365px] flex flex-col items-center justify-center">

                  <div className="absolute -top-[38px] w-[82px] h-[82px] rounded-full bg-white border-4 border-white shadow-md">
                    {/* IMAGE 12 */}
                  </div>

                  <p className="text-[17px] md:text-[19px] text-center leading-[1.4]">
                    Add your twelfth customer testimonial here.
                  </p>

                  <h3 className="text-[24px] mt-8 italic font-serif">
                    Customer Name
                  </h3>

                </div>
              </div>

            </div>

          </div>

        </div>


        {/* RIGHT BUTTON */}

        <button
          onClick={nextSlide}
          disabled={currentSlide === 3}
          className="
            hidden
            md:flex
            absolute
            right-0
            top-1/2
            -translate-y-1/2
            translate-x-2
            z-10

            w-[42px]
            h-[42px]

            bg-white
            rounded-full
            shadow-md

            items-center
            justify-center

            text-[25px]
            text-gray-700

            hover:bg-gray-100
            transition

            disabled:opacity-30
            disabled:cursor-not-allowed
          "
        >
          ›
        </button>

      </div>


      {/* ================= MOBILE BUTTONS ================= */}

      <div className="flex md:hidden justify-center gap-5 mt-7">

        <button
          onClick={previousSlide}
          disabled={currentSlide === 0}
          className="
            w-[40px]
            h-[40px]
            bg-white
            rounded-full
            shadow-md
            text-[24px]
            disabled:opacity-30
          "
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          disabled={currentSlide === 3}
          className="
            w-[40px]
            h-[40px]
            bg-white
            rounded-full
            shadow-md
            text-[24px]
            disabled:opacity-30
          "
        >
          ›
        </button>

      </div>


      {/* ================= DOTS ================= */}

      <div className="flex justify-center gap-2 mt-7">

        <button
          onClick={() => setCurrentSlide(0)}
          className={`w-[12px] h-[12px] rounded-full border-2 ${
            currentSlide === 0
              ? "bg-black border-black"
              : "bg-transparent border-gray-500"
          }`}
        ></button>

        <button
          onClick={() => setCurrentSlide(1)}
          className={`w-[12px] h-[12px] rounded-full border-2 ${
            currentSlide === 1
              ? "bg-black border-black"
              : "bg-transparent border-gray-500"
          }`}
        ></button>

        <button
          onClick={() => setCurrentSlide(2)}
          className={`w-[12px] h-[12px] rounded-full border-2 ${
            currentSlide === 2
              ? "bg-black border-black"
              : "bg-transparent border-gray-500"
          }`}
        ></button>

        <button
          onClick={() => setCurrentSlide(3)}
          className={`w-[12px] h-[12px] rounded-full border-2 ${
            currentSlide === 3
              ? "bg-black border-black"
              : "bg-transparent border-gray-500"
          }`}
        ></button>

      </div>

    </section>
  );
};

export default Testimonials;