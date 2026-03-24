import { useState, useEffect } from 'react';
import Background from '../components/Shared/Background';
export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Replace with your actual Medium username
  const MEDIUM_USERNAME = '@tes.abviiitm'; 
  const RSS_URL = `https://medium.com/feed/${MEDIUM_USERNAME}`;
  const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${RSS_URL}`;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        // Removed the strict category filter to ensure all recent posts show up
        // Medium's RSS will return a maximum of 10 recent posts
        setArticles(data.items || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch articles:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
    <Background />
    <main className="max-w-4xl mx-auto px-6 py-24 w-full">
      
      {/* Page Header */}
      <div className="mb-16">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-text-main">
          Latest <span className="text-sapphire">Articles</span>
        </h1>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-text-muted font-bold text-xl animate-pulse">
          Fetching terminal logs...
        </div>
      )}

      {/* Articles List (Rows instead of Grid) */}
      <div className="flex flex-col gap-4">
        {!loading && articles.map((article) => (
          <a 
            key={article.guid} 
            href={article.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block bg-surface p-6 md:p-8 border border-surface hover:border-sapphire transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              
              {/* Date: Fixed width on desktop to align titles nicely */}
              <div className="text-text-muted text-sm font-bold md:w-32 shrink-0">
                {new Date(article.pubDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </div>

              {/* Title & Tags */}
              <div className="flex-grow">
                <h2 className="text-xl md:text-2xl font-black text-text-main group-hover:text-sapphire transition-colors mb-3 leading-tight">
                  {article.title}
                </h2>
                
                {/* Only render tags if the article actually has them */}
                {article.categories && article.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {article.categories.slice(0, 4).map((tag) => (
                      <span 
                        key={tag} 
                        className="bg-base text-teal text-xs font-bold px-3 py-1 uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Minimalist Hover Arrow (Hidden on mobile) */}
              <div className="hidden md:block text-surface group-hover:text-sapphire transition-colors text-3xl font-black">
                →
              </div>

            </div>
          </a>
        ))}
        
        {/* Empty State Fallback */}
        {!loading && articles.length === 0 && (
          <div className="text-text-muted font-bold text-xl border border-dashed border-surface p-10 text-center">
            No transmission data found.
          </div>
        )}
      </div>

    </main>
    </>
  );
}