import axios from 'axios';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

function CreateBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const token = localStorage.getItem('token');


  function resetBlog(){
    setTitle(" ");
    setContent(" ");

  }
  async function handleSubmit(event) {
    event.preventDefault();
    await axios
      .post(
        'http://localhost:8005/blog/create',
        {
          title: title,
          content: content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(function (response) {

        if (response.status === 200) {

          resetBlog();
        }
        
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Create a Blog</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-700 font-semibold mb-2">
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              rows="10"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Create Blog
          </button>
        </form>
        <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-4">Your Blogs</h2>
        <div>
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div key={blog.id} className="bg-white shadow-lg rounded-lg p-6 mb-4">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
                <ReactMarkdown rehypePlugins={[rehypeRaw]} className="prose">
                  {blog.content}
                </ReactMarkdown>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No blogs created yet. Start by creating a new blog above.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateBlogs;