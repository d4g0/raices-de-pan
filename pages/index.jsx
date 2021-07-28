import Header from "components/Header.jsx";
import Head from "next/head";
import ProductList from '../components/ProductList.jsx'
export default function Home() {
  return (
    <div className='bg-gray-100 pb-10'>
      <Head>
        <title>Raices de pan</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='min-h-screen w-full text-on-surface'>
        <Header/>
        <ProductList/>
      </main>

      <footer className=''></footer>
    </div>
  );
}
