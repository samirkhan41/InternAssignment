import React from "react";

import rameshImage from "../assets/ramesh.webp"
import ashiImage from "../assets/ashi.webp";
import akshayImage from "../assets/akshay.webp";

const Leadership = () => {
  return (
    <section className="bg-white py-12 md:py-16">

      {/* ================= HEADING ================= */}

      <div className="text-center">

        <h2 className="text-[28px] md:text-[36px] font-bold text-red-600">
          Meet Our Leadership Team
        </h2>

        {/* Underline */}

        <div className="relative w-[110px] h-[5px] bg-black mx-auto mt-4">
          <span className="absolute left-0 top-0 w-[20px] h-full bg-[#20c9b5]"></span>
        </div>

      </div>


      {/* ================= TEAM ================= */}

      <div
        className="
          max-w-[1100px]
          mx-auto
          px-5
          mt-12
          flex
          flex-col
          md:flex-row
          justify-between
          gap-8
        "
      >

        {/* ================= MEMBER 1 ================= */}

        <div
          className="
            w-full
            md:w-[31%]
            min-h-[375px]
            bg-white
            rounded-[6px]
            shadow-[0_4px_20px_rgba(0,0,0,0.10)]
            flex
            flex-col
            items-center
            pt-8
            pb-8
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-[0_10px_25px_rgba(0,0,0,0.14)]
          "
        >

          {/* IMAGE */}

          <div className="w-[180px] h-[180px] flex items-center justify-center overflow-hidden">

            <img
              src={rameshImage}
              alt="Ramesh Singh"
              className="w-full h-full object-contain"
            />

          </div>


          {/* NAME */}

          <h3
            className="
              text-[24px]
              md:text-[25px]
              font-bold
              text-[#173b91]
              text-center
              mt-8
            "
          >
            Ramesh Singh
          </h3>


          {/* ROLE */}

          <p
            className="
              text-[19px]
              md:text-[20px]
              text-[#173b91]
              text-center
              mt-1
            "
          >
            Co-founder & Director
          </p>

        </div>


        {/* ================= MEMBER 2 ================= */}

        <div
          className="
            w-full
            md:w-[31%]
            min-h-[375px]
            bg-white
            rounded-[6px]
            shadow-[0_4px_20px_rgba(0,0,0,0.10)]
            flex
            flex-col
            items-center
            pt-8
            pb-8
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-[0_10px_25px_rgba(0,0,0,0.14)]
          "
        >

          {/* IMAGE */}

          <div className="w-[180px] h-[180px] flex items-center justify-center overflow-hidden">

            <img
              src={ashiImage}
              alt="Ashi Gupta"
              className="w-full h-full object-contain"
            />

          </div>


          {/* NAME */}

          <h3
            className="
              text-[24px]
              md:text-[25px]
              font-bold
              text-[#173b91]
              text-center
              mt-8
            "
          >
            Ashi Gupta
          </h3>


          {/* ROLE */}

          <p
            className="
              text-[19px]
              md:text-[20px]
              text-[#173b91]
              text-center
              mt-1
            "
          >
            Managing Director
          </p>

        </div>


        {/* ================= MEMBER 3 ================= */}

        <div
          className="
            w-full
            md:w-[31%]
            min-h-[375px]
            bg-white
            rounded-[6px]
            shadow-[0_4px_20px_rgba(0,0,0,0.10)]
            flex
            flex-col
            items-center
            pt-8
            pb-8
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-[0_10px_25px_rgba(0,0,0,0.14)]
          "
        >

          {/* IMAGE */}

          <div className="w-[180px] h-[180px] flex items-center justify-center overflow-hidden">

            <img
              src={akshayImage}
              alt="Akshay Gupta"
              className="w-full h-full object-contain"
            />

          </div>


          {/* NAME */}

          <h3
            className="
              text-[24px]
              md:text-[25px]
              font-bold
              text-[#173b91]
              text-center
              mt-8
            "
          >
            Akshay Gupta
          </h3>


          {/* ROLE */}

          <p
            className="
              text-[19px]
              md:text-[20px]
              text-[#173b91]
              text-center
              mt-1
            "
          >
            CEO
          </p>

        </div>

      </div>

    </section>
  );
};

export default Leadership