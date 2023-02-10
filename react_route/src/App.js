import { Route, Routes, Router } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Alamat from "./components/Alamat";
import Contact from "./components/Contact";
import Email from "./components/Email";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import DetailPost from "./components/Posts/DetailPost";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />}>
          <Route index element={<Email />} />
          <Route exact path="email" element={<Email />} />
          <Route exact path="alamat" element={<Alamat />} />
        </Route>
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />

        {/* POSTS */}
        <Route path="post" element={<Posts />}>
          <Route path=":postId" element={<DetailPost />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
