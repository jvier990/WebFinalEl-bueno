/* eslint-disable react/no-unknown-property */

 const Inicio = () => {
  return (
<section class="text-gray-400 bg-gray-900 bg-opacity-60 body-font rounded-lg">
  <div class="container px-5 py-24 mx-auto flex flex-wrap items-center ">
    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 rounded-lg">
      <h1 class="title-font font-medium text-3xl text-white">Ven y observa nuestro extenso catalogo de autmoviles, en la mejor concesionaria del universo</h1>
      <p class="leading-relaxed mt-4">Tenemos desde Tsurus tuneados hasta Teslas)</p>
    </div>
    <div class="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 class="text-white text-lg font-medium title-font mb-5">Ingresa !</h2>

      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-400">E-mail</label>
        <input type="email" id="email" name="email" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="full-name" class="leading-7 text-sm text-gray-400">Contraseña</label>
        <input type="text" id="full-name" name="full-name" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>

      
      <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Entrar</button>
      <p class="text-xs mt-3">(Una vez comprado es responsabilidad totalmente tuya, si el carro termina siendo robado {'<3'}</p>
    </div>
  </div>
</section>



  )
}
export default Inicio 