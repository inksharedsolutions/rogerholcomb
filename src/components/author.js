import React from 'react'
import AuthorImg from '../../static/author/main_author.png'

const Author = () =>{
    return(
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                     <div className="grid-child" id="author-contents">
                        <p>
                            I felt the Call in the ministry at a young age of twenty five working with youth, teaching, and my new wife and I conducting children’s church, and attending Bible School. We worked with children until our children were pre-teens. I went into full time pastoring, and continuing the course of study that I needed.
                        </p>
                        <h1 className="author-name-tag">
                            <span>Roger</span>
                            <span>Holcomb</span>
                        </h1>
                        <span className="author-tagline">
                          Author & Writer
                        </span>
                        <div className="dove-container"></div>
                     </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg}/>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;