const clients = import.meta.glob(
  "../assets/client/*.webp",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const Clients = () => {
  return (
    <section className="w-full bg-[#fff0f0] py-16 px-5">

      {/* Heading */}
      <div className="text-center mb-12">

        <p className="text-red-600 font-semibold text-lg mb-2">
          Our Clients
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Trusted By Leading Brands
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          We are proud to work with businesses across different industries
          and help them achieve their digital goals.
        </p>

      </div>

      {/* Clients */}
      <div className="max-w-6xl mx-auto flex flex-wrap gap-5">

        {/* Client 1 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/1.webp"]}
            alt="Client 1"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 2 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/2.webp"]}
            alt="Client 2"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 3 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/3.webp"]}
            alt="Client 3"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 4 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/4.webp"]}
            alt="Client 4"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 5 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/5.webp"]}
            alt="Client 5"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 6 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/6.webp"]}
            alt="Client 6"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 7 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/7.webp"]}
            alt="Client 7"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 8 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/8.webp"]}
            alt="Client 8"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 9 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/9.webp"]}
            alt="Client 9"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 10 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/10.webp"]}
            alt="Client 10"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 11 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/11.webp"]}
            alt="Client 11"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 12 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/12.webp"]}
            alt="Client 12"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 13 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/13.webp"]}
            alt="Client 13"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 14 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/14.webp"]}
            alt="Client 14"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 15 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/15.webp"]}
            alt="Client 15"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 16 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/16.webp"]}
            alt="Client 16"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 17 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/17.webp"]}
            alt="Client 17"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 18 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/18.webp"]}
            alt="Client 18"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 19 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/39.webp"]}
            alt="Client 19"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 20 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/40.webp"]}
            alt="Client 20"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 21 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/21.webp"]}
            alt="Client 21"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 22 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/22.webp"]}
            alt="Client 22"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 23 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/23.webp"]}
            alt="Client 23"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 24 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/24.webp"]}
            alt="Client 24"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 25 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/25.webp"]}
            alt="Client 25"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 26 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/26.webp"]}
            alt="Client 26"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 27 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/27.webp"]}
            alt="Client 27"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 28 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/28.webp"]}
            alt="Client 28"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 29 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/29.webp"]}
            alt="Client 29"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 30 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/30.webp"]}
            alt="Client 30"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 31 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/31.webp"]}
            alt="Client 31"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 32 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/32.webp"]}
            alt="Client 32"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 33 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/33.webp"]}
            alt="Client 33"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 34 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/34.webp"]}
            alt="Client 34"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 35 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/35.webp"]}
            alt="Client 35"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 36 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/36.webp"]}
            alt="Client 36"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 37 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/37.webp"]}
            alt="Client 37"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Client 38 */}
        <div className="w-[calc(50%_-_10px)] md:w-[23%] h-[125px] bg-white rounded-lg shadow-md flex items-center justify-center p-5">
          <img
            src={clients["../assets/client/38.webp"]}
            alt="Client 38"
            className="max-w-full max-h-full object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Clients;