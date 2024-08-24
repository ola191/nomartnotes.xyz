'use client'

import Head from "next/head";
import Nav from "@/components/Nav";
import Balls from "@/components/Balls";
import Hero from "@/components/Hero";
import Samples from "@/components/Samples";
import Offer from "@/components/Offer";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function Home() {
    return (
        <>
            <Head>
                <title>Portfolio | Ola</title>
                <meta name="description" content="Hi, I’m Ola, a software developer. I create websites, dsc bots, mobile apps, windows apps, custom scripts, browser extensions and more, explore my work to see how I can help bring your ideas to life. Let’s connect" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageTransition>

            <div className="flex w-4/5 mx-auto h-auto relative flex-col">
                <Balls /> {}
                <Nav />
                <Hero />
                <Samples />
                <Offer />
                <Footer />
            </div>
            </PageTransition>
            </>
    );
}
