import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Learning_paths from './pages/Learning_paths';
import Game from './pages/Game';
import Login from './pages/Login-signup';
import Simulations from './pages/Simulations';
import Features from './pages/Features';
//import TaxPage from './pages/TaxPage';
import Stories from './pages/Stories';
import FinFlux from './pages/FinFlux';
import SideHustleFinder from './pages/SideHustleFinder';
import Communitys from './pages/Communitys';
import Chat from './pages/Chat';
import Signup from './pages/Signup';
import Financial_Assistant from './pages/Financial_Assistan';
//import StressTracker from './pages/StressTracker';
import { AuthProvider } from "./pages/AuthContext";

// Learning path components
import TerminologyPage from './learn_path_components/TerminologyPage';
import Credit_Debit from './learn_path_components/Credit_Debit';
import Accounting from './learn_path_components/Accounting';
import Pillars_Of_Accounting from './learn_path_components/Pillars_Of_Accounting';
import Saving_Essentials from './learn_path_components/Saving_Essentials';
import Budgeting_Basics from './learn_path_components/Budgeting_Basics';
import SimpleVsCompoundInterest from './learn_path_components/SimpleVsCompoundInterest';
import LoanImpacts from './learn_path_components/LoanImpacts';
import DepositEssentials from './learn_path_components/DepositEssentials';
import MutualFundEssentials from './learn_path_components/MutualFundEssentials';
import StockMarketBasics from './learn_path_components/StockMarketBasics';
import Finance_Principles from './learn_path_components/Finance_Principles';
import Goals_Finance  from './learn_path_components/Goals_Finance';
import GlobalChat from "./learn_path_components/forum_components/GlobalChat"

import QuizApp from './learn_path_components/QuizApp';
import ResultPage from './learn_path_components/ResultPage';
import ForumPage from "./learn_path_components/ForumPage";  
import Profile  from "./pages/Profile";


import ProfitLossLadder from "./GameComponents/ProfitLossLadder";
import Stock from "./GameComponents/Stock";
import Monopoly from "./GameComponents/Monopoly";
import DailyChallenges from "./GameComponents/DailyChallenges"
import ProfilePage  from "./learn_path_components/ProfilePage";
import GameProfile from "./GameComponents/GameProfile"
const App = () => {
  return (
    <AuthProvider>
    <Router>
      <div>
        {/* Define the routes */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/learning_paths" element={<Learning_paths />} />
          <Route path="/game" element={<Game />} />
          <Route path="/simulations" element={<Simulations />} />
          {/* <Route path="/TaxPage" element={<TaxPage />} /> */}
          <Route path="/Stories" element={< Stories />} />
          <Route path="/FinFlux" element={< FinFlux />} />
          <Route path="/SideHustleFinder" element={<  SideHustleFinder />} />
          <Route path="/communitys" element={<Communitys />} />
          <Route path='/chat' element={<Chat />} />
          <Route path="/Financial_Assistant" element={<Financial_Assistant />} />
          {/* <Route path="/StressTracker" element={< StressTracker />} /> */}
          
          <Route path="/TerminologyPage" element={<TerminologyPage />} />
          <Route path="/Credit_Debit" element={<Credit_Debit/>} />
          <Route path="/Accounting" element={<Accounting/>} />
          <Route path="/Pillars_Of_Accounting" element={<Pillars_Of_Accounting/>} />
          <Route path="/Saving_Essentials" element={<Saving_Essentials />} />
          <Route path="/Budgeting_Basics" element={<Budgeting_Basics />} />
          <Route path="/SimpleVsCompoundInterest" element={<SimpleVsCompoundInterest />} />
          <Route path="/LoanImpacts" element={<LoanImpacts />} />
          <Route path="/DepositEssentials" element={<DepositEssentials />} />
          <Route path="/MutualFundEssentials" element={<MutualFundEssentials />} />
          <Route path="/StockMarketBasics" element={<StockMarketBasics />} />
          <Route path="/Finance_Principles" element={<Finance_Principles />} />
          <Route path="/Goals_Finance" element={<Goals_Finance />} />


          <Route path="/QuizApp/:quizId" element={<QuizApp />} /> {/* Updated route */}
          <Route path="/result" element={<ResultPage />} />
          <Route path="/ForumPage" element={<ForumPage />} />
          <Route path="/Profile" element={<Profile />} />


          <Route path="/ProfitLossLadder" element={<ProfitLossLadder />} />
          <Route path="/Stock" element={<Stock />} />
          <Route path="/Monopoly" element={<Monopoly />} />
          <Route path="/DailyChallenges" element={<DailyChallenges />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />
          <Route path="/GameProfile" element={<GameProfile />} />


          {/* Forum Page Routes */}
          <Route path="/GlobalChat" element={<GlobalChat />} />

        </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
};

export default App;
