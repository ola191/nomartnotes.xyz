import React from "react";

function formatDate(dateString) {
    const date = new Date(dateString);

    const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
    const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };

    const formattedDate = date.toLocaleDateString('en-GB', optionsDate);
    const formattedTime = date.toLocaleTimeString('en-GB', optionsTime);

    return `${formattedDate}, ${formattedTime}`;
}


export default function Projects({ projects }) {
    return (
        <section className="flex w-full flex-wrap gap-y-8 p-8 border-borderColor border-4 rounded-md flex-row justify-between z-10">
            {projects.map((project, index) => {
                const descriptionIsEmpty = project.description === null;
                const description = project.description || "";
                
                const [metadata, ...descriptionParts] = description.split(" - ");
                const mainDescription = descriptionParts.join(" - ");
                
                return (
                    <div key={index} className={`paper w-[350px] h-[450px] bg-borderColor rounded-md flex flex-col p-4 ${descriptionIsEmpty ? "hidden" : ""}`}>
                        <p className="font-semibold text-lg text-gray-800 p-2">{project.name}</p>
                        <p className="text-gray-600 p-2 -translate-x-2">{metadata}</p>
                        <p className="text-gray-600 p-2">{mainDescription}</p>
                        <p className="text-gray-600 p-2">Created: {formatDate(project.created_at)}</p>
                        <p className="text-gray-600 p-2">Updated: {formatDate(project.updated_at)}</p>
                        <p className="text-gray-600 p-2">{project.language}</p>
                        <p key={index} className="text-gray-600 p-2">
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
            })}
        </section>
    );
}