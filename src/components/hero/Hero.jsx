import React from 'react'
import seedling from '../../assets/seedling.png'
import principal from '../../assets/principal.png'
// 
import mint from '../../assets/mobi/mint.png'
import straw from '../../assets/mobi/straw.png'
import blue from '../../assets/mobi/blue.png'
import lemon from '../../assets/mobi/lemon.png'
import frag from '../../assets/mobi/frag.png'
import lavanda from '../../assets/mobi/lavanda.png'
import brown from '../../assets/mobi/brown.png'
import cherry from '../../assets/mobi/cherry.png'
// 
import candlle from '../../assets/candlle.png'
// 
import stars from '../../assets/stars.png'
import mart from '../../assets/mart.png'
import luisa from '../../assets/luisa.png'
import eduardo from '../../assets/eduardo.png'

const Hero = () => {
  return (
     <div>
      <section class="relative flex justify-center overflow-hidden">
      <figure class="z-[-2]">
         <picture>
            <source
            media="(max-width:468px)"
            srcset={principal}
            />
            <img
            src={principal}
            alt="Banner candleaf"
            class="w-full"
            />
         </picture>
      </figure>
      <article class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-md bg-gray-100/70 rounded-lg p-8 md:p-16">
         <h3 class="text-2xl md:text-4xl font-medium text-center mb-4 flex flex-col items-center">
            <img
            src={seedling}
            alt="emoji seedling"
            class="mb-2 w-8 h-8"
            />
            The nature candle
         </h3>
         <p class="text-base md:text-lg text-gray-700 text-center mb-6">
            All handmade with natural soy wax, Candleaf is a companion for all <br /> your
            pleasure moments.
         </p>
         <p class="flex justify-center">
            <a
            href="#products"
            class="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg transition"
            >
            Discover our collection
            </a>
         </p>
      </article>
      </section>

{/*  */}

    <section id="products" class="container mb-[120px]">
  <section class="title-section mb-8 flex justify-center items-center text-center mt-20">
  <div>
    <h2 class="title text-3xl font-semibold mb-2">Products</h2>
    <p class="text-lg text-gray-700">Order it for you or for your beloved ones</p>
  </div>
</section>

  
  <section class="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

    <article class="card hover:shadow-xl hover:transform hover:translate-y-1 transition-all duration-300">
      <a href="./product.html">
        <figure>
          <picture>
            <source media="(max-width:768px)" srcset="./img/fotos/products/spiced-mint-mobile.png" />
            <img src={mint} alt="product spiced-mint" class="w-full"/>
          </picture>
        </figure>
        <article class="p-4">
          <h2 class="text-xl font-semibold text-gray-900">Spiced Mint</h2> 
          <p class="text-lg text-gray-700">$9.99</p>
        </article>
      </a>
    </article>

    <article class="card hover:shadow-xl hover:transform hover:translate-y-1 transition-all duration-300">
      <a href="./product.html">
        <figure>
          <picture>
            <source media="(max-width:768px)" srcset="./img/fotos/products/sweet-straweberry-mobile.png" />
            <img src={straw} alt="product sweet-straweberry" class="w-full"/>
          </picture>
        </figure>
        <article class="p-4">
          <h2 class="text-xl font-semibold text-gray-900">Sweet Strawberry</h2> 
          <p class="text-lg text-gray-700">$9.99</p>
        </article>
      </a>
    </article>

    <article class="card hover:shadow-xl hover:transform hover:translate-y-1 transition-all duration-300">
      <a href="./product.html">
        <figure>
          <picture>
            <source media="(max-width:768px)" srcset="./img/fotos/products/cool-blueberries-mobile.png" />
            <img src={blue} alt="product cool-blueberries" class="w-full"/>
          </picture>
        </figure>
        <article class="p-4">
          <h2 class="text-xl font-semibold text-gray-900">Cool Blueberries</h2> 
          <p class="text-lg text-gray-700">$9.99</p>
        </article>
      </a>
    </article>

    <article class="card hover:shadow-xl hover:transform hover:translate-y-1 transition-all duration-300">
      <a href="./product.html">
        <figure>
          <picture>
            <source media="(max-width:768px)" srcset="./img/fotos/products/juicy-lemon-mobile.png" />
            <img src={lemon} alt="product juicy-lemon" class="w-full"/>
          </picture>
        </figure>
        <article class="p-4">
          <h2 class="text-xl font-semibold text-gray-900">Juicy Lemon</h2> 
          <p class="text-lg text-gray-700">$9.99</p>
        </article>
      </a>
    </article>

    <article class="card hover:shadow-xl hover:transform hover:translate-y-1 transition-all duration-300">
      <a href="./product.html">
        <figure>
          <picture>
            <source media="(max-width:768px)" srcset="./img/fotos/products/product-name-mobile.png" />
            <img src={brown} alt="product product-name" class="w-full"/>
          </picture>
        </figure>
        <article class="p-4">
          <h2 class="text-xl font-semibold text-gray-900">Product name</h2> 
          <p class="text-lg text-gray-700">$9.99</p>
        </article>
      </a>
    </article>

    <article class="card hover:shadow-xl hover:transform hover:translate-y-1 transition-all duration-300">
      <a href="./product.html">
        <figure>
          <picture>
            <source media="(max-width:768px)" srcset="./img/fotos/products/fragrant-cinnamon-mobile.png" />
            <img src={frag} alt="product fragrant-cinnamon" class="w-full"/>
          </picture>
        </figure>
        <article class="p-4">
          <h2 class="text-xl font-semibold text-gray-900">Fragrant Cinnamon</h2> 
          <p class="text-lg text-gray-700">$9.99</p>
        </article>
      </a>
    </article>

    <article class="card hover:shadow-xl hover:transform hover:translate-y-1 transition-all duration-300">
      <a href="./product.html">
        <figure>
          <picture>
            <source media="(max-width:768px)" srcset="./img/fotos/products/summer-cherries-mobile.png" />
            <img src={cherry} alt="product summer-cherries" class="w-full"/>
          </picture>
        </figure>
        <article class="p-4">
          <h2 class="text-xl font-semibold text-gray-900">Summer Cherries</h2> 
          <p class="text-lg text-gray-700">$9.99</p>
        </article>
      </a>
    </article>

    <article class="card hover:shadow-xl hover:transform hover:translate-y-1 transition-all duration-300">
      <a href="./product.html">
        <figure>
          <picture>
            <source media="(max-width:768px)" srcset="./img/fotos/products/clean-lavander-mobile.png" />
            <img src={lavanda} alt="product clean-lavander" class="w-full"/>
          </picture>
        </figure>
        <article class="p-4">
          <h2 class="text-xl font-semibold text-gray-900">Clean Lavander</h2> 
          <p class="text-lg text-gray-700">$9.99</p>
        </article>
      </a>
    </article>

  </section>

  <div id="see-more-product" class="flex justify-center mt-8">
    <button class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-8 rounded-lg transition">
      See more
    </button>
  </div>
</section>

{/*  */}


<section id="benefits" class="bg-[#f7f8fa] py-[133px] pb-[234px]">
  <section class="container">
    <article class="text-center">
    <h2 class="text-[#1d252c] font-medium text-[40px] leading-[47px] tracking-[-0.9px] text-left mb-8">Clean and <br /> fragrant soy wax</h2>
<p class="text-[#56b280] text-[23px] leading-[23px] my-[15px] text-left mb-10">Made for your home and for your wellness</p>
    </article>
    <div class="flex relative">
      <article class="mr-[30px]">
        <ul class="ml-[20px] mb-[68px]">
          <li class="mb-[8px] leading-[29px] list-inside list-disc">
            <strong class="font-bold">Eco-sustainable:</strong> All recyclable materials, 0% CO2 emissions
          </li>
          <li class="mb-[8px] leading-[29px] list-inside list-disc">
            <strong class="font-bold">Hyphoallergenic:</strong> 100% natural, human-friendly ingredients
          </li>
          <li class="mb-[8px] leading-[29px] list-inside list-disc">
            <strong class="font-bold">Handmade:</strong> All candles are craftly made with love.
          </li>
          <li class="mb-[8px] leading-[29px] list-inside list-disc">
            <strong class="font-bold">Long burning:</strong> No more waste. Created to last long.
          </li>
        </ul>
        <p><a class="bg-green-500 text-white py-2 px-8 rounded-lg" href="#">Learn more</a></p>
      </article>
      <figure class="absolute top-[-150px] right-0 mt-[30px] shadow-[0px_10px_94px_rgba(123,_123,_123,_0.35)]">
        <picture>
          <source media="(max-width: 668px)" srcset="./img/fotos/cosmeticos-candleaf-mobile.png" />
          <img src={candlle} alt="cosmeticos candleaf" />
        </picture>
      </figure>
    </div>
  </section>
</section>

{/*  */}



<section class="section-testimoials">
    <section class="container">
       <section class="title-section mb-8 flex justify-center items-center text-center mt-20">
    <div class="text-center">
        <h2 class="text-[40px] font-medium text-[#1d252c]">Testimonials</h2>
        <p class="text-[23px] text-[#56b280] my-[15px]">Some quotes from our happy customers</p>
    </div>
    </section>

        <section class="wrapper">
            <section class="testimoials flex gap-[31px] justify-between my-[27px] mb-[90px]">
                <section class="testimoial bg-white p-[20px] text-center rounded-[6px] shadow-[0px_4px_24px_rgba(139,167,178,0.16)]">
                    <figure class="my-[33px] mb-[14px]">
                        <img src={luisa} alt="profile picture luisa" />
                    </figure>
                    <img src={stars} alt="icones de estrelas" />
                    <article class="description text-[22px] font-medium leading-[28px] text-[#1d252c] my-[16px] px-0 py-[22px]">
                        <p>“I love it! No more air fresheners”<span class="block text-[18px] font-normal text-[#7c8087] mt-[6px]">Luisa</span></p>
                    </article>
                </section>

                <section class="testimoial bg-white p-[20px] text-center rounded-[6px] shadow-[0px_4px_24px_rgba(139,167,178,0.16)]">
                    <figure class="my-[33px] mb-[14px]">
                        <img src={eduardo} alt="profile picture eduardo" />
                    </figure>
                    <img src={stars} alt="stars" />
                    <article class="description text-[22px] font-medium leading-[28px] text-[#1d252c] my-[16px] px-0 py-[22px]">
                        <p>“Raccomended for everyone”<span class="block text-[18px] font-normal text-[#7c8087] mt-[6px]">Eduardo</span></p>
                    </article>
                </section>

                <section class="testimoial bg-white p-[20px] text-center rounded-[6px] shadow-[0px_4px_24px_rgba(139,167,178,0.16)]">
                    <figure class="my-[33px] mb-[14px]">
                        <img src={mart} alt="stars" />
                    </figure>
                    <img src={stars} alt="stars" />
                    <article class="description text-[22px] font-medium leading-[28px] text-[#1d252c] my-[16px] px-0 py-[22px]">
                        <p>“Looks very natural, the smell is awesome”<span class="block text-[18px] font-normal text-[#7c8087] mt-[6px]">Mart</span></p>
                    </article>
                </section>
            </section>
        </section>
    </section>
</section>

{/*  */}


<section id="popular" class="section-popular">
    <section class="container mx-auto mb-12">
        <section class="title-section text-center my-8">
            <h2 class="text-4xl font-medium text-gray-800">Popular</h2>
            <p class="text-lg text-green-600">Our top selling product that you may like</p>
        </section>
        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <section class="card border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
                <a href="./product.html">
                    <figure class="overflow-hidden">
                        <picture>
                            <source media="(max-width:768px)" srcset="./img/fotos/products/spiced-mint-mobile.png" />
                            <img src={mint} alt="product spiced mint" class="w-full" />
                        </picture>
                    </figure>
                    <article class="p-4 text-center">
                        <h2 class="text-xl font-semibold">Spiced Mint</h2>
                        <p class="text-lg text-gray-600">9.99$</p>
                    </article>
                </a>
            </section>
            <section class="card border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
                <a href="./product.html">
                    <figure class="overflow-hidden">
                        <picture>
                            <source media="(max-width:768px)" srcset="./img/fotos/products/sweet-straweberry-mobile.png" />
                            <img src={straw} alt="product sweet strawberry" class="w-full" />
                        </picture>
                    </figure>
                    <article class="p-4 text-center">
                        <h2 class="text-xl font-semibold">Sweet Strawberry</h2>
                        <p class="text-lg text-gray-600">9.99$</p>
                    </article>
                </a>
            </section>
            <section class="card border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
                <a href="./product.html">
                    <figure class="overflow-hidden">
                        <picture>
                            <source media="(max-width:768px)" srcset="./img/fotos/products/cool-blueberries-mobile.png" />
                            <img src={blue} alt="product cool blueberries" class="w-full" />
                        </picture>
                    </figure>
                    <article class="p-4 text-center">
                        <h2 class="text-xl font-semibold">Cool Blueberries</h2>
                        <p class="text-lg text-gray-600">9.99$</p>
                    </article>
                </a>
            </section>
            <section class="card border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
                <a href="./product.html">
                    <figure class="overflow-hidden">
                        <picture>
                            <source media="(max-width:768px)" srcset="./img/fotos/products/juicy-lemon-mobile.png" />
                            <img src={lemon} alt="product juicy lemon" class="w-full" />
                        </picture>
                    </figure>
                    <article class="p-4 text-center">
                        <h2 class="text-xl font-semibold">Juicy Lemon</h2>
                        <p class="text-lg text-gray-600">9.99$</p>
                    </article>
                </a>
            </section>
        </section>
    </section>
</section>





     </div>
  )
}

export default Hero
