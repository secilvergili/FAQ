import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/index.jsx";
import Category from "./pages/Category/index.jsx";
import Group from "./pages/Group/index.jsx";
import Article from "./pages/Article/index.jsx";
import Login from "./pages/Login/index.jsx";
import Admin from "./pages/Admin/index.jsx";
import ProtectedRoute from "./components/protectedRoutes.jsx";
import NewArticle from "./pages/NewArticle/index.jsx";
import EditArticle from "./pages/EditArticle/index.jsx";

const App = () => {
  return (
    <Routes>
      {/* HOME */}
      <Route path="/" element={<Home />} />

      {/* CATEGORY */}
      <Route path="/category/:id" element={<Category />} />

      {/* GROUP */}
      <Route path="/group/:id" element={<Group />} />

      {/* ARTICLE */}
      <Route path="/article/:id" element={<Article />} />
      {/* LOGIN */}
      <Route path="/login" element={<Login />} />
      {/* ADMIN */}
      <Route path="/admin"
      element={
      
      <ProtectedRoute>
        <Admin />
      </ProtectedRoute>

      } />
      <Route path="/admin/new" element={<NewArticle />} />
      <Route path="/admin/edit/:id" element={<EditArticle />} />
    </Routes>
  );
};

export default App;