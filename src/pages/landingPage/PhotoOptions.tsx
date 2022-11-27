import Image from 'next/image';
import React from 'react';

const restaurants = [
  {
    id: 1,
    name: `McDonalds`,
    href: `#`,
    imageSrc: `https://images.unsplash.com/photo-1552895638-f7fe08d2f7d5?ixlib=rb-1.2.
    1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80`,
    imageAlt: `McDonalds Burger`,
  },
  {
    id: 2,
    name: `Rosas Diner`,
    href: `#`,
    imageSrc: `https://images.unsplash.com/photo-1502301103665-0b95cc738daf?ixlib=rb-1.2
    .1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80`,
    imageAlt: `Olive drab green insulated bottle with flared screw lid and flat top.`,
  },
  {
    id: 3,
    name: `First Wok`,
    href: `#`,
    imageSrc: `https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-1.2.1&ixid=
    MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`,
    imageAlt: `Person using a pen to cross a task off a productivity paper card.`,
  },
  {
    id: 4,
    name: `The Experience`,
    href: `#`,
    imageSrc: `https://images.unsplash.com/photo-1529543544282-ea669407fca3?ixlib=rb-1.2.1&ixid=
    MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
    imageAlt: `Hand holding black machined steel mechanical pencil with brass tip and top.`,
  },
  // More products...
];

const PhotoOptions: React.FC = () =>
  <div className="bg-white">
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Featured <span className="text-[#EE7E0E]">Restaurants</span></h2>

      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {restaurants.map((product) =>
          <div key={product.id} className="group relative">
            <div className="w-full min-h-80 bg-[#f8cca1] hover:drop-shadow-xl
              hover:translate-y-[-3px] hover:transition-all aspect-w-1 aspect-h-1
              rounded-md overflow-hidden lg:h-80 lg:aspect-none">
              <Image
                width={500}
                height={500}
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-4 flex justify-center items-center">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a className="font-bold text-lg" href={product.href}>
                    <span aria-hidden="true" className="text-center  inset-0" />
                    {product.name}
                  </a>
                </h3>
              </div>
            </div>
          </div>)}
      </div>
    </div>
  </div>;
export default PhotoOptions;
