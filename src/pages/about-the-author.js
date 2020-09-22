import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'

import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/main_author.png'
import AuthSlider from '../components/auth-slider'



const ATB = (props)=>{
	
	return (
		<>
		 	<Layout>
		 		<Nav pathExt={props.path}/>

                <Banner
                    spanFirst={`About The`} 
                    contextHeading={`Author`}/>
                
		 		<div className="container">
				    <section className="body-author-contents columns">
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img 
                                    src={AuthorImg} 
                                    alt="_main_author"/>
                            </div>

                            <div className="heading-quote">
                                <h4>
                                  “To Know God And To Embrace One's Self Is The Most Genuine
                                   Form Of Satisfaction. Overcoming Your Inferiority Lies Behin
                                   Knowing Your Real Identity. Reflect, Get To Know Yourself,
                                   And Be Free To Enjoy Life For What It Is”.
                                </h4>
                                <span className="ata-span-fx">
                                    author quote
                                </span>

                                <div className="container-slider">
                                    <AuthSlider/>
                                </div>
                                
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                                Often, I observe, people do not allow themselves to
                                experience the wholeness of life. So the life experience
                                may have started with me as a small lad, working along
                                with my grandfather, Amos Brady Westfall. As my grandfather
                                worked several jobs, as a school teachwer in one room school,
                                a blacksmith, and also a farmer in Jackson County, West Virginia.
                                Growing up I went to school finished in "1970", then moved to Ohio and worked.
                                Then I met my wife Fraun. We got married and had our first son two years later.
                                We attended an Assembly of God. We then moved to my hometown in West Virginia,
                                I worked in a small church there. I was working to become a minister.
                                We had two other children. Their names is Roger, Shawna, and Brady.
                                They grew up and married and blessed us with nine grandchildren. 
                                We now have seven great grandchildren. In 1990-1995 I pastored a 
                                small independent church. In 1995-2002, I pastored in West Virginia, 
                                and Holstein Conference in Virgina. I'm now retired and resides in Radford,
                                Virginia, with family and friends.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Robert Holcomb</span>
                                </span>
                            </p>
                            
                        </article>
                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;