'use client'
import Head from "next/head";
import Nav from "@/components/Nav";
import FilterPanel from "@/components/FilterPanel";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import { useEffect, useState } from "react";

export default function Home() {

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function fetchProjects() {
            try {
                const res = await fetch('https://api.github.com/users/ola191/repos');
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await res.json();
                setProjects(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        }
        fetchProjects();
    }, [])
    

    return (
        <>
            <Head>
                <title>Ola Krassowska</title>
                <meta name="description" content="my portfolio." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex w-4/5 mx-auto h-auto relative flex-col">
                <Nav />
                <FilterPanel />
                {loading ? <div>Loading...</div> : 
                (
                    <Projects projects={projects} />
                )}
                <Footer />
            </div>
            </>
    );
}
