import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";
import Image from "next/image";

export async function getStaticProps({ locale }) {
  const res = await fetch(`http://localhost:3000/api/products?locale=${locale}`);
  const products = await res.json();

  return {
    props: { products },
  };
}

const Home: NextPage = ({ products }) => {

  return (
    <>
      <Layout>
        <Head>
          <title>Weedy</title>
        </Head>
        <Header />
        <div className="bg-weed -mt-24 relative z-0 h-[600px] md:h-[1200px]"></div>
        <div className="text-white -mt-0 md:-mt-96 relative flex justify-center md:justify-around">
          <div className="flex flex-col w-max text-center sm:text-left">
            <div className="text-6xl md:text-8xl font-bold -mt-80">Don{"'"}t Panic,</div>
            <div className="text-6xl md:text-8xl font-bold">It{"'"}s Organic.</div>
            <div className="text-sm md:text-2xl font-thin mt-4">
              High qualiuty medical and recreational cannabis with
            </div>
            <div className="text-sm md:text-2xl font-thin">
              fast and discreet delivery anywhere in the States
            </div>
            <Link href={"/shop"}>
              <a>
                <div className="uppercase text-center mt-16">
                  <span className="bg-gradient-to-b from-green-500 to-green-700 p-4 rounded-lg text-2xl shadow-2xl shadow-green-400/50">
                    Make order
                  </span>
                </div>
              </a>
            </Link>
          </div>
          <div></div>
        </div>
        <Container>
          <div className="text-white relative z-10 flex justify-center mt-10 md:mt-96 flex-col text-center">
            <div className="text-5xl font-bold">Featured products</div>
            <div className="text-md sm:text-2xl font-thin mt-4">
              Choose your favorite strains. Prices will be
            </div>
            <div className="text-md sm:text-2xl font-thin">calculated upon checkout.</div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 gap-4">
            {products.map((item: any) => (
              <div
                key={item.id}
                className="border border-slate-800 hover:border-green-500 rounded-xl bg-secondary text-white"
              >
                <Image
                  loader={() => item.image}
                  src={item.image}
                  width={500}
                  height={500}
                  alt={item.name}
                />
                <div className="p-6">
                  <div className="flex justify-between flex-col">
                    <div>
                      <div className="text-3xl">{item.name}</div>
                      <div className="font-thin text-lg text-slate-300 mt-4">
                        {item.desc}
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between font-bold mt-4">
                        <div>THC {item.thc}</div>
                        <div>CBD {item.cbd}</div>
                      </div>
                      <div className="text-end mt-4 text-xl">
                        {item.price}/g
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
