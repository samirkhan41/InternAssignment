import React from "react";

const OurStory = () => {
  return (
    <section className="bg-white py-12 md:py-16">

      {/* ================= HEADING ================= */}

      <div className="text-center px-5">

        <h2 className="text-[28px] md:text-[34px] font-bold text-red-600">
          Our Story
        </h2>

        {/* Underline */}

        <div className="relative w-[82px] h-[4px] bg-black mx-auto mt-3">
          <span className="absolute left-0 top-0 w-[18px] h-full bg-[#20c9b5]"></span>
        </div>

      </div>


      {/* ================= STORY ================= */}

      <div className="max-w-[1100px] mx-auto px-5 mt-7">

        <p
          className="
            text-center
            text-[16px]
            md:text-[19px]
            leading-[1.7]
            text-gray-900
          "
        >
          We are a company with multifarious IT services like ERPS,
          Websites, App Development, Support, Innovations, Projects,
          Ideas. Innovations At Its best, is what we believe in. We
          understand not only customers well, but also the industry at
          large. We majorly focus to enhance skills and growth of
          individual. Our diverse team of professionals shares a passion
          for online education. We provide consistent and captivating
          learning experience across desktops, tablets and smartphone.
        </p>

      </div>


      {/* ================= VISION + MISSION ================= */}

      <div
        className="
          max-w-[1350px]
          mx-auto
          px-5
          md:px-10
          mt-14

          flex
          flex-col
          md:flex-row

          gap-7
          md:gap-20
        "
      >

        {/* ================= OUR VISION ================= */}

        <div
          className="
            w-full
            md:w-1/2

            min-h-[330px]

            bg-[#ffd1d1]

            rounded-md

            px-6
            md:px-10

            py-10

            flex
            flex-col
            justify-center
          "
        >

          <h3
            className="
              text-center
              text-[26px]
              md:text-[28px]
              font-bold
              text-red-600
              mb-6
            "
          >
            Our Vision
          </h3>

          <p
            className="
              text-center
              text-[15px]
              md:text-[17px]
              leading-[1.65]
              text-gray-900
            "
          >
            At Cling, our goal is to deliver premier web design,
            development, and marketing solutions to our clients,
            fostering their profitable online growth while expanding
            our roster of satisfied clients. We are dedicated to
            enhancing various facets of our business, such as the
            quality of our work, customer service excellence,
            technology integration, dynamic innovation, and steadfast
            commitment, among other key aspects.
          </p>

        </div>


        {/* ================= OUR MISSION ================= */}

        <div
          className="
            w-full
            md:w-1/2

            min-h-[330px]

            bg-[#dce8ff]

            rounded-md

            px-6
            md:px-10

            py-10

            flex
            flex-col
            justify-center
          "
        >

          <h3
            className="
              text-center
              text-[26px]
              md:text-[28px]
              font-bold
              text-blue-600
              mb-6
            "
          >
            Our Mission
          </h3>

          <p
            className="
              text-center
              text-[15px]
              md:text-[17px]
              leading-[1.65]
              text-gray-900
            "
          >
            We recognize the significance of staying at the forefront
            in today's swiftly changing digital environment. That's
            why we consistently allocate resources to enhance our
            personnel, refine our processes, and embrace cutting-edge
            technologies. Our commitment is to deliver top-notch
            services to our clients. We take pride in our agility to
            respond to shifting market trends and evolving customer
            needs, establishing ourselves as a trustworthy ally for
            businesses aiming to outpace the competition.
          </p>

        </div>

      </div>

    </section>
  );
};

export default OurStory;