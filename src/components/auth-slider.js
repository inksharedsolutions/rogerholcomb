import React, {useState, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AuthSlider = () =>{

	const [mobState, __functState] = useState(false);


	useEffect(() => {
        
        window.addEventListener("resize", ()=>{ 
            __functState(window.innerWidth <= 760);
        });

      }, [mobState]); 


     var settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: (mobState) ? 1 : 6,
        slidesToScroll: 1,
    };

  
	return(
		<>
			<Slider {...settings}>

		
			</Slider>
		</>
	)
}

export default AuthSlider;