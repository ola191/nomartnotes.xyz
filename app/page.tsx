'use client'

import Head from "next/head";
import Nav from "@/components/Nav";
import Balls from "@/components/Balls";
import Hero from "@/components/Hero";

export default function Home() {
    return (
        <>
            <Head>
                <title>Ola Krassowska</title>
                <meta name="description" content="my portfolio." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex w-4/5 mx-auto h-auto relative flex-col">
              <Balls /> {}
              <Nav />
              <Hero />
            </div>
            </>
    );
}
