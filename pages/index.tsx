import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
import { FormattedMessage } from "react-intl";
import { products } from "../assets/json/products"
type ProductProps = {
  products: ProductProps[];
}

export async function getStaticProps() {

  return {
    props: { products },
  };
}

const Home: NextPage<ProductProps> = ({ products }) => {
  const router: NextRouter = useRouter()
  const locale: 'th' | 'en' = router.locale as 'th' | 'en'

  return (
    <>
      <Layout>
        <Head>
          <title>Weedy</title>
        </Head>
        <Header />
        <div className="bg-weed -mt-24 relative z-0 h-[600px] md:h-[1000px]"></div>
        <div className="text-white -mt-0 md:-mt-96 relative flex justify-center md:justify-around">
          <div className="flex flex-col w-max text-center sm:text-left">
            <div className="text-6xl md:text-8xl font-bold -mt-80">
              Don{"'"}t Panic,
            </div>
            <div className="text-6xl md:text-8xl font-bold">
              It{"'"}s Organic.
            </div>
            <div className="text-sm md:text-2xl font-thin mt-4">
              <FormattedMessage
                id="banner_desc"
                values={{
                  br: <br />,
                }}
              />
            </div>
            <Link href={"/shop"}>
              <a>
                <div className="uppercase text-center mt-16">
                  <span className="bg-gradient-to-b from-green-500 to-green-700 p-4 rounded-lg text-2xl shadow-2xl shadow-green-400/50">
                    <FormattedMessage id="makeorder" />
                  </span>
                </div>
              </a>
            </Link>
          </div>
          <div></div>
        </div>
        <Container>
          <div className="text-white relative z-10 flex justify-center mt-10 md:mt-96 flex-col text-center">
            <div className="text-5xl font-bold">
              <FormattedMessage id="featured_products" />
            </div>
            <div className="text-md sm:text-2xl font-thin mt-4">
              <FormattedMessage
                id="featured_products_desc"
                values={{
                  br: <br />,
                }}
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 gap-4">
            {products.map((item: any) => (
              <div
                key={item.id}
                className="border border-slate-800 hover:border-green-500 rounded-xl bg-secondary text-white flex flex-1 flex-col justify-between"
              >
                <div>
                  <Image
                    loader={() => item.image}
                    src={item.image}
                    width={500}
                    height={500}
                    alt={item.name}
                  />
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="text-3xl">{item.name}</div>
                      <div className="font-thin text-lg text-slate-300 mt-4">
                        {item.desc[locale]}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex justify-between font-bold mt-4 p-6">
                    <div>THC {item.thc}</div>
                    <div>CBD {item.cbd}</div>
                  </div>
                  <div className="text-end m-6 text-xl">
                    <FormattedMessage id="price" /> {item.price}/g
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
