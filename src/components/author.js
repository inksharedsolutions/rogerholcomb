import React from 'react'
import AuthorImg from '../../static/author/main_author.png'

const Author = () =>{
    return(
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                     <div className="grid-child" id="author-contents">

                        <p>
                           Kendell Easley served on the faculty of three
                           institutions of Christian higher education,
                           teaching mainly in the area of New Testament
                           studies and New Testament Greek. He was people
                           focused and mentored many students and pastors over
                           a good cup of coffee.
                        </p>

                        <h1 className="author-name-tag">
                            <span>Roger</span>
                            <span>Holcomb</span>
                        </h1>
                        
                        <span className="author-tagline">Author & Writer</span>

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