import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Learning_paths from './pages/Learning_paths';
import Game from './pages/Game';
import Login from './pages/Login-signup';
import Simulations from './pages/Simulations';
import Features from './pages/Features';
import Facilitators from './pages/Facilitators';
import Communitys from './pages/Communitys';
import Chat from './pages/Chat';

// Learning path components
import Saving_Essentials from './learn_path_components/Saving_Essentials';
import Budgeting_Basics from './learn_path_components/Budgeting_Basics';
import SimpleVsCompoundInterest from './learn_path_components/SimpleVsCompoundInterest';
import LoanImpacts from './learn_path_components/LoanImpacts';
import MutualFundEssentials from './learn_path_components/MutualFundEssentials';
import StockMarketBasics from './learn_path_components/StockMarketBasics';
import QuizApp from './learn_path_components/QuizApp';
import ResultPage from './learn_path_components/ResultPage';
import ForumPage from "./learn_path_components/ForumPage";  
import Profile  from "./pages/Profile";
import ProfitLossLadder from "./GameComponents/ProfitLossLadder"
import DailyChallenges from "./GameComponents/DailyChallenges"


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
          <Route path="/communitys" element={<Communitys />} />
          <Route path='/chat' element={<Chat />} />
          <Route path="/Saving_Essentials" element={<Saving_Essentials />} />
          <Route path="/Budgeting_Basics" element={<Budgeting_Basics />} />
          <Route path="/SimpleVsCompoundInterest" element={<SimpleVsCompoundInterest />} />
          <Route path="/LoanImpacts" element={<LoanImpacts />} />
          <Route path="/MutualFundEssentials" element={<MutualFundEssentials />} />
          <Route path="/StockMarketBasics" element={<StockMarketBasics />} />
          <Route path="/QuizApp/:quizId" element={<QuizApp />} /> {/* Updated route */}
          <Route path="/result" element={<ResultPage />} />
          <Route path="/ForumPage" element={<ForumPage />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/ProfitLossLadder" element={<ProfitLossLadder />} />
          <Route path="/DailyChallenges" element={<DailyChallenges />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
