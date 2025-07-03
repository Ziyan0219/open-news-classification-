import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import Dashboard from './components/Dashboard';
import KeywordSearch from './components/KeywordSearch';
import Login from './components/Login';
import storiesData from './data/stories.json';
import './App.css';

function App() {
  const [stories, setStories] = useState([]);
  const [filters, setFilters] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setStories(storiesData.stories);
    setFilters(storiesData.filters);
    
    // Check if user is already authenticated (stored in sessionStorage)
    const authStatus = sessionStorage.getItem('publicsource-auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    // Store authentication status in sessionStorage (expires when browser closes)
    sessionStorage.setItem('publicsource-auth', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('publicsource-auth');
  };

  // If not authenticated, show login screen
  if (!isAuthenticated) {
    return (
      <ThemeProvider attribute="class" defaultTheme="light">
        <div className="App">
          <Login onLogin={handleLogin} />
        </div>
      </ThemeProvider>
    );
  }

  // If authenticated, show the dashboard
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Router>
        <div className="App">
          <Routes>
            <Route 
              path="/" 
              element={<Dashboard stories={stories} filters={filters} onLogout={handleLogout} />} 
            />
            <Route 
              path="/keyword-search" 
              element={<KeywordSearch stories={stories} onLogout={handleLogout} />} 
            />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

