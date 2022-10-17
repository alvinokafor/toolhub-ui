import {Routes, Route} from 'react-router-dom'
import { Home } from "./pages/Home";
import { LeaderBoard } from './pages/LeaderBoard';
// import Nav from "./components/Nav";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/leaderboard' element={<LeaderBoard />} />
    </Routes>
  );
}

export default App;
