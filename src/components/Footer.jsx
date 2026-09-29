import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white">

      {/* ================= TOP LOGO BAR ================= */}

      <div className="border-b border-gray-200 shadow-sm">

        <div className="px-8 md:px-10 py-8 flex items-center justify-between">

          {/* Logo */}

          <div className="w-[105px] h-[50px] flex items-center">
            {/* Add your logo here */}

            {/* Example:
            <img
              src="/images/logo.webp"
              alt="Logo"
              className="max-w-full max-h-full object-contain"
            />
            */}
          </div>


          {/* Social Icons */}

          <div className="flex items-center gap-5">

            {/* Instagram */}

            <a
              href="#"
              className="
                w-[32px]
                h-[32px]
                rounded-full
                bg-[#292929]
                text-white
                flex
                items-center
                justify-center
                text-[17px]
                hover:bg-red-600
                transition
              "
            >
              ◎
            </a>


            {/* LinkedIn */}

            <a
              href="#"
              className="
                w-[32px]
                h-[32px]
                rounded-full
                bg-[#292929]
                text-white
                flex
                items-center
                justify-center
                text-[15px]
                font-bold
                hover:bg-red-600
                transition
              "
            >
              in
            </a>

          </div>

        </div>

      </div>


      {/* ================= FOOTER CONTENT ================= */}

      <div className="bg-gradient-to-b from-white to-[#ffe0e0]">

        <div
          className="
            max-w-[1450px]
            mx-auto
            px-8
            md:px-10
            py-9

            flex
            flex-col
            md:flex-row

            gap-12
            md:gap-20
          "
        >

          {/* ================= COMPANY ================= */}

          <div className="w-full md:w-[52%]">

            <h3 className="text-[20px] font-bold text-black">
              Cling Info Tech Works Private Limited
            </h3>


            <h4 className="text-[21px] font-semibold mt-7">
              Address
            </h4>


            {/* Noida */}

            <h5 className="text-[18px] font-semibold mt-4">
              Head Office Noida
            </h5>

            <p className="text-[16px] leading-[1.5] mt-1">
              130, 131, 132, 2nd Floor, Wave Galleria, Wave City,
              <br />
              NH-24, Noida, Uttar Pradesh - 201015
            </p>


            {/* Pune */}

            <h5 className="text-[18px] font-semibold mt-3">
              Pune Office Address
            </h5>

            <p className="text-[16px] leading-[1.5] mt-1">
              2nd Floor, Raj Square, Pashan - Sus Rd,
              <br />
              near Abhinav kala college, opposite
              <br />
              Reliance Fresh, Sutwarwadi, Pashan,
              <br />
              Pune, Maharashtra - 411021
            </p>


            {/* Moradabad */}

            <h5 className="text-[18px] font-semibold mt-3">
              Moradabad Office Address
            </h5>

            <p className="text-[16px] leading-[1.5] mt-1">
              2/652, Avas Vikas, Buddhi Vihar
              <br />
              Moradabad, UP - 244001
            </p>


            {/* Location */}

            <div className="flex items-center gap-3 mt-5">

              <div className="w-[42px] h-[42px] rounded-full bg-red-600 text-white flex items-center justify-center text-[20px]">
                ⌖
              </div>

              <p className="text-[16px]">
                Maharashtra, Uttar Pradesh
              </p>

            </div>


            {/* Phone */}

            <div className="flex items-center gap-3 mt-3">

              <div className="w-[42px] h-[42px] rounded-full bg-red-600 text-white flex items-center justify-center text-[20px]">
                ☎
              </div>

              <p className="text-[16px]">
                +91 8264469132
              </p>

            </div>


            {/* Email */}

            <div className="flex items-center gap-3 mt-3">

              <div className="w-[42px] h-[42px] rounded-full bg-red-600 text-white flex items-center justify-center text-[20px]">
                ✉
              </div>

              <p className="text-[16px]">
                info@clingingfotech.com
              </p>

            </div>

          </div>


          {/* ================= QUICK LINKS ================= */}

          <div className="w-full md:w-[25%]">

            <h3 className="text-[20px] font-bold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 mt-6 text-[16px]">

              <a href="#">Home</a>

              <a href="#">3D Videos</a>

              <a href="#">AI/ML</a>

              <a href="#">Services</a>

              <a href="#">Clients</a>

              <a href="#">Portfolio</a>

              <a href="#">Achievements</a>

              <a href="#">Team</a>

              <a href="#">Career</a>

              <a href="#">Sitemap</a>

              <a href="#">Privacy Policy</a>

              <a href="#">Cancellation & Refund Policy</a>

              <a href="#">Terms and Conditions</a>

            </div>

          </div>


          {/* ================= SERVICES ================= */}

          <div className="w-full md:w-[23%]">

            <h3 className="text-[20px] font-bold">
              Services
            </h3>

            <div className="flex flex-col gap-5 mt-6 text-[16px]">

              <a href="#">App Development</a>

              <a href="#">Website Designing</a>

              <a href="#">Web Design</a>

              <a href="#">Digital Marketing</a>

              <a href="#">Social Media Marketing</a>

              <a href="#">IT Team for Entrepreneurship</a>

              <a href="#">Career Counselling</a>

              <a href="#">ERPs</a>

            </div>

          </div>

        </div>


        {/* ================= COPYRIGHT ================= */}

        <div className="border-t border-gray-300 py-5 text-center">

          <p className="text-[16px] md:text-[18px]">
            Copyright © Cling Infotech All Rights Reserved
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;