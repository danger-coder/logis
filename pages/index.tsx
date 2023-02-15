import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from './components/About'
import Header from './components/Header'
import Category from './components/Category'
import Services from './components/Services'
import CalltoAction from './components/CalltoAction'
import Description from './components/Description'
import Pricing from './components/Pricing'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Category />
      <About />
      <Services />
      <CalltoAction />
      <Description />
      <Pricing />
    </div>
  )
}

export default Home
