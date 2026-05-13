import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/index.jsx";
import Category from "./pages/Category/index.jsx";
import Group from "./pages/Group/index.jsx";
import Article from "./pages/Article/index.jsx";

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
    </Routes>
  );
};

export default App;