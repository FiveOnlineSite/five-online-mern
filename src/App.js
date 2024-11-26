import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./admin/pages/Dashboard";
import Blog from "./admin/pages/Blog/Blog";
import UserCreation from "./admin/pages/UserCreation/UserCreation";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"/"} element={<Dashboard />} />
          <Route path={"/blog"} element={<Blog />} />
          <Route path={"/user-creation"} element={<UserCreation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
