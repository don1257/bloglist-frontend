import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import Login from "./components/Login";
import CreateBlogs from "./components/CreateBlogs";

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState()

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )
  }, [])



  return (
    <div>
      {user ? null : <Login></Login> }
      {user ? <CreateBlogs></CreateBlogs> : null}
      <h2>blogs</h2>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
}

export default App
