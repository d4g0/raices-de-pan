/* eslint-disable @next/next/no-img-element */
import useBobyOverflow from "composables/useBodyOverflow.js";

export default function ProductListItem({ product }) {
  return (
    <div className='border-gray-200 border w-full max-w-md mx-auto rounded-xl overflow-hidden bg-white p-3 shadow-sm'>
      <div className='h-80 w-full bg-indigo-500 relative rounded-xl overflow-hidden shadow-md'>
        <img
          src={product.imageSource}
          alt={product.imageAlt}
          className='w-full h-full absolute top-0 left-0 object-cover'
          loading='lazy'
        />
      </div>
      <div className='pl-2 pr-4 mt-6'>
        <div className=' flex items-baseline justify-between '>
          <h2 className='text-xl font-medium'>{product.title}</h2>
          <p className='font-medium text-sky-700'>$ {product.price}</p>
        </div>
        <div className='mt-2 space-y-1'>
          <p className='text-sm font-medium opacity-60'>{product.weight} g</p>
          <p>{product.description}</p>
        </div>
      </div>
      <div className='w-full mt-8 px-2'>
        <a
          href={product.link}
          className='block w-full font-medium rounded-lg p-2 text-center bg-sky-100 hover:bg-sky-200 text-sky-800  hover:text-sky-900 transition-all duration-200'
        >
          Encargar en Telegram
        </a>
      </div>
    </div>
  );
}
