import PostList from "./app/post/postList";
import Navbar from "./app/component/Navbar";
import { Route, Routes } from "react-router-dom";
import AddPost from "./app/post/AddPost";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="max-w-2xl mx-auto pt-8">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="add-post" element={<AddPost />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
