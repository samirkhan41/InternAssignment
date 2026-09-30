import React from "react";
import appImage from "../assets/services/app.webp"
import webImage from "../assets/services/web.webp"
import erpImage from "../assets/services/erps.webp"

const Services = () => {
  return (
    <section className="bg-white py-12 md:py-14">

      {/* ================= HEADING ================= */}

      <div className="text-center">

        <h2 className="text-[28px] md:text-[34px] font-bold text-red-600">
          Services
        </h2>

        {/* Underline */}

        <div className="relative w-[82px] h-[4px] bg-black mx-auto mt-3">
          <span className="absolute left-0 top-0 w-[18px] h-full bg-[#20c9b5]"></span>
        </div>

      </div>


      {/* ================= SERVICES ================= */}

      <div
        className="
          max-w-[1250px]
          mx-auto
          px-5
          md:px-10
          mt-12

          flex
          flex-col
          gap-14
        "
      >

        {/* ================= ROW 1 ================= */}

        <div className="flex flex-col md:flex-row gap-10 md:gap-20">

          {/* APP DEVELOPMENT */}

          <div className="w-full md:w-1/2 flex items-center gap-6">

            {/* IMAGE SPACE */}

            <div
              className="
                w-[125px]
                h-[125px]
                min-w-[125px]
                rounded-full
                bg-white
                shadow-[0_2px_10px_rgba(0,0,0,0.12)]
                flex
                items-center
                justify-center
              "
            >
             <img src={appImage} alt="" />
            </div>


            {/* CONTENT */}

            <div>

              <h3 className="text-[24px] md:text-[27px] font-bold text-blue-600">
                App Development
              </h3>

              <p className="mt-1 text-[15px] md:text-[17px] leading-[1.5] text-gray-900">
                Need custom app development services? We can help you
                to take advantage of the rapidly growing segment of
                mobile application development
              </p>

            </div>

          </div>


          {/* WEB DESIGN */}

          <div className="w-full md:w-1/2 flex items-center gap-6">

     <img src={webImage} alt="" />

          


            {/* CONTENT */}

            <div>

              <h3 className="text-[24px] md:text-[27px] font-bold text-blue-600">
                Web Design
              </h3>

              <p className="mt-1 text-[15px] md:text-[17px] leading-[1.5] text-gray-900">
                Don't let your website be just another URL on the web!
                We never use a pre-designed template for your website.
                All design layouts are developed from ground up,
                meeting the exacting standards you demand.
              </p>

            </div>

          </div>

        </div>


        {/* ================= ROW 2 ================= */}

        <div className="flex justify-center">

          <div className="w-full md:w-1/2 flex items-center gap-6">

            

            <div
              className="
                w-[125px]
                h-[125px]
                min-w-[125px]
                rounded-full
                bg-white
                shadow-[0_2px_10px_rgba(0,0,0,0.12)]
                flex
                items-center
                justify-center
              "
            >
               <img src={erpImage} alt="" />
            </div>


            {/* CONTENT */}

            <div>

              <h3 className="text-[24px] md:text-[27px] font-bold text-blue-600">
                ERPs
              </h3>

              <p className="mt-1 text-[15px] md:text-[17px] leading-[1.5] text-gray-900">
                We help you to manage your business activities by
                integrating your back and front office applications.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Services;