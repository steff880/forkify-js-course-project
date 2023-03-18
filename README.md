## This is a fictional website built by following The Complete JavaScript Course 2023: From Zero to Expert! by Jonas Schmedtmann on Udemy

### You can visit the live site [here](https://master--forkify-stefan880.netlify.app/)

---

## User Stories

1. As a user, I want to serach for recipes, so that I can find new ideas for meals.
2. As a user, I want to be able to update the number of servings, so that I can cook a meal for different number of people.
3. As a user, I want to bookmark recipes, so that I can review them later.
4. As a user, I want to be able to create my own recipes, so that I have them all organized in the same app.
5. As a user, I want to be able to see my bookmarks and own recipes when I leave the app and come back later, so that I can close the app safely after cooking.

## Features

1. Search functionality:

   - input field to send request to API with searched keywords.
   - Display results with pagination.
   - Display recipe with cooking time, servings and ingredients.

2. Channge servings functionality:

   - update all ingredients according to current number of servings

3. Bookmark functionality:
   - display list of all bookmarked recipes
4. Create my own recipes functionality:
   - User can upload own recipes
   - user recipes will automatically be bookmarked
   - user can only see their own recipes, not recipes from other users
5. See bookmarked recipes functionality:
   - store bookmarked data in the browser using local storage
   - on page load, read saved bookmarks from local storage and display

![](../starter/forkify-flowchart-part-1.png)

## Improvements and Feature Ideas: Challenges

- Display **number of pages** between the pagination buttons
- Ability to **sort** search results by duration or number of ingredients;
- Perform **ingredient validation** in view, before submitting the form;
- **Improve recipe ingredient input**: separate in multiple fields and allow more than 6 ingredients;
- **Shopping list feature**: button on recipe to add ingredients to a list;
- **Weekly meal planning feature**: assign recipes to the next 7 days and show on a weekly calendar;
- **Get nutrition data** on each ingredient from [spoonacular API](https://spoonacular.com/food-api) and calculate total calories of recipe
