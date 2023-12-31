/* eslint-disable react/no-unknown-property */
const Autos = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              Bienvenido mira nuestro catalogo de autos:
            </h1>
            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-white">
            Tenemos de todos precios sabores y colores :)
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="https://i.pinimg.com/originals/10/b2/b2/10b2b242eb6f2ee2bcb50fd887a93e81.jpg"
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                Poderosisimo Tsuru tuneado
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                En $150'000.00
              </h2>
              <p class="leading-relaxed text-base">
                Solo le hace falta el cambio de aceite maestro
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="https://japantuningsudamerica.com/wp-content/uploads/2017/12/WV-01.jpg"
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                Increible bochito
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Te lo regalamos, favor de comunicarse al (686) 335 4028
              </h2>
              <p class="leading-relaxed text-base">(No sirve)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Autos;
