import React from "react";
import Image from "next/image";

// Lista obrazków
const images = [
    "/paintings/aa.png",
    "/paintings/ab.png",
    "/paintings/ac.png",
    "/paintings/ad.png",
    "/paintings/ae.png",
    "/paintings/af.png",
    "/paintings/ag.png",
    "/paintings/ah.png",
    "/paintings/ai.png",
    "/paintings/aj.png",
    "/paintings/ak.png",
    "/paintings/al.png",
    "/paintings/am.png",
    "/paintings/an.png",
    "/paintings/ao.png",
    "/paintings/ap.png",
    "/paintings/aq.png",
    "/paintings/ar.png",
];

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
        year: 'numeric', month: 'long', day: 'numeric'
    }) + ', ' + date.toLocaleTimeString('en-GB', {
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
    });
}

// Komponent Projects
export default function Projects({ projects }) {
    function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    const projectCards = projects.map((project, index) => {
        const description = project.description || "";
        const [metadata, ...descriptionParts] = description.split(" - ");
        const mainDescription = descriptionParts.join(" - ");
        let sidebarColor = "#ffffff";
        if (metadata.includes("🟩")) {
            sidebarColor = "#22C55E";
        } else if (metadata.includes("🟥")) {
            sidebarColor = "#F43F5E";
        } else if (metadata.includes("🟨")) {
            sidebarColor = "#FBBF24";
        } else if (metadata.includes("🟧")) {
            sidebarColor = "#FF6723";
        } else if (metadata.includes("🟪")) {
            sidebarColor = "#8B5CF6";
        } 

        return (
            <div key={`project-${index}`} className="paper w-[350px] h-[450px] bg-borderColor rounded-md flex flex-col p-4">
                <div style={{ backgroundColor: sidebarColor }} className="absolute top-0 left-0 w-1 h-full"></div>

                <p className="font-semibold text-lg text-gray-800 p-2">{project.name}</p>
                <p className="text-gray-600 p-2 -translate-x-2">{metadata || "No metadata"}</p>
                <p className="text-gray-600 p-2">{mainDescription || "No description"}</p>
                <p className="text-gray-600 p-2">Created: {formatDate(project.created_at)}</p>
                <p className="text-gray-600 p-2">Updated: {formatDate(project.updated_at)}</p>
                <p className="text-gray-600 p-2">{project.language}</p>
                <p className="text-gray-600 p-2">
                    {project.topics && project.topics.length > 0 ? (
                        project.topics.map((topic, topicIndex) => (
                            <span key={topicIndex} className="text-gray-600 p-2">
                                {topic}
                            </span>
                        ))
                    ) : (
                        <span className="text-gray-600 p-2">No topics available</span>
                    )}
                </p>
            </div>
        );
    });

    // Tworzenie kart z obrazkami
    const imageCards = images.map((image, index) => (
        <div key={`image-${index}`} className="paper w-[350px] h-[450px] bg-borderColor rounded-md flex items-center justify-center">
            <Image
                src={image}
                alt="Random Image"
                layout="fill"
                objectFit="contain"
                style={{ transform: 'scale(0.9)' }}
            />
        </div>
    ));

    const shuffledProjects = shuffleArray(projectCards);
    const shuffledImages = shuffleArray(imageCards);

    const combinedCards = [];
    while (shuffledProjects.length || shuffledImages.length) {
        if (shuffledProjects.length) {
            combinedCards.push(shuffledProjects.shift());
        }
        if (shuffledImages.length) {
            combinedCards.push(shuffledImages.shift());
        }
    }

    return (
        <section className="grid grid-cols-3 gap-8 p-8 border-borderColor border-4 rounded-md">
            {combinedCards}
        </section>
    );
}
