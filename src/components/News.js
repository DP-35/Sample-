import React, {useEffect,useState} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const News=(props) => {    // export class News extends Component {

    const [articles,setArticles]=useState([])
    //eslint-disable-next-line
    const [loading,setLoading]=useState(true)
    const [page,setPage]=useState(1)
    const [totalResults,setTotalResults]=useState(0)


    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         articles: [],   // To Understand...
    //         loading: false,
    //         page: 1,
    //         totalResults:0
    //     }
    // }

    const updateNews=async ()=> {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        // this.setState({ loading: true });
        setLoading(true);
        let data = await fetch(url);
        let parseData = await data.json()
        setArticles(parseData.articles)
        setTotalResults(parseData.totalResults)
        setLoading(false)
        // this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false })
    }


    useEffect(()=>{
        updateNews();
    })

    // async componentDidMount() {
        // this.updateNews();
    // }

    // prevPage = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=04c0ec32f0fa4f939ff406c14abad4b1&page=${this.state.page - 1} &pageSize=${props.pageSize}`;
    //     this.setState({ loading: true });
    //     let data = await fetch(url);
    //     let parseData = await data.json()
    //     this.setState({
    //         page: this.state.page - 1,
    //         articles: parseData.articles,
    //         loading: false
    //     })
    // }


    // nxtPage = async () => {
    //     if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize))) {
    //         let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=04c0ec32f0fa4f939ff406c14abad4b1&page= ${this.state.page + 1} &pageSize=${props.pageSize}`;
    //         this.setState({ loading: true });
    //         let data = await fetch(url);
    //         let parseData = await data.json()
    //         this.setState({
    //             page: this.state.page + 1,
    //             articles: parseData.articles,
    //             loading: false,
    //             totalResults:0
    //         })
    //     }
    // }

    // handlePrevClick =async() => {
    //     this.setState({page:this.state.page-1});
    //     this.updateNews();

    // }

    // handleNextClick =async() => {
    //     this.setState({page:this.state.page+1});
    //     this.updateNews();

    // }

    const capitalizeFirstLetter=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const fetchMoreData =async () => {
        // this.setState({page:page + 1});
        
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        // this.setState({ loading: true });
        setPage(page+1);
        let data = await fetch(url);
        let parseData = await data.json()
        setArticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
   
        // this.setState({ 
        //     articles: this.state.articles.concat(parseData.articles), 
        //     totalResults: parseData.totalResults, 
        //     loading: false })
      };

    // render() {
        return (
            <>
               
                    <center><h2 style={{ margin: '35px 0px',marginTop:'90px' }}>E-News-Top {capitalizeFirstLetter(props.category)} Headlines</h2></center>

                    {/* {this.state.loading && <Spinner />} */}
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader={<Spinner/>}
                    >
                        <div className='container'>

                        <div className='row'>
                            {articles.map((element,index) => {

                                return (<div className='col-md-4' key={index} >
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""}
                                        imageUrl={element.urlToImage ? element.urlToImage : "https://c4.wallpaperflare.com/wallpaper/698/419/754/johnny-depp-4k-for-mac-desktop-wallpaper-preview.jpg"}
                                        newsUrl={element.url} author={element.author ? element.author : "DP"} date={element.publishedAt} />
                                </div>);

                            })}
                        </div>
                        </div>
                    </InfiniteScroll>

                        {/* <div className='container d-flex justify-content-between'>
                            <button disabled={this.state.page <= 1} type='button' className='btn btn-dark' onClick={this.prevPage}>&larr;Previous</button>
                            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type='button' className='btn btn-dark' onClick={this.nxtPage}>Next &rarr;</button>
                        </div> */}

         
            </>
        )
    // }
}


News.defaultProps={
    country:'in',
    pageSize:5,
    category:'science'
}

News.propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
}

export default News
