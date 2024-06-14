import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import Pagination from "./Components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./Context/AppContext";

function App() {
  const { fetchBlogs } = useContext(AppContext);
  useEffect(() => fetchBlogs(), []);
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}

export default App;

