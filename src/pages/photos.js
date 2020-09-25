import React from 'react'
import Layout from '../components/layout'
import Banner from '../components/non-front-banner'
import Nav from '../components/nav'


/*Images*/
import Img1 from '../../static/author/1.jpg'
import Img2 from '../../static/author/2.jpg'
import Img3 from '../../static/author/3.jpg'
import Img4 from '../../static/author/4.jpg'
import Img5 from '../../static/author/5.png'
import Img6 from '../../static/author/6.jpg'
import Img7 from '../../static/author/7.jpg'
import Img8 from '../../static/author/8.jpg'
import Img9 from '../../static/author/9.jpg'
import Img10 from '../../static/author/10.jpg'
import Img11 from '../../static/author/11.jpg'
import Img12 from '../../static/author/12.jpg'
import Img13 from '../../static/author/13.jpg'
import Img14 from '../../static/author/13.jpg'

const Photos = (props)=>{
	return(
		<>
         <Layout>
            <Nav pathExt={props.path}/>
         	<Banner   
                spanFirst={``}
                contextHeading={`Photos`}/>
            <span></span>
            <section className="section-photo-grid">
            	<div className="row">
            		<div className="column">
            		  <img src={Img1} alt="auth-images"/>
            		  <img src={Img2} alt="auth-images"/>
            		  <img src={Img3} alt="auth-images"/>
            		  <img src={Img4} alt="auth-images"/>
            		</div>

            		<div className="column">
            		  <img src={Img5} alt="auth-images"/>
            		  <img src={Img6} alt="auth-images"/>
            		  <img src={Img7} alt="auth-images"/>
            		  <img src={Img8} alt="auth-images"/>
            		</div>

            		<div className="column">
            		  <img src={Img9} alt="auth-images"/>
            		  <img src={Img10} alt="auth-images"/>
            		  <img src={Img11} alt="auth-images"/>
            		  <img src={Img12} alt="auth-images"/>
            		</div>
            	</div>
           	</section>

         </Layout>
		</>
	)
}


export default Photos;