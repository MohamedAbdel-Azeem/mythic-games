import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ImageSlider(props) {
    const images = props.images;
    return (
        <Carousel showArrows={true} infiniteLoop={true}>
            {images.map((element) => {
                return (
                    <div key={element.id} className="w-full h-full max-md:px-14">
                        <img src={element.image} className="w-full h-full object-cover max-md:size-44" />
                    </div>
                );
            })}
        </Carousel>
    );
}