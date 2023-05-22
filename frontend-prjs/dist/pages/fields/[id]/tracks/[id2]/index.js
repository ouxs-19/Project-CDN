import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import axios from 'axios'
// Components
import Navbar from '@/components/tracks/Navbar'
import Hero from '@/components/singleTrack/Hero'
import ModulesList from '@/components/modules/ModulesList'
import Footer from '@/components/home/Footer'

// Data
import { BASEURL } from '@/shared/baseUrl'

export default function Tracks({ trackProp }) {

  return (
    <>
      <Head>
        <title>Track : {trackProp.title}</title>
        <meta name="description" content={trackProp.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cdn.png" />
      </Head>
      <main className="min-h-screen">
        <Navbar />
        <Hero item={trackProp}/>
        <ModulesList modules={trackProp.modules} />
        <div className='h-12'></div>
        <Footer />
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  const fieldId = context.params.id;
  const trackId = context.params.id2;
  // Fetch the data for the specified user ID using the fieldId and trackId variable

  // const fieldsInfos = FIELDSINFOS;

  // Call an external API endpoint to get posts
  const res = await axios.get(`${BASEURL}/files`);
  const fieldsInfos = res.data;

    if (!fieldsInfos) {
    return {
      redirect: {
        destination: '/fields',
        permanent: false,
        // statusCode: 301
      },
    };
  }

  const field = fieldsInfos.find(fieldv => fieldv.id === fieldId);

  if (!field) {
    return {
      redirect: {
        destination: '/fields',
        permanent: false,
        // statusCode: 301
      },
    };
  }

  const track = field.tracks.find(track => track.id === trackId)

  if (!track) {
    return {
      redirect: {
        destination: '/fields',
        permanent: false,
        // statusCode: 301
      },
    };
  }
  
  return {
    props: { 
      trackProp: track || null
    },
  }
}
