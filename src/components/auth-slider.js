import React, {useState, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Img1 from '../../static/author/1.jpg'
import Img2 from '../../static/author/2.jpg'
import Img3 from '../../static/author/3.jpg'
import Img4 from '../../static/author/4.jpg'
import Img6 from '../../static/author/6.jpg'
import Img7 from '../../static/author/7.jpg'

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