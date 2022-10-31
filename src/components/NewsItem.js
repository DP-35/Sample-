import React from 'react'

const NewsItem=(props) => { // export class NewsItem extends Component {

  // render() {
  
    let { title, description, imageUrl, newsUrl, author, date } = props;
    return (
    
        <div className='my-3'>
          <div className="card">
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <b> <p className='card-text'><small className='text-muted'>By {author} on {new Date(date).toGMTString()}</small></p></b>
              <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>
        </div>
     

    )
  
  // }

}

export default NewsItem
