// src/components/MealPage.jsx
import React from 'react';

const MealPage = ({ meal }) => {
  return (
    <div>
      <h1>{meal.name}</h1>
      <img src={meal.image} alt={meal.name} />
      <h2>Nutritional Value</h2>
      <p>{meal.nutritionalValue}</p>
      <h2>Ingredients</h2>
      <ul>
        {meal.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Video</h2>
      <a href={meal.videoUrl} target="_blank" rel="noopener noreferrer">
        <img src={meal.videoThumbnail} alt="Video Thumbnail" />
      </a>
    </div>
  );
};

export default MealPage;
