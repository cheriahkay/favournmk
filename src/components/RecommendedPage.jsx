import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RecommendedPage = ({ meals }) => {
  const [filter, setFilter] = useState('Recommended');

  const handleFilterClick = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recommended Meals</h1>
      <div className="mb-4">
        <button
          className={`mr-2 py-2 px-4 rounded ${filter === 'Recommended' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleFilterClick('Recommended')}
        >
          Recommended
        </button>
        <button
          className={`mr-2 py-2 px-4 rounded ${filter === 'Popular' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleFilterClick('Popular')}
        >
          Popular
        </button>
        <button
          className={`mr-2 py-2 px-4 rounded ${filter === 'Classic' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleFilterClick('Classic')}
        >
          Classic
        </button>
        <button
          className={`py-2 px-4 rounded ${filter === 'Flexitaria' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleFilterClick('Flexitaria')}
        >
          Flexitaria
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {meals.map((meal) => (
          <Link to={`/meal/${meal.id}`} key={meal.id}>
            <div className="border rounded-lg p-4 flex">
              <img src={meal.image} alt={meal.name} className="w-32 h-32 object-cover mr-4" />
              <div className="flex flex-col justify-between">
                <h2 className="text-xl font-bold">{meal.name}</h2>
                <p>{meal.cuisine}</p>
                <p>{filter}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecommendedPage;
