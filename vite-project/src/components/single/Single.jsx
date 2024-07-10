import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchNews from '../../hooks/useFetch';
import './Single.css';

const Single = () => {
    const { id } = useParams();
    const { news, loading, error } = useFetchNews();
    const article = news.find((news) => news.id.toString() === id);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!article) {
        return <div>Article not found</div>;
    }

    const imageUrl = article.media && article.media.length > 0 ? article.media[0]['media-metadata'][2].url : 'default-image-url.jpg';

    return (
        <div className="single-article">
            <div className="article-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="article-content">
                <h1>{article.title}</h1>
                <p className="article-byline">{article.byline}</p>
                <p className="article-abstract">{article.abstract}</p>
                <p className="article-published-date">Published: {new Date(article.published_date).toLocaleDateString()}</p>
                <p className="article-source">Source: {article.source}</p>
                <div className="anchors">
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-full-article">
                        Read full article
                    </a>
                    <a className='back-home' href="/">Back home</a>
                </div>

            </div>
        </div>
    );
};

export default Single;
