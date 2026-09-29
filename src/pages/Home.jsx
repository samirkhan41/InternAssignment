import React, { useEffect, useRef, useState } from "react";

import {
  FaUsers,
  FaTrophy,
  FaGraduationCap,
  FaCode,
  FaMobileAlt,
  FaBullhorn,
  FaCloud,
  FaLaptopCode,
  FaHandshake,
  FaBookOpen,
  FaChevronDown,
  FaLightbulb,
  FaCoffee,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import logo from "../assets/logo.webp";
import heroImage from "../assets/heroImage.webp";
import whatsaapImage from "../assets/whatsaapLogo.webp";


// =====================================================
// MENU DATA
// =====================================================

const menuData = {
  "About Us": [
    ["Team", FaUsers],
    ["Achievements", FaTrophy],
    ["Career", FaGraduationCap],
  ],

  Services: [
    ["Web Development", FaCode],
    ["Mobile App Development", FaMobileAlt],
    ["Digital Marketing", FaBullhorn],
  ],

  Solutions: [
    ["Cloud Solutions", FaCloud],
    ["IT Solutions", FaLaptopCode],
    ["Business Solutions", FaHandshake],
  ],

  Resources: [
    ["Blog", FaBookOpen],
    ["Case Studies", FaLaptopCode],
    ["Resources", FaBookOpen],
  ],

  Clients: [
    ["Our Clients", FaUsers],
    ["Client Stories", FaHandshake],
    ["Client Reviews", FaTrophy],
  ],
};


// =====================================================
// DROPDOWN COMPONENT
// =====================================================

const DropdownItems = ({ items, mobile = false }) => {
  return (
    <div
      className={
        mobile
          ? "ml-4 border-l border-white/30"
          : "absolute top-9 right-0 w-[180px] bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden z-50"
      }
    >
      {items.map(([name, Icon]) => (
        <a
          href="#"
          key={name}
          className={
            mobile
              ? "h-11 flex items-center px-5 text-white text-sm bg-black/10 border-b border-white/10 hover:bg-black/20 transition-all"
              : "h-[45px] flex items-center gap-3 px-4 text-gray-800 border-b border-gray-200 last:border-0 hover:bg-gray-50 hover:text-blue-600 hover:pl-5 transition-all duration-200 group"
          }
        >
          <Icon
            className={
              mobile
                ? "mr-4"
                : "text-[15px] w-4 group-hover:scale-110 transition-transform"
            }
          />

          <span className={mobile ? "" : "text-[14px]"}>
            {name}
          </span>
        </a>
      ))}
    </div>
  );
};


// =====================================================
// DESKTOP NAV ITEM
// =====================================================

const DesktopMenu = ({
  name,
  items,
  openMenu,
  setOpenMenu,
}) => {
  const isOpen = openMenu === name;

  return (
    <div className="relative">

      <button
        onClick={() => setOpenMenu(isOpen ? null : name)}
        className={`flex items-center gap-2 transition-colors duration-300 ${
          isOpen
            ? "text-blue-600"
            : "hover:text-blue-600"
        }`}
      >
        {name}

        <FaChevronDown
          className={`text-xs transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>


      {/* DROPDOWN */}

      <div
        className={`transition-all duration-300 origin-top ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-3 pointer-events-none"
        }`}
      >
        <DropdownItems items={items} />
      </div>

    </div>
  );
};


// =====================================================
// MOBILE NAV ITEM
// =====================================================

const MobileMenu = ({
  name,
  items,
  openMenu,
  setOpenMenu,
}) => {
  const isOpen = openMenu === name;

  return (
    <div>

      <button
        onClick={() => setOpenMenu(isOpen ? null : name)}
        className="
          w-full
          h-12
          flex
          items-center
          justify-between
          px-4
          text-white
          font-semibold
          hover:bg-white/10
          transition
        "
      >

        <span className="flex items-center">

          <FaUsers className="mr-4" />

          {name}

        </span>

        <FaChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />

      </button>


      {/* MOBILE DROPDOWN */}

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen
            ? "max-h-60 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <DropdownItems
          items={items}
          mobile
        />
      </div>

    </div>
  );
};


// =====================================================
// STATS DATA
// =====================================================

const stats = [
  ["32387122", "Number of lines of code", FaCode],
  ["350+", "Happy clients", FaUsers],
  ["390+", "Projects Completed", FaLightbulb],
  ["1500+", "Coffee With Clients", FaCoffee],
];


// =====================================================
// STATS COMPONENT
// =====================================================

const Stats = () => {
  return (
    <div className="stats-card">

      {stats.map(([number, text, Icon], index) => (
        <div
          key={text}
          className="stat-item"
          style={{
            animationDelay: `${0.15 + index * 0.15}s`,
          }}
        >

          <Icon
            className="
              text-blue-600
              text-[30px]
              mb-2
              mx-auto
            "
          />

          <h3 className="font-semibold text-[16px]">
            {number}
          </h3>

          <p
            className="
              text-[13px]
              sm:text-[14px]
              text-gray-700
              mt-1
            "
          >
            {text}
          </p>

        </div>
      ))}

    </div>
  );
};


// =====================================================
// HOME
// =====================================================

const Home = () => {

  const [openMenu, setOpenMenu] = useState(null);

  const [mobileMenu, setMobileMenu] = useState(false);

  const navRef = useRef(null);


  // =====================================================
  // CLOSE MENU WHEN CLICKING OUTSIDE
  // =====================================================

  useEffect(() => {

    const closeMenu = (e) => {

      if (!navRef.current?.contains(e.target)) {

        setOpenMenu(null);

        setMobileMenu(false);

      }

    };

    document.addEventListener(
      "mousedown",
      closeMenu
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        closeMenu
      );
    };

  }, []);


  // =====================================================
  // MOBILE MENU TOGGLE
  // =====================================================

  const toggleMobile = () => {

    setMobileMenu((prev) => !prev);

    setOpenMenu(null);

  };


  return (

    <main
      className="
        min-h-screen
        bg-white
        overflow-x-hidden
      "
    >

      {/* ================================================= */}
      {/* NAVBAR */}
      {/* ================================================= */}

      <nav
        ref={navRef}
        className="
          h-[72px]
          md:h-[84px]

          bg-white
          shadow-md

          flex
          items-center
          justify-between

          px-5
          md:px-12

          relative
          z-50
        "
      >

        {/* LOGO */}

        <img
          src={logo}
          alt="Cling"
          className="
            w-[90px]
            md:w-[105px]

            object-contain

            transition-transform
            hover:scale-105
          "
        />


        {/* ================================================= */}
        {/* DESKTOP NAVIGATION */}
        {/* ================================================= */}

        <div
          className="
            hidden
            md:flex
            items-center
            gap-12
            text-[17px]
            font-medium
          "
        >

          <a
            href="#"
            className="text-blue-600"
          >
            Home
          </a>


          {Object.entries(menuData).map(
            ([name, items]) => (

              <DesktopMenu
                key={name}
                name={name}
                items={items}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
              />

            )
          )}

        </div>


        {/* ================================================= */}
        {/* MOBILE BUTTON */}
        {/* ================================================= */}

        <button
          onClick={toggleMobile}
          className="
            md:hidden
            text-2xl
            p-2
          "
        >

          {mobileMenu ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}

        </button>

      </nav>


      {/* ================================================= */}
      {/* MOBILE NAVIGATION */}
      {/* ================================================= */}

      <div
        className={`
          md:hidden

          fixed
          top-[72px]
          left-0

          w-full

          z-40

          overflow-hidden

          transition-all
          duration-500

          ${
            mobileMenu
              ? "max-h-[700px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >

        <div
          className="
            bg-gradient-to-r
            from-[#9b111e]
            via-[#d71920]
            to-[#ef2027]

            p-4

            shadow-xl
          "
        >

          {/* HOME */}

          <a
            href="#"
            className="
              h-12
              flex
              items-center
              px-4
              mb-1
              text-white
              font-semibold
              hover:bg-white/10
            "
          >

            <FaLaptopCode className="mr-4" />

            Home

          </a>


          {/* MOBILE MENUS */}

          {Object.entries(menuData).map(
            ([name, items]) => (

              <MobileMenu
                key={name}
                name={name}
                items={items}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
              />

            )
          )}

        </div>

      </div>


      {/* ================================================= */}
      {/* TITLE */}
      {/* ================================================= */}

      <section
        className="
          min-h-[145px]

          flex
          items-center
          justify-center

          px-4
          py-8
        "
      >

        <h1
          className="
            text-[26px]
            sm:text-[28px]
            md:text-[30px]

            font-bold
            text-center

            animate-fadeDown
          "
        >

          <span className="text-red-600">
            MAKING YOUR
          </span>

          <span className="text-blue-600 ml-2">
            IDEAS HAPPEN!
          </span>

        </h1>

      </section>


      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section>

        <div
          className="
            flex
            flex-col
            md:flex-row
          "
        >

          {/* LEFT CONTENT */}

          <div
            className="
              w-full
              md:w-[70%]

              min-h-[350px]
              md:min-h-[403px]

              flex
              items-center

              px-7
              sm:px-10
              md:px-[52px]

              py-10

              order-2
              md:order-1

              animate-fadeLeft
            "
            style={{
              background:
                "linear-gradient(105deg,#8e1414,#b81717 35%,#ed171d)",
            }}
          >

            <p
              className="
                max-w-[850px]

                text-white

                text-[15px]
                sm:text-[17px]
                md:text-[20px]

                leading-[1.7]

                font-medium

                text-center
                md:text-left
              "
            >
              We are an end-to-end IT Solutions
              providing major services such as
              website development, mobile
              application development, digital
              marketing, custom web portal, IT
              team for your next idea, ERP
              development, for all your business
              needs.
            </p>

          </div>


          {/* RIGHT IMAGE */}

          <div
            className="
              w-full
              md:w-[30%]

              h-[280px]
              sm:h-[330px]
              md:h-[403px]

              p-3
              md:p-0

              bg-red-600

              overflow-hidden

              order-1
              md:order-2

              animate-fadeRight
            "
          >

            <img
              src={heroImage}
              alt="Team"
              className="
                w-full
                h-full

                object-cover

                rounded-xl
                md:rounded-none

                hover:scale-105

                transition-transform
                duration-700
              "
            />

          </div>

        </div>


        {/* STATS */}

        <Stats />

      </section>


      {/* ================================================= */}
      {/* WHATSAPP */}
      {/* ================================================= */}

      <div
        className="
          fixed

          right-4
          bottom-4

          md:right-5
          md:bottom-5

          w-[60px]
          h-[60px]

          md:w-[80px]
          md:h-[80px]

          bg-white

          rounded-xl

          shadow-lg

          flex
          items-center
          justify-center

          z-50

          hover:scale-110

          transition-transform
          duration-300
        "
      >

        <img
          src={whatsaapImage}
          alt="WhatsApp"
          className="
            w-[35px]
            md:w-[42px]
          "
        />

      </div>


      {/* BOTTOM SPACE */}

      <div
        className="
          h-[120px]
          md:h-[180px]
        "
      />


      {/* ================================================= */}
      {/* ANIMATIONS */}
      {/* ================================================= */}

      <style>{`

        @keyframes fadeDown {

          from {
            opacity: 0;
            transform: translateY(-25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }


        @keyframes fadeLeft {

          from {
            opacity: 0;
            transform: translateX(-40px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }

        }


        @keyframes fadeRight {

          from {
            opacity: 0;
            transform: translateX(40px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }

        }


        @keyframes statsAppear {

          from {
            opacity: 0;
            transform:
              translateY(50px)
              scale(.96);
          }

          to {
            opacity: 1;
            transform:
              translateY(0)
              scale(1);
          }

        }


        @keyframes statAppear {

          from {
            opacity: 0;
            transform:
              translateY(18px)
              scale(.96);
          }

          to {
            opacity: 1;
            transform:
              translateY(0)
              scale(1);
          }

        }


        .animate-fadeDown {
          animation:
            fadeDown
            .8s
            ease-out;
        }


        .animate-fadeLeft {
          animation:
            fadeLeft
            1s
            ease-out;
        }


        .animate-fadeRight {
          animation:
            fadeRight
            1s
            ease-out;
        }


        .stats-card {

          position: relative;

          z-index: 10;

          width: 100%;

          min-height: 185px;

          background: white;

          display: flex;

          flex-wrap: wrap;

          align-items: center;

          justify-content: space-around;

          gap: 40px 10px;

          padding: 32px 20px;

          box-shadow:
            0 8px 25px
            rgba(0,0,0,.1);

          animation:
            statsAppear
            1.1s
            cubic-bezier(.22,1,.36,1)
            .3s
            forwards;

          opacity: 0;

        }


        .stat-item {

          width: 45%;

          text-align: center;

          opacity: 0;

          animation:
            statAppear
            .65s
            cubic-bezier(.22,1,.36,1)
            forwards;

          transition:
            transform .3s;

        }


        .stat-item:hover {

          transform:
            translateY(-8px);

        }


        @media (min-width: 768px) {

          .stats-card {

            position: relative;

            width: 58%;

            margin:
              -32px
              auto
              0;

            border-radius: 8px;

            flex-wrap: nowrap;

          }


          .stat-item {

            width: auto;

            flex: 1;

          }

        }


        @media (prefers-reduced-motion: reduce) {

          *,
          *::before,
          *::after {

            animation: none !important;

            transition: none !important;

          }

        }

      `}</style>

    </main>
  );
};

export default Home;