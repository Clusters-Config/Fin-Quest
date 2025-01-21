import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Learning_paths from './pages/Learning_paths';
import Game from './pages/Game';
import Login from './pages/Login-signup';
import Simulations from './pages/Simulations';
import Features from './pages/Features';
import Facilitators from './pages/Facilitators';
import Communitys from './pages/Communitys';

const App = () => {
  return (
    <Router>
      <div>
        {/* Define the routes */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/login" element={<Login />} />
          <Route path="/learning_paths" element={<Learning_paths />} />
          <Route path="/game" element={<Game />} />
          <Route path="/simulations" element={<Simulations />} />
          <Route path="/facilitators" element={<Facilitators />} />
          <Route path="/Communitys" element={<Communitys />} />


        </Routes>
      </div>
    </Router>
  );
};

export default App;