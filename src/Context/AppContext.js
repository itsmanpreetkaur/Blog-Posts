import { useState, createContext } from "react";
import { baseUrl } from "../baseUrl";
// 1. Creating the context
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  // data filling
  async function fetchBlogs(page = 1) {
    setLoading(true);

    let url = `${baseUrl}?page=${page}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }
  function handleChange(page) {
    setPage(page);
    fetchBlogs(page);
  }

  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogs,
    handleChange,
  };

  // provider
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
