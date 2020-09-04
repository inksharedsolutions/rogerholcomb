import React from 'react'
import AuthorImg from '../../static/author/main_author.png'

const Author = () =>{
    return(
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                     <div className="grid-child" id="author-contents">

                        <p>
                          Often, I observe, people do not allow themselves
                          to experience the wholeness of life. So the life
                          experience may have started with me as a small
                          lad, working along with my grandfather,
                          Amos Brady Westfall. As my grandfather worked
                          several jobs, as a school teachwer in one room school,
                          a blacksmith, and also a farmer in Jackson County, West Virginia.
                        </p>

                        <h1 className="author-name-tag">
                            <span>Roger</span>
                            <span>Holcomb</span>
                        </h1>
                        
                        <span className="author-tagline">
                          Author & Writer
                        </span>

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