import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecommendedPage from './components/RecommendedPage';
import MealDetail from './components/MealDetail';
import SearchBar from './assets/SearchBar';

function App() {
  const [meals, setMeals] = useState([
    {
      id: 1,
      name: 'Italian Bruschetta',
      image: 'https://plus.unsplash.com/premium_photo-1677686707270-307ec44d1366?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aXRhbGlhbiUyMGJydXNjaGV0dGF8ZW58MHx8MHx8fDA%3D',
      Calories: '206.8kcal',
      TotalFat:'4.0 g',
      Protein:'7.2g',
      TotalCarbohydrates: '35.3 g',
      Sugar: '0.2 g',
      Dietaryfiber: '2.3 g',
      Sodium: '428.5 mg',
      Potassium: '160.6 mg',
      Cholesterol: '4.4 mg',
      cookingTime: '1hr 10min',
      servingAmount: '1 serving',
      rating: 4,
      ingredients: [
        { quantity: '200g', name: 'Chicken' },
        { quantity: '100g', name: 'Lettuce' },
        { quantity: '50g', name: 'Tomato' },
        { quantity: '30g', name: 'Cucumber' },
        { quantity: '2 tbsp', name: 'Olive Oil' }
      ],
      videoThumbnail: 'https://plus.unsplash.com/premium_photo-1677686707270-307ec44d1366?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aXRhbGlhbiUyMGJydXNjaGV0dGF8ZW58MHx8MHx8fDA%3D',
      videoLink: 'https://www.youtube.com/watch?v=Q3xg35pcLyo',
      category: 'Recommended',
      cuisine: 'Italian'
    },
    {
      id: 2,
      name: 'Spaghetti Bolognese',
      image: 'https://media.istockphoto.com/id/1352856758/photo/classic-spaghetti-bolognese.webp?b=1&s=170667a&w=0&k=20&c=Y_1xvpqz8upCrhp73eOuVYvpxWs7O9mVy5jwx7UC8Lw=',
      Calories: '206.8kcal',
      TotalFat:'4.0 g',
      Protein:'7.2g',
      TotalCarbohydrates: '35.3 g',
      Sugar: '0.2 g',
      Dietaryfiber: '2.3 g',
      Sodium: '428.5 mg',
      Potassium: '160.6 mg',
      Cholesterol: '4.4 mg',
      cookingTime: '1hr 10min',
      servingAmount: '1 serving',
      rating: 4,
      ingredients: [
        { quantity: '200g', name: 'Chicken' },
        { quantity: '100g', name: 'Lettuce' },
        { quantity: '50g', name: 'Tomato' },
        { quantity: '30g', name: 'Cucumber' },
        { quantity: '2 tbsp', name: 'Olive Oil' }
      ],
      videoThumbnail: 'https://via.placeholder.com/150',
      videoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      category: 'Recommended',
      cuisine: 'Italian'
    },
    {
      id: 3,
      name: 'Chicken Parmesan',
      image: 'https://media.istockphoto.com/id/503203991/photo/homemade-italian-chicken-parmesan.webp?b=1&s=170667a&w=0&k=20&c=LjQffQCDNySqAFaFRt-PtSOUKXzqBJ4Nnnl_oKkM4ko=',
      Calories: '206.8kcal',
      TotalFat:'4.0 g',
      Protein:'7.2g',
      TotalCarbohydrates: '35.3 g',
      Sugar: '0.2 g',
      Dietaryfiber: '2.3 g',
      Sodium: '428.5 mg',
      Potassium: '160.6 mg',
      Cholesterol: '4.4 mg',
      cookingTime: '1hr 10min',
      servingAmount: '1 serving',
      rating: 4,
      ingredients: [
        { quantity: '200g', name: 'Chicken' },
        { quantity: '100g', name: 'Lettuce' },
        { quantity: '50g', name: 'Tomato' },
        { quantity: '30g', name: 'Cucumber' },
        { quantity: '2 tbsp', name: 'Olive Oil' }
      ],
      videoThumbnail: 'https://via.placeholder.com/150',
      videoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      category: 'Recommended',
      cuisine: 'Italian'
    },
    {
      id: 4,
      name: 'Italian Lasagna',
      image: 'https://media.istockphoto.com/id/168246587/photo/lasagna-spring.webp?b=1&s=170667a&w=0&k=20&c=DRuVhWkkdwd_LWiZKDK3FhvsKVdNdbFk8AxTGLe2OAA=',
      Calories: '206.8kcal',
      Totalfat:'4.0 g',
      Proteins:'7.2g',
      TotalCarbohydrates: '35.3 g',
      Sugar: '0.2 g',
      Dietaryfiber: '2.3 g',
      Sodium: '428.5 mg',
      Potassium: '160.6 mg',
      Cholesterol: '4.4 mg',
      cookingTime: '1hr 10min',
      servingAmount: '1 serving',
      rating: 4,
      ingredients: [
        { quantity: '200g', name: 'Chicken' },
        { quantity: '100g', name: 'Lettuce' },
        { quantity: '50g', name: 'Tomato' },
        { quantity: '30g', name: 'Cucumber' },
        { quantity: '2 tbsp', name: 'Olive Oil' }
      ],
      videoThumbnail: 'https://via.placeholder.com/150',
      videoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      category: 'Recommended',
      cuisine: 'Italian'
    },
    {
      id: 5,
      name: 'Teriyaki Chicken',
      image: 'https://media.istockphoto.com/id/1470985634/photo/grilled-chicken-teriyaki-rice-japanese-food-isolated-in-black-background.webp?b=1&s=170667a&w=0&k=20&c=lqdM0zDXOSGfPg_z1qM2BpSY3_63Ri1BR7kVvuuxRr8=',
      Calories: '206.8kcal',
      TotalFat:'4.0 g',
      Protein:'7.2g',
      TotalCarbohydrates: '35.3 g',
      Sugar: '0.2 g',
      Dietaryfiber: '2.3 g',
      Sodium: '428.5 mg',
      Potassium: '160.6 mg',
      Cholesterol: '4.4 mg',
      cookingTime: '1hr 10min',
      servingAmount: '1 serving',
      rating: 4,
      ingredients: [
        { quantity: '200g', name: 'Chicken' },
        { quantity: '100g', name: 'Lettuce' },
        { quantity: '50g', name: 'Tomato' },
        { quantity: '30g', name: 'Cucumber' },
        { quantity: '2 tbsp', name: 'Olive Oil' }
      ],
      videoThumbnail: 'https://via.placeholder.com/150',
      videoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      category: 'Recommended',
      cuisine: 'Italian'
    },
    {
      id: 6,
      name: 'Ramen Noodle Soup',
      image: 'https://media.istockphoto.com/id/1144177675/photo/ramen-noodles-in-soy-sauce-flavored-soup.webp?b=1&s=170667a&w=0&k=20&c=FE8XSlZKMle4dTnCeeUMTIzztMQiiXjGwYfXQGgVkFU=',
      Calories: '206.8kcal',
      TotalFat:'4.0 g',
      Protein:'7.2g',
      TotalCarbohydrates: '35.3 g',
      Sugar: '0.2 g',
      Dietaryfiber: '2.3 g',
      Sodium: '428.5 mg',
      Potassium: '160.6 mg',
      Cholesterol: '4.4 mg',
      cookingTime: '1hr 10min',
      servingAmount: '1 serving',
      rating: 4,
      ingredients: [
        { quantity: '200g', name: 'Chicken' },
        { quantity: '100g', name: 'Lettuce' },
        { quantity: '50g', name: 'Tomato' },
        { quantity: '30g', name: 'Cucumber' },
        { quantity: '2 tbsp', name: 'Olive Oil' }
      ],
      videoThumbnail: 'https://via.placeholder.com/150',
      videoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      category: 'Recommended',
      cuisine: 'Japanese'
    },
    {
      id: 7,
      name: 'Gyuodon(Japanese Beef Rice Bowl)',
      image: 'https://media.istockphoto.com/id/2151200404/photo/freshly-cooked-beef-gyudon-with-rice.webp?b=1&s=170667a&w=0&k=20&c=6-7LjFtZvCmweNOyAAtyIaayQpsVmYdwIZlZvfSy3EI=',
      Calories: '206.8kcal',
      TotalFat:'4.0 g',
      Protein:'7.2g',
      TotalCarbohydrates: '35.3 g',
      Sugar: '0.2 g',
      Dietaryfiber: '2.3 g',
      Sodium: '428.5 mg',
      Potassium: '160.6 mg',
      Cholesterol: '4.4 mg',
      cookingTime: '1hr 10min',
      servingAmount: '1 serving',
      rating: 4,
      ingredients: [
        { quantity: '200g', name: 'Chicken' },
        { quantity: '100g', name: 'Lettuce' },
        { quantity: '50g', name: 'Tomato' },
        { quantity: '30g', name: 'Cucumber' },
        { quantity: '2 tbsp', name: 'Olive Oil' }
      ],
      videoThumbnail: 'https://via.placeholder.com/150',
      videoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      category: 'Recommended',
      cuisine: 'Japanese'
    },
    {
      id: 8,
      name: 'Salmon Sashimi',
      image: 'https://media.istockphoto.com/id/1185658541/photo/sliced-raw-salmon-sashimi-on-plate.webp?b=1&s=170667a&w=0&k=20&c=bXd3ZxRhhC9ILNEz17w--VqC_FPG9fIaJWnh8s7verU=',
      Calories: '206.8kcal',
      TotalFat:'4.0 g',
      Protein:'7.2g',
      TotalCarbohydrates: '35.3 g',
      Sugar: '0.2 g',
      Dietaryfiber: '2.3 g',
      Sodium: '428.5 mg',
      Potassium: '160.6 mg',
      Cholesterol: '4.4 mg',
      cookingTime: '1hr 10min',
      servingAmount: '1 serving',
      rating: 4,
      ingredients: [
        { quantity: '200g', name: 'Chicken' },
        { quantity: '100g', name: 'Lettuce' },
        { quantity: '50g', name: 'Tomato' },
        { quantity: '30g', name: 'Cucumber' },
        { quantity: '2 tbsp', name: 'Olive Oil' }
      ],
      videoThumbnail: 'https://via.placeholder.com/150',
      videoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      category: 'Recommended',
      cuisine: 'Japanese'
    },
    {
      id: 9,
      name: 'Udon Stir Fry',
      image: 'https://media.istockphoto.com/id/642257588/photo/beef-and-broccoli-with-udon-noodle-stir-fry.webp?b=1&s=170667a&w=0&k=20&c=JorE1dZpGJ4wTGel_TIxpSKa8PSR7q0dpOOsOxNMj14=',
      Calories: '206.8kcal',
      TotalFat:'4.0 g',
      Protein:'7.2g',
      TotalCarbohydrates: '35.3 g',
      Sugar: '0.2 g',
      Dietaryfiber: '2.3 g',
      Sodium: '428.5 mg',
      Potassium: '160.6 mg',
      Cholesterol: '4.4 mg',
      cookingTime: '1hr 10min',
      servingAmount: '1 serving',
      rating: 4,
      ingredients: [
        { quantity: '200g', name: 'Chicken' },
        { quantity: '100g', name: 'Lettuce' },
        { quantity: '50g', name: 'Tomato' },
        { quantity: '30g', name: 'Cucumber' },
        { quantity: '2 tbsp', name: 'Olive Oil' }
      ],
      videoThumbnail: 'https://via.placeholder.com/150',
      videoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      category: 'Recommended',
      cuisine: 'Japanese'
    },
    {
      id: 10,
      name: 'Butter Chicken',
      image: 'https://media.istockphoto.com/id/1312459972/photo/homemade-indian-butter-chicken-with-rice.webp?b=1&s=170667a&w=0&k=20&c=KTbJhu9FeVoBQtgevndIxg22mDXbiG4Vh0qCOY2IPrU=',
      Calories: '206.8kcal',
      TotalFat:'4.0 g',
      Protein:'7.2g',
      TotalCarbohydrates: '35.3 g',
      Sugar: '0.2 g',
      Dietaryfiber: '2.3 g',
      Sodium: '428.5 mg',
      Potassium: '160.6 mg',
      Cholesterol: '4.4 mg',
      cookingTime: '1hr 10min',
      servingAmount: '1 serving',
      rating: 4,
      ingredients: [
        { quantity: '200g', name: 'Chicken' },
        { quantity: '100g', name: 'Lettuce' },
        { quantity: '50g', name: 'Tomato' },
        { quantity: '30g', name: 'Cucumber' },
        { quantity: '2 tbsp', name: 'Olive Oil' }
      ],
      videoThumbnail: 'https://via.placeholder.com/150',
      videoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      category: 'Recommended',
      cuisine: 'Indian'
    },
    {
      id: 11,
      name: 'Palak Paneer',
      image: 'https://media.istockphoto.com/id/1273065968/photo/image-of-cast-iron-round-skillet-frying-pan-vegetarian-meal-palak-paneer-recipe-blue-grey.webp?b=1&s=170667a&w=0&k=20&c=iEM_4HnrxLZir84dQk7N9RmkVwsay28L3WYf3haO21A=',
      Calories: '206.8kcal',
      TotalFat:'4.0 g',
      Protein:'7.2g',
      TotalCarbohydrates: '35.3 g',
      Sugar: '0.2 g',
      Dietaryfiber: '2.3 g',
      Sodium: '428.5 mg',
      Potassium: '160.6 mg',
      Cholesterol: '4.4 mg',
      cookingTime: '1hr 10min',
      servingAmount: '1 serving',
      rating: 4,
      ingredients: [
        { quantity: '200g', name: 'Chicken' },
        { quantity: '100g', name: 'Lettuce' },
        { quantity: '50g', name: 'Tomato' },
        { quantity: '30g', name: 'Cucumber' },
        { quantity: '2 tbsp', name: 'Olive Oil' }
      ],
      videoThumbnail: 'https://via.placeholder.com/150',
      videoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      category: 'Recommended',
      cuisine: 'Indian'
    },
    {
      id: 12,
      name: 'Vegetable Korma',
      image: 'https://media.istockphoto.com/id/1053423374/photo/coconut-chicken-in-a-spicy-cream-sauce-close-up-horizontal-top-view.jpg?s=612x612&w=0&k=20&c=ROQpgzQqLsMnX4IGkrsrKJCOfz7-0P41K3nKKzgN_Pg=',
      Calories: '206.8kcal',
      TotalFat:'4.0 g',
      Protein:'7.2g',
      TotalCarbohydrates: '35.3 g',
      Sugar: '0.2 g',
      Dietaryfiber: '2.3 g',
      Sodium: '428.5 mg',
      Potassium: '160.6 mg',
      Cholesterol: '4.4 mg',
      cookingTime: '1hr 10min',
      servingAmount: '1 serving',
      rating: 4,
      ingredients: [
        { quantity: '200g', name: 'Chicken' },
        { quantity: '100g', name: 'Lettuce' },
        { quantity: '50g', name: 'Tomato' },
        { quantity: '30g', name: 'Cucumber' },
        { quantity: '2 tbsp', name: 'Olive Oil' }
      ],
      videoThumbnail: 'https://via.placeholder.com/150',
      videoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      category: 'Recommended',
      cuisine: 'Italian'
    },
    {
      id: 13,
      name: 'Samosas',
      image: 'https://media.istockphoto.com/id/1430060145/photo/sweet-tasty-fried-indian-dish-samosha-indian-delicious-deep-fried-breakfast-samosa-also-know.webp?b=1&s=170667a&w=0&k=20&c=FS7QGLxCF4YZLV3SrFGvJfoWx23df-qdCVU9umKjhec=',
      Calories: '206.8kcal',
      TotalFat:'4.0 g',
      Protein:'7.2g',
      TotalCarbohydrates: '35.3 g',
      Sugar: '0.2 g',
      Dietaryfiber: '2.3 g',
      Sodium: '428.5 mg',
      Potassium: '160.6 mg',
      Cholesterol: '4.4 mg',
      cookingTime: '1hr 10min',
      servingAmount: '1 serving',
      rating: 4,
      ingredients: [
        { quantity: '200g', name: 'Chicken' },
        { quantity: '100g', name: 'Lettuce' },
        { quantity: '50g', name: 'Tomato' },
        { quantity: '30g', name: 'Cucumber' },
        { quantity: '2 tbsp', name: 'Olive Oil' }
      ],
      videoThumbnail: 'https://via.placeholder.com/150',
      videoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      category: 'Recommended',
      cuisine: 'Indian'
    },
    {
      id: 14,
      name: 'Chicken Tikka Masala',
      image: 'https://media.istockphoto.com/id/1735060474/photo/delicious-creamy-chicken-tikka-masala-surrounded-by-ingredients-close-up-in-a-bowl-horizontal.webp?b=1&s=170667a&w=0&k=20&c=Sli-5i9hPON0uS66-ciVmnVZB_LU6wKB8aWkSqzsYiY=',
      Calories: '206.8kcal',
      TotalFat:'4.0 g',
      Protein:'7.2g',
      TotalCarbohydrates: '35.3 g',
      Sugar: '0.2 g',
      Dietaryfiber: '2.3 g',
      Sodium: '428.5 mg',
      Potassium: '160.6 mg',
      Cholesterol: '4.4 mg',
      cookingTime: '1hr 10min',
      servingAmount: '1 serving',
      rating: 4,
      ingredients: [
        { quantity: '200g', name: 'Chicken' },
        { quantity: '100g', name: 'Lettuce' },
        { quantity: '50g', name: 'Tomato' },
        { quantity: '30g', name: 'Cucumber' },
        { quantity: '2 tbsp', name: 'Olive Oil' }
      ],
      videoThumbnail: 'https://via.placeholder.com/150',
      videoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      category: 'Recommended',
      cuisine: 'Italian'
    },
    {
      id: 15,
      name: 'Risotto Alla Milanese',
      image: 'https://media.istockphoto.com/id/504112354/photo/risotto-milanese-an-italian-recipe-typical-of-milan.webp?b=1&s=170667a&w=0&k=20&c=JLW0CP5yIcKBen9AJOcyCI9thDsRwS4AwcJOjezZdNA=',
      Calories: '206.8kcal',
      TotalFat:'4.0 g',
      Protein:'7.2g',
      TotalCarbohydrates: '35.3 g',
      Sugar: '0.2 g',
      Dietaryfiber: '2.3 g',
      Sodium: '428.5 mg',
      Potassium: '160.6 mg',
      Cholesterol: '4.4 mg',
      cookingTime: '1hr 10min',
      servingAmount: '1 serving',
      rating: 4,
      ingredients: [
        { quantity: '200g', name: 'Chicken' },
        { quantity: '100g', name: 'Lettuce' },
        { quantity: '50g', name: 'Tomato' },
        { quantity: '30g', name: 'Cucumber' },
        { quantity: '2 tbsp', name: 'Olive Oil' }
      ],
      videoThumbnail: 'https://via.placeholder.com/150',
      videoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      category: 'Recommended',
      cuisine: 'Italian'
    },




    // Add 14 more meal objects with varying categories and cuisines
  ]);

  return (
    <Router>
      <div className="container mx-auto p-4">
        <SearchBar />
        <Routes>
          <Route path="/" element={<RecommendedPage meals={meals} />} />
          <Route path="/meal/:id" element={<MealDetail meals={meals} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
