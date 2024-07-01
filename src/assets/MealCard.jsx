import React, { useState } from 'react';

const MealCard = ({ meal }) => {
  const [isImageLarge, setIsImageLarge] = useState(false);

  return (
    <div className="mb-8">
      <div
        className={`w-full mb-4 cursor-pointer ${isImageLarge ? 'h-96' : 'h-48'}`}
        onClick={() => setIsImageLarge(!isImageLarge)}
      >
        <img
          src={meal.image}
          alt={meal.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-between mb-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          {meal.cookingTime}
        </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded">
          {meal.servingAmount}
        </button>
        <div className="flex items-center">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <svg
                key={index}
                className={`w-6 h-6 ${
                  index < meal.rating ? 'text-yellow-500' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.05 3.221a1 1 0 00.95.69h3.387c.969 0 1.371 1.24.588 1.81l-2.737 1.988a1 1 0 00-.364 1.118l1.05 3.221c.3.921-.755 1.688-1.54 1.118l-2.737-1.988a1 1 0 00-1.176 0l-2.737 1.988c-.785.57-1.838-.197-1.54-1.118l1.05-3.221a1 1 0 00-.364-1.118L2.978 8.648c-.783-.57-.381-1.81.588-1.81h3.387a1 1 0 00.95-.69l1.05-3.221z" />
              </svg>
            ))}
        </div>
      </div>
      <div className="bg-gray-100 p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">{meal.name}</h2>
        <div className="flex justify-between">
          <p>Calories:</p>
          <p>{meal.calories}</p>
        </div>
        <div className="flex justify-between">
          <p>Fat:</p>
          <p>{meal.fat}</p>
        </div>
        <div className="flex justify-between">
          <p>Energy:</p>
          <p>{meal.energy}</p>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Ingredients:</h3>
        <ul className="list-disc list-inside">
          {meal.ingredients.map((ingredient, index) => (
            <li key={index} className="flex justify-between">
              <span>{ingredient.quantity}</span>
              <span>{ingredient.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-100 p-4 mt-4">
        <h3 className="text-lg font-semibold mb-2">Watch the Recipe Video:</h3>
        <div className="mb-2 w-36 h-30">
          <img
            src={meal.videoThumbnail}
            alt="Video Thumbnail"
            className="w-full h-full object-cover"
            style={{ width: '150px', height: '120px' }}
          />
        </div>
        <a
          href={meal.videoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Watch on YouTube
        </a>
      </div>
    </div>
  );
};

export default MealCard;
