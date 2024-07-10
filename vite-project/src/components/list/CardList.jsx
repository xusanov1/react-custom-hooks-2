import React from 'react';
import useFetchNews from '../../hooks/useFetch';
import NewsCard from '../newsCard/NewsCard';
import './CardList.css';


const CardList = () => {
  const { news, loading, error } = useFetchNews();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="news-list">
      {news.map((article) => (
        <NewsCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default CardList;
