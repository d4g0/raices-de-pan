import { useState } from "react";
import ProductListItem from "./ProductListItem";

export default function ProdcutList() {
  const [products, setProducts] = useState([
    // {
    //   imageSource: "/img/25.jpg",
    //   imageAlt:'',
    //   link: "https://t.me/raices_de_pan/25",
    //   title: "Pan de Coco",
    //   weight: 100,
    //   price: 55,
    //   description: "Este pancito rico esta echo de coco",
    // },
    {
      imageSource: "/img/20.jpg",
      imageAlt:'',
      link: "https://t.me/raices_de_pan/22",
      title: "Galleticas de Mango",
      weight: 100,
      price: 55,
      description: "Ideales para comer a toda hora",
    },

    {
      imageSource: "/img/22.jpg",
      imageAlt:'',
      link: "https://t.me/raices_de_pan/20",
      title: "Galleticas del Golfo Pérsico",
      weight: 100,
      price: 55,
      description: "Ideales para comer a toda hora",
    },

    {
      imageSource: "/img/19.jpg",
      imageAlt:'',
      link: "https://t.me/raices_de_pan/19",
      title: "Pan del Mediterraneo",
      weight: 250,
      price: 75,
      description: "Sabrosos y energeticos para el desayuno",
    },


  ]);

  return (
    <div className='w-full mx-auto max-w-screen-xl px-4 xl:px-0'>
      {/* <h1 className='mt-20 text-5xl mb-8 font-medium text-center'>Ofertas</h1> */}
      {products.length && (
        <ul className='mt-20 space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 '>
          {products.map((product, index) => {
            return <li key={index}>
              <ProductListItem product={product} />
            </li>;
          })}
        </ul>
      )}
    </div>
  );
}
