import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../util/config';
import LoadingBar from 'react-top-loading-bar';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Article() {
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const ref = useRef(null);

  const fetchArticle = useCallback(async () => {
    if (ref.current) {
      ref.current.continuousStart();
    }
    try {
      const response = await axios.get(`${BASE_URL}/public/blog/${id}`);
      setArticle(response.data);
    } catch (error) {
      setError(error);
    } finally {
      if (ref.current) {
        ref.current.complete();
      }
    }
  }, [id]);

  useEffect(() => {
    fetchArticle();
  }, [fetchArticle]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <div className="max-w-3xl w-full">
        <LoadingBar color="#7C00FE" ref={ref} shadow={true} />
        {error && <p className="text-red-500 font-medium">Error: {error.message}</p>}
        {article ? (
          <div>
            <h1 className="text-4xl font-bold mb-4 text-gray-800">{article.title}</h1>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <div className="mb-4">
                        <div className="w-full relative bg-slate-100 flex items-center justify-between py-2 px-4 rounded-t-lg">
                          <span className="text-sm">{match[1]}</span>
                          <button
                            className="text-sm hover:bg-slate-200 px-2 py-1 rounded transition-colors duration-200"
                            onClick={() => copyToClipboard(String(children).trim())}
                            title="Copy to clipboard"
                          >
                            Copy
                          </button>
                        </div>
                        <SyntaxHighlighter
                          style={vscDarkPlus}
                          language={match[1]}
                          className="rounded-b-lg text-sm"
                        >
                          {String(children).trim()}
                        </SyntaxHighlighter>
                      </div>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
                className="prose"
              >
                {article.content}
              </ReactMarkdown>
            </div>
          </div>
        ) : (
          !error && <p className="text-gray-500 font-medium">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Article;