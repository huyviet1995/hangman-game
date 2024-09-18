import './App.css';
import LandingPage from 'pages/LandingPage/LandingPage';
import TutorialPage from 'pages/TutorialPage/TutorialPage';
import PickACategory from 'pages/PickACategoryPage/PickACategoryPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HangmanGame from 'pages/HangmanGame/HangmanGame';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/tutorial" element={<TutorialPage />} />
          <Route path="/choose-category" element={<PickACategory />} />
          <Route path="/game/:category" element={<HangmanGame />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
