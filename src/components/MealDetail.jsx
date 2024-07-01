import React from 'react';
import { useParams } from 'react-router-dom';

const MealDetail = ({ meals }) => {
  const { id } = useParams();
  const meal = meals.find((meal) => meal.id === parseInt(id));

  if (!meal) {
    return <div>Meal not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{meal.name}</h1>
      <div className="flex flex-col items-center">
        <img src={meal.image} alt={meal.name} className="w-64 h-64 object-cover mb-4" />
        
        <div className="mb-4">
          <p>Cooking Time: {meal.cookingTime}</p>
          <p>Serving Amount: {meal.servingAmount}</p>
          <p>Rating: {'⭐'.repeat(meal.rating)}</p>
        </div>
        <div className="w-full md:w-1/2 bg-gray-100 p-4 mb-4">
          <h2 className="text-xl font-bold mb-2">Nutritional Information</h2>
          <div className="flex justify-between">
            <p>Calories:</p>
            <p>{meal.Calories}</p>
          </div>
          <div className="flex justify-between">
            <p> Total Fat:</p>
            <p>{meal.TotalFat}</p>
          </div>
          <div className="flex justify-between">
            <p>Proteins:</p>
            <p>{meal.Protein}</p>
          </div>
          <div className="flex justify-between">
            <p>Total Carbohydrates:</p>
            <p>{meal.TotalCarbohydrates}</p>
          </div>
          <div className="flex justify-between">
            <p>Sugar:</p>
            <p>{meal.Sugar}</p>
          </div>
          <div className="flex justify-between">
            <p>Dietary Fiber:</p>
            <p>{meal.Dietaryfiber}</p>
          </div>
          <div className="flex justify-between">
            <p>Sodium:</p>
            <p>{meal.Sodium}</p>
          </div>
          <div className="flex justify-between">
            <p>Potassium:</p>
            <p>{meal.Potassium}</p>
          </div>
          <div className="flex justify-between">
            <p>Cholesterol:</p>
            <p>{meal.Cholesterol}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-gray-100 p-4 mb-4">
          <h2 className="text-xl font-bold mb-2">Ingredients</h2>
          {meal.ingredients.map((ingredient, index) => (
            <div key={index} className="flex justify-between">
              <p>{ingredient.quantity}</p>
              <p>{ingredient.name}</p>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2 bg-gray-100 p-4">
          <h2 className="text-xl font-bold mb-2">Video</h2>
          <img src={meal.videoThumbnail} alt="Video Thumbnail" className="w-50 h-50 mb-2" />
          <a href={meal.videoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            Watch Video
          </a>
        </div>
      </div>
    </div>
  );
};

export default MealDetail;
