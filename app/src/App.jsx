import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import HomeFeed from './pages/HomeFeed';
import AIProcessing from './pages/AIProcessing';
import RecipeDetail from './pages/RecipeDetail';
import Groups from './pages/Groups';
import RecipeEditor from './pages/RecipeEditor';
import PDFPreview from './pages/PDFPreview';
import ShoppingList from './pages/ShoppingList';
import ProfileSettings from './pages/ProfileSettings';
import MealPlanner from './pages/MealPlanner';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomeFeed />} />
            <Route path="/planner" element={<MealPlanner />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/shopping-list" element={<ShoppingList />} />
            <Route path="/profile" element={<ProfileSettings />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/edit/:id" element={<RecipeEditor />} />
          </Route>
          <Route path="/processing" element={<AIProcessing />} />
          <Route path="/pdf-preview" element={<PDFPreview />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
