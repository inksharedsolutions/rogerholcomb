import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/Book_Cover.png'
import Book2 from '../../static/books/Book_Cover_02.png'
import Book3 from '../../static/books/Book_Cover_03.png'

const ATB = (props)=>{

    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'roger-holcomb',
	  config: { identifier:  12, slug}
    }

	return (
		<>
		 	<Layout>
		 		<Nav pathExt={props.path}/>
                 
		 		<Banner
                spanFirst={`About The`}
                contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`Inner Reflection`,
                                    spanFirst:``,
                                    imgSrc: Book1,
                                    id:'',
                                    content:
                                    `
                                        <p>
                                            Stepping into personal insights and stories with reflection of the past. Read the stories and come to better understanding of human condition. What it means to be a christian and of life itself. Expressing ideas, hurts, and pain with frustrations. As a person share themselves their dreams, and hopes revealed and problems are uncovered.
                                        </p> 

                                        <p>
                                            As conversation in its own way. Brings healing process to life. The nature of each person is a gift that makes for meaning and joy including the world sounds. The song by “Blood Sweat and Tears, title “What Goes Up Must Come Down.” Show the colors of your mind.”
                                        </p>

                                        <p>
                                            By the sounds of nature. Perhaps too many listen to both and hear only silence or noise. I’ve discovered that God’s graciousness and generosity each day. We can be rich in that surrounds you. As this book touches the hearts of those that discover the “Interreflection” of the hearts.
                                        </p>
                                    `,

                                    ebooks:{
                                        amazon:'https://www.amazon.com/Inner-Reflection-Roger-Holcomb-ebook/dp/B07HMJGTDK/',
                                        stratton:'https://stratton-press.com/books/inner-reflection/',
                                        barnes:'https://www.barnesandnoble.com/w/innerreflection-roger-k-holcomb/1120052268?ean=9781643451855', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Inner-Reflection-Roger-Holcomb/dp/1643451480/',
                                        barnes:'https://www.barnesandnoble.com/w/innerreflection-roger-k-holcomb/1120052268',
                                        booksamillion:'https://www.booksamillion.com/p/Inner-Reflection/Roger-Holcomb/9781643451480',
                                    }
                                }} 
                            />

                            <BookInfo
                                data={{
                                    title:`Being Set Free`,
                                    spanFirst:`Pursue Purify Living`,
                                    imgSrc: Book2,
                                    id:'',
                                    content:
                                    `
                                        <p>
                                          In the Episcopal Order of Worship, the priest sometimes introduces and mentions the Mosaic Law. The words given to Moses that the word [bold] is worth thinking about. We do well not to take the law lightly. It will take guts to look and not get bold enough in another way as having personal integrity to be accountable of yourself and be free of all guilt. This book will help you to be set free and true. There is a song that came out in the '60s and a movie, Born Free, the first line of the song caught my attention: "Born free, as free as the wind blows, as free as the grass grows. Born free to follow your heart." This was an inspiration to me. You can be set free and true as your heart.
                                        </p>
                                    `,

                                    ebooks:{
                                        amazon:'https://www.amazon.com/Being-Set-Free-Roger-Holcomb-ebook/dp/B08CJYRNHB/',
                                        stratton:'https://www.stratton-press.com/books/being-set-free-pursue-purity-living/',
                                        barnes:'https://www.barnesandnoble.com/w/being-set-free-roger-k-holcomb/1137309056', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Being-Set-Free-Pursue-Purity/dp/1648950833/',
                                        barnes:'https://www.barnesandnoble.com/w/being-set-free-roger-k-holcomb/1137318410',
                                        booksamillion:'https://www.booksamillion.com/p/Being-Set-Free/Roger-K-Holcomb/9781648950834',
                                    }
                                }} 
                            />

                            <div className="columns book-container-ft">
                                <div className="column">
                                    <div className="bookImgContainer">
                                        <img alt="Pneuma The Work of the Holy Spirit" src={Book3} />
                                    </div>
                                </div>
                                <div className="column">
                                    <section className="contentBook">
                                        <h1>Pneuma</h1>
                                        <p className="sub-heading">The Work of the Holy Spirit</p>
                                        <div className="content-body">
                                            <p>
                                                Often observes Roger K. Holcomb, people do not allow themselves to experience the wholeness of life. So the life experience may have started with me as a small lad, working along with my grandfather, Amos Brady Westfall. As my grandfather worked several jobs, a school teacher in one room school, Jackson County, West Virginia, a blacksmith, and also a farmer. Growing up I went to school and finished in, “1970” Then we moved to Ohio and worked and met my wife Fraun, Two years went by we had our first son. I worked in small Assembly Of God’s Church’s. I was also working to become a minister. Later are two other children were born. The three children’s names are Roger, Shawna, Brady and they are married and blessed us with ten grandchildren and all working church. In 1990 to 1995 I pastored a small Independent church for five years. From 1995 to 2002 I pastored a Independent church In West Virginia Conference, and Hosten Conference in Virginia. Roger Holcomb resides in Radford Virginia today with my family and friends.
                                            </p>
                                        </div>
                                    </section>
                                </div>
                            </div>

                          <div className="commentSection column">
                              <div id="disqus_thread">
                                  <DiscussionEmbed {...disqusConfig} />
                              </div>
                          </div>
                    </div>
                </main>
		 	</Layout>
		</>
	)
}

export default ATB;