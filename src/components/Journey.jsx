import React from "react";

const Journey = () => {
  return (
    <section className="bg-[#fff0f0] py-10 md:py-12">

      {/* ================= HEADING ================= */}

      <div className="text-center px-5">

        <h2 className="text-[28px] md:text-[34px] font-bold text-red-600">
          A journey as dynamic as us
        </h2>

        {/* Underline */}

        <div className="relative w-[82px] h-[4px] bg-black mx-auto mt-3">
          <span className="absolute left-0 top-0 w-[18px] h-full bg-[#20c9b5]"></span>
        </div>

      </div>


      {/* ================= CONTENT ================= */}

      <div className="max-w-[1150px] mx-auto px-5 mt-7">

        <p
          className="
            text-center
            text-[16px]
            md:text-[19px]
            leading-[1.8]
            text-gray-900
          "
        >
          <span className="text-blue-600 font-bold">
            In 2019
          </span>
          , A year of foundational growth and learning, we focused on
          building a strong foundation and establishing our identity.

          {" "}

          <span className="text-blue-600 font-bold">
            In 2020
          </span>
          {" "}
          Solidifying our presence, we diversified our services and
          remained committed to quality and customer satisfaction.

          {" "}

          <span className="text-blue-600 font-bold">
            In 2021
          </span>
          {" "}
          We gained momentum and recognition, expanding our client base
          and embracing new technologies and methodologies.

          {" "}

          <span className="text-blue-600 font-bold">
            In 2022
          </span>
          {" "}
          A milestone year, we grew into a matured organization, taking
          on ambitious projects and delivering greater value.
        </p>

      </div>


      {/* ================= DECORATION ================= */}

      <div className="relative max-w-[1400px] mx-auto">

        <div className="absolute left-16 bottom-0 flex items-end gap-3">

          <div className="w-[25px] h-[25px] bg-red-600 rounded-full"></div>

          <div className="w-[12px] h-[12px] bg-red-600 rounded-full"></div>

        </div>

      </div>

    </section>
  );
};

export default Journey;