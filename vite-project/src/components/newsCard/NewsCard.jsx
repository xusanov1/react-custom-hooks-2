import React from 'react';
import { Link } from 'react-router-dom';
import './NewsCard.css';

const NewsCard = ({ article }) => {
    const imageUrl = article.media && article.media.length > 0 ? article.media[0]['media-metadata'][2].url : null;

    return (
        <div className="news-card">
            {imageUrl && <img src={imageUrl} alt={article.title} className="news-image" />}
            <div className="card-info">
                <h1>{article.title}</h1>
                <p>{article.abstract}</p>
                <Link className='read-more' to={`/news/${article.id}`}>Read more</Link>
            </div>
        </div>
    );
};

export default NewsCard;
