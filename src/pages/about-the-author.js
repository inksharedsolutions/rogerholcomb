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
                                I felt the Call in the ministry at a young age of
                                twenty five working with youth, teaching, and my
                                new wife and I conducting children’s church, and 
                                attending Bible School. We worked with children
                                until our children were pre-teens. I went into full
                                time pastoring, and continuing the course of study
                                that I needed. Years had past by making friends, and
                                working with all ages.seeing hundreds, and thousands
                                of people come to Christ in their lives. Making Disciples
                                for Christ is my passion, seeing them grow Spiritual,
                                and understand what it means to have the love of God.
                                My wife and I live in Fairlawn Virginia where I am spending
                                my retirement, and writing books.    
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