const CardArtikel = () => {
  return (
    <>
      <div className="md:p-8 p-2 bg-white">
        <img
          className="rounded-lg w-full"
          src="https://dummyimage.com/200x200/000/fff&text=gambar"
        />

        <a
          class="px-2 py-1 bg-blue-600 text-gray-100 font-bold rounded hover:bg-gray-500"
          href="#"
        >
          Announcement
        </a>

        <h1 className="font-semibold text-gray-900 leading-none text-xl mt-1">
          Judul e disini
        </h1>
        <div className="max-w-full">
          <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
            Lorem ipsum dolor sit amet met amet...
          </p>
        </div>

        <a
          class="text-indigo-500 inline-flex text-right items-center md:mb-2 lg:mb-0"
          href="#"
        >
          Selengkapnya <i className="fas fa-arrow-right"></i>
        </a>

        <div className="flex items-center space-x-2 mt-5">
          <img
            className="w-10 h-10 object-cover object-center rounded-full"
            src="https://randomuser.me/api/portraits/men/64.jpg"
            alt="random user"
          />

          <div>
            <p className="text-gray-900 text-left font-semibold">Uwong</p>
            <p className="text-gray-500 font-semibold text-sm">
              1 May 2021 · 6 min read
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardArtikel;
