import React from "react";

const TechFocus = () => {
  return (
    <section className="bg-[#fff0f0] py-12 md:py-14">

      {/* ================= HEADING ================= */}

      <div className="text-center">

        <h2 className="text-[28px] md:text-[34px] font-bold text-red-600">
          Current Tech Focus
        </h2>

        {/* Underline */}

        <div className="relative w-[82px] h-[4px] bg-black mx-auto mt-3">
          <span className="absolute left-0 top-0 w-[18px] h-full bg-[#20c9b5]"></span>
        </div>

      </div>


      {/* ================= VIDEOS ================= */}

      <div
        className="
          max-w-[1050px]
          mx-auto
          px-5
          mt-12

          flex
          flex-wrap
          justify-between
          gap-y-14
        "
      >

        {/* ================= VIDEO 1 ================= */}

        <div className="w-full md:w-[47%] text-center">

          {/* VIDEO SPACE */}

          <div
            className="
              w-full
              h-[230px]
              md:h-[230px]

              bg-gray-200

              flex
              items-center
              justify-center

              overflow-hidden
            "
          >
            {/* ADD VIDEO HERE */}
          </div>


          <h3 className="text-[20px] md:text-[21px] font-bold mt-2">
            3D Animation
          </h3>

          <p className="text-[14px] md:text-[15px] mt-1">
            Cling Logo animation
          </p>

        </div>


        {/* ================= VIDEO 2 ================= */}

        <div className="w-full md:w-[47%] text-center">

          {/* VIDEO SPACE */}

          <div
            className="
              w-full
              h-[230px]
              md:h-[230px]

              bg-gray-200

              flex
              items-center
              justify-center

              overflow-hidden
            "
          >
            {/* ADD VIDEO HERE */}
          </div>


          <h3 className="text-[20px] md:text-[21px] font-bold mt-2">
            3D Animation
          </h3>

          <p className="text-[14px] md:text-[15px] mt-1">
            Advertisement video
          </p>

        </div>


        {/* ================= VIDEO 3 ================= */}

        <div className="w-full md:w-[47%] text-center mx-auto">

          {/* VIDEO SPACE */}

          <div
            className="
              w-full
              h-[230px]

              bg-gray-200

              flex
              items-center
              justify-center

              overflow-hidden
            "
          >
            {/* ADD VIDEO HERE */}
          </div>


          <h3 className="text-[20px] md:text-[21px] font-bold mt-2">
            AI
          </h3>

          <p className="text-[14px] md:text-[15px] mt-1 max-w-[500px] mx-auto">
            The Surveillance Model identifies suspicious activity in the
            video
          </p>

        </div>

      </div>

    </section>
  );
};

export default TechFocus