import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import MDEditor from "@uiw/react-md-editor";
import { motion } from 'framer-motion';
import { FaPlus, FaSave, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function CreateBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const token = localStorage.getItem('token');
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");
  const [expandedArticles, setExpandedArticles] = useState([]);

  function deslugify(str) {
    return str
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase())
      .trim();
  }

  useEffect(() => {
    axios
      .get("http://localhost:8005/blog",{
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.status === 200) {
          setArticles(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);

 

  const filteredArticles = articles.filter((article) => {
    if (!filterType || article.type === filterType) {
      return article.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return false;
  });


  function resetBlog() {
    setTitle('');
    setContent('');
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8005/blog/create',
        { title, content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 200) {
        resetBlog();
        setIsCreating(false);
        fetchBlogs();
      }
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  }

  return (
    <div className="min-h-screen  flex flex-col items-center p-6">
      <div className="max-w-4xl w-full">
       

        <h1           className="text-5xl font-bold text-gray-800 mb-6 text-center"
        > Your Blog Dashboard</h1>

        {!isCreating ? (
          <button
            
            onClick={() => setIsCreating(true)}
            className="w-full bg-blue-500 text-white py-4 rounded-lg hover:bg-blue-600 transition duration-200 flex items-center justify-center text-lg font-semibold mb-8"
          >
            <FaPlus className="mr-2" /> Create New Blog
          </button>
        ) : (
          <form 
           
            onSubmit={handleSubmit} 
            className="bg-white shadow-2xl rounded-lg p-6 mb-8"
          >
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your blog title"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="content" className="block text-gray-700 font-semibold mb-2">
                Content
              </label>
              <MDEditor
                value={content}
                onChange={setContent}
                preview="edit"
                height={300}
                className="w-full"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
              
                type="button"
                onClick={() => setIsCreating(false)}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200 flex items-center"
              >
                <FaTimes className="mr-2" /> Cancel
              </button>
              <button
                
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200 flex items-center"
              >
                <FaSave className="mr-2" /> Save Blog
              </button>
            </div>
          </form>
        )}

        <h2 
         
          className="text-3xl font-bold text-gray-800 mt-12 mb-4"
        >
          Your Blogs
        </h2>
       
        <div className="space-y-6">
        <section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
    </div> 
    <div class="grid gap-8 lg:grid-cols-1">
      {filteredArticles.map((article) => (
        <li
          key={article.id}
          class="relative p-6 overflow-hidden shadow-xl rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
        >
          <article class="space-y-2">
            <div class="flex items-center mb-5 text-gray-500">
              <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800 mr-2">
                Article
              </span>
              <span class="text-sm">{article.createdAt}</span>
            </div>
            <div class="flex items-left justify-left mb-4">
              {/* <img
                class="w-16 h-16 rounded-full object-cover border-2 border-primary-500 shadow-lg"
                src={article.image}
                alt={`${article.author} avatar`}
              /> */}
            </div>
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {deslugify(article.title)}
            </h2>
           
            <div class="flex justify-between items-center">
              <span class="font-medium dark:text-white">
                {article.author}
              </span>
              <a href={`/article/${article.title}`} class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                Read more
                <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>

              <Link to={`/edit/${article.title}`} class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                 Edit
                <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </Link>
            </div>
          </article>
        </li>
      ))}
    </div>  
  </div>
</section>
        </div>
      </div>
    </div>
  );
}

export default CreateBlogs;