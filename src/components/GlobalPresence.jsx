import React from "react";

const countries = [
  {
    name: "India",
    code: "in",
  },
  {
    name: "Saudi Arabia",
    code: "sa",
  },
  {
    name: "South Africa",
    code: "za",
  },
  {
    name: "United States",
    code: "us",
  },
  {
    name: "Oman",
    code: "om",
  },
  {
    name: "Dubai (UAE)",
    code: "ae",
  },
  {
    name: "Singapore",
    code: "sg",
  },
  {
    name: "Ireland",
    code: "ie",
  },
  {
    name: "Mauritius",
    code: "mu",
  },
  {
    name: "Australia",
    code: "au",
  },
  {
    name: "United Kingdom",
    code: "gb",
  },
  {
    name: "Spain",
    code: "es",
  },
];

const GlobalPresence = () => {
  return (
    <section className="bg-white">

      {/* ================= HEADING ================= */}

      <div className="text-center py-16 px-4">

        <h2
          className="
            text-[28px]
            sm:text-[32px]
            md:text-[36px]
            font-bold
            text-red-600
          "
        >
          Our Global Presence
        </h2>


        {/* Underline */}

        <div className="flex justify-center items-center mt-3">

          <div className="w-[82px] h-[4px] bg-black relative">

            <span className="absolute left-0 top-0 w-[18px] h-[4px] bg-[#20c9b5]" />

          </div>

        </div>


        <p
          className="
            mt-6
            text-[17px]
            sm:text-[19px]
            md:text-[20px]
            text-gray-800
            font-medium
          "
        >
          Expanding our global footprint across diverse markets and cultures
        </p>

      </div>


      {/* ================= COUNTRIES ================= */}

      <div
        className="
          bg-[#fff0f0]
          px-6
          sm:px-10
          md:px-16
          lg:px-24
          py-10
          md:py-12
        "
      >

        <div
          className="
            max-w-[1250px]
            mx-auto
            flex
            flex-wrap
            justify-between
            gap-y-10
          "
        >

          {countries.map((country) => (

            <div
              key={country.name}
              className="
                w-1/2
                md:w-1/4
                flex
                flex-col
                items-center
                text-center
                group
              "
            >

              {/* FLAG */}

              <div
                className="
                  w-[150px]
                  h-[105px]
                  sm:w-[160px]
                  sm:h-[105px]
                  md:w-[160px]
                  md:h-[105px]
                  overflow-hidden
                  bg-white
                  transition-all
                  duration-300
                  group-hover:-translate-y-2
                  group-hover:shadow-lg
                "
              >

                <img
                  src={`https://flagcdn.com/w320/${country.code}.png`}
                  alt={`${country.name} flag`}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

              </div>


              {/* COUNTRY NAME */}

              <p
                className="
                  mt-2
                  text-[14px]
                  md:text-[15px]
                  font-medium
                  text-gray-800
                "
              >
                {country.name}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default GlobalPresence