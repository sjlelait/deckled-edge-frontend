import React from 'react';
import { Link } from 'react-router-dom';
import { TECarousel, TECarouselItem } from "tw-elements-react";


const Carousel = (props) => {
    console.log(props.entry);
    const filteredEntries = props.entry.filter((entry) => entry.public === true || !props.user).slice(0, 3);


    const loaded = () => {
        return (
            <>
                <TECarousel showControls showIndicators ride="carousel" className="bg-white">
                    <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                        <h1 className="text-2xl mt-4">Featured Writing</h1>
                        {filteredEntries.slice(0, 3).map((entry, index) => (
                            <TECarouselItem
                                key={entry._id}
                                itemID={index + 1}
                                className={`relative float-left -mr-[100%] ${index === 0 ? 'block' : 'hidden'
                                    } w-full transition-opacity duration-[1000ms] motion-reduce:transition-none`}
                            >
                                <div key={entry._id} className="flex-shrink-0 w-full">
                                    <div className="flex-row justify-center h-full bg-white p-6 m-6">
                                        <Link to={`/read/${entry._id}`}>
                                            <h2 className="text-xl mb-4">{entry.title}</h2>
                                        </Link>
                                        <p style={{ whiteSpace: "pre-line" }} className="text-gray-500">{entry.text}</p>
                                    </div>
                                </div>
                            </TECarouselItem>
                        ))}
                    </div>
                </TECarousel>
            </>
        );
    };
    const loading = () => {
        return <h1>Loading...</h1>
    };

    return (
        <>
            {props.entry ? loaded() : loading()}
        </>
    );
};

export default Carousel;