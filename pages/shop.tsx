import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'

const Shop: NextPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Gravity Store</title>
        </Head>
        <Header/>
        <Container>
         Shop
        </Container>
      </Layout>
    </>
  )
}

export default Shop
