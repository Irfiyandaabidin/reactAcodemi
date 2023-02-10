import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Feed from "./components/Feed";
import VideoDetail from "./components/VideoDetail";
import SearchFeed from "./components/SearchFeed";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/search/:searchInput" element={<SearchFeed />} />
      </Routes>
    </div>
  );
}

export default App;
