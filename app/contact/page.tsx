'use client'

import Head from "next/head";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import PageTransition from "@/components/PageTransition";

export default function Home() {
    return (
        <>
            <Head>
                <title>Ola Krassowska</title>
                <meta name="description" content="my portfolio." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageTransition>
            <div className="flex w-4/5 mx-auto h-auto relative flex-col">
                <Nav />
                <Contact />
                <Footer />
            </div>
            </PageTransition>
            </>
    );
}
