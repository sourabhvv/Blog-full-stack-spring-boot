import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MDEditor from "@uiw/react-md-editor";
import { FaSave, FaTimes } from 'react-icons/fa';
import { BASE_URL } from '../util/config';

function EditBlog() {
  const [article, setArticle] = useState({ title: '', content: '' });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${BASE_URL}/public/blog/${id}`)
      .then((response) => {
        if (response.status === 200) {


            const fetchedArticle = response.data;
            fetchedArticle.title = deslugify(fetchedArticle.title);
            setArticle(fetchedArticle);
        }
      })
      .catch((error) => {
        console.error("Error fetching article:", error);
        setError("Failed to load the article. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  function deslugify(str) {
    return str
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase())
      .trim();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setArticle(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${BASE_URL}/blog/edit/${id}`,
        article,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 200) {
        alert("Blog updated successfully!");
        // Optionally redirect to the blog post or blog list
      }
    } catch (error) {
      console.error('Error updating blog:', error);
      alert("Failed to update the blog. Please try again.");
    }
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Edit Blog</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-2xl rounded-lg p-6 mb-8">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={article.title}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your blog title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 font-semibold mb-2">
            Content
          </label>
          <MDEditor
            value={article.content}
            onChange={(value) => setArticle(prev => ({ ...prev, content: value }))}
            preview="edit"
            height={300}
            className="w-full"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => window.history.back()}
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
    </div>
  );
}

export default EditBlog;