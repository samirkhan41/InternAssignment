import React from "react";

const Contact = () => {
  return (
    <section className="bg-white py-12 md:py-16">

      {/* ================= HEADING ================= */}

      <div className="text-center">

        <h2 className="text-[28px] md:text-[36px] font-bold text-red-600">
          Contact Us
        </h2>

        {/* Underline */}

        <div className="relative w-[82px] h-[5px] bg-black mx-auto mt-4">
          <span className="absolute left-0 top-0 w-[18px] h-full bg-[#20c9b5]"></span>
        </div>

      </div>


      {/* ================= CONTACT FORM ================= */}

      <div
        className="
          max-w-[1130px]
          mx-auto
          px-6
          md:px-7
          py-10
          md:py-12
          mt-12

          bg-white

          shadow-[0_2px_12px_rgba(0,0,0,0.10)]
        "
      >

        {/* FORM TITLE */}

        <h3 className="text-[20px] md:text-[22px] font-semibold text-[#17213c] mb-5">
          Send us a message
        </h3>


        {/* ================= ROW 1 ================= */}

        <div className="flex flex-col md:flex-row gap-8 md:gap-14">

          {/* FULL NAME */}

          <div className="w-full md:w-1/2">

            <label className="block text-[17px] text-gray-400 mb-3">
              Full Name
            </label>

            <input
              type="text"
              className="
                w-full
                h-[50px]
                border
                border-gray-300
                outline-none
                px-4
                text-[16px]

                focus:border-blue-500
              "
            />

          </div>


          {/* EMAIL */}

          <div className="w-full md:w-1/2">

            <label className="block text-[17px] text-gray-400 mb-3">
              Email
            </label>

            <input
              type="email"
              className="
                w-full
                h-[50px]
                border
                border-gray-300
                outline-none
                px-4
                text-[16px]

                focus:border-blue-500
              "
            />

          </div>

        </div>


        {/* ================= ROW 2 ================= */}

        <div className="flex flex-col md:flex-row gap-8 md:gap-14 mt-10">

          {/* PHONE */}

          <div className="w-full md:w-1/2">

            <label className="block text-[17px] text-gray-400 mb-3">
              Phone
            </label>

            <input
              type="tel"
              className="
                w-full
                h-[50px]
                border
                border-gray-300
                outline-none
                px-4
                text-[16px]

                focus:border-blue-500
              "
            />

          </div>


          {/* COMPANY */}

          <div className="w-full md:w-1/2">

            <label className="block text-[17px] text-gray-400 mb-3">
              Company
            </label>

            <input
              type="text"
              className="
                w-full
                h-[50px]
                border
                border-gray-300
                outline-none
                px-4
                text-[16px]

                focus:border-blue-500
              "
            />

          </div>

        </div>


        {/* ================= MESSAGE ================= */}

        <div className="mt-10">

          <label className="block text-[17px] text-gray-400 mb-3">
            Message
          </label>

          <textarea
            className="
              w-full
              h-[120px]

              border
              border-gray-300

              outline-none

              px-4
              py-3

              resize-none

              text-[16px]

              focus:border-blue-500
            "
          ></textarea>

        </div>


        {/* ================= SUBMIT ================= */}

        <button
        type="submit"
          className="
            mt-8

            bg-red-600
            hover:bg-red-700

            text-white

            font-bold
            text-[18px]

            px-7
            py-3

            rounded-[4px]

            transition-all
            duration-300

            hover:-translate-y-1
            hover:shadow-lg
          "
        >
          Submit
        </button>

      </div>

    </section>
  );
};

export default Contact;