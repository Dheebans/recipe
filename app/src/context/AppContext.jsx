import React, { createContext, useContext, useState } from 'react';
import { mockRecipes, mockGroups, mockShoppingList } from '../data/mockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(mockRecipes);
  const [groups, setGroups] = useState(mockGroups);
  const [shoppingList, setShoppingList] = useState(mockShoppingList);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleRecipeBookmark = (id) => {
    // Logic to toggle bookmark
  };

  const addRecipe = (newRecipe) => {
    setRecipes([newRecipe, ...recipes]);
  };

  return (
    <AppContext.Provider value={{
      recipes,
      groups,
      shoppingList,
      isDarkMode,
      setIsDarkMode,
      addRecipe,
      toggleRecipeBookmark
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
