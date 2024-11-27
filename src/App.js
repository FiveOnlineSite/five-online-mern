import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./admin/pages/Dashboard";
import Blog from "./admin/pages/Blog/Blog";
import UserCreation from "./admin/pages/UserCreation/UserCreation";
import AddUser from "./admin/pages/UserCreation/AddUser";
import EditUser from "./admin/pages/UserCreation/EditUser";
import BlogCreation from "./admin/pages/BlogCreation/BlogCreation";
import AddBlog from "./admin/pages/BlogCreation/AddBlog";
import EditBlog from "./admin/pages/BlogCreation/EditBlog";
import BlogCategory from "./admin/pages/BlogCategory/BlogCategory";
import AddBlogCategory from "./admin/pages/BlogCategory/AddBlogCategory";
import EditBlogCategory from "./admin/pages/BlogCategory/EditBlogCategory";
import Login from "./admin/pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"/"} element={<Dashboard />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/blog"} element={<Blog />} />
          <Route path={"/user-creation"} element={<UserCreation />} />
          <Route path={"/user-creation/add"} element={<AddUser />} />
          <Route path={"/user-creation/edit"} element={<EditUser />} />
          <Route path={"/blog-creation"} element={<BlogCreation />} />
          <Route path={"/blog-creation/add"} element={<AddBlog />} />
          <Route path={"/blog-creation/edit"} element={<EditBlog />} />
          <Route path={"/blog-category"} element={<BlogCategory />} />
          <Route path={"/blog-category/add"} element={<AddBlogCategory />} />
          <Route path={"/blog-category/edit"} element={<EditBlogCategory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
