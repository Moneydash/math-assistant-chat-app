import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MathAssistantChat from './pages/MathAssistantChat';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MathAssistantChat />} />
      </Routes>
    </Router>
  );
}

export default App;
