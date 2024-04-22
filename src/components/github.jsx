import React, { useEffect, useState } from 'react';

const Github = () => {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await fetch('https://worker-aged-lab-b68e.danielsarjomaa.workers.dev');  // Adjust this URL to your Cloudflare worker's URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const commitData = await response.json();
        setCommits(commitData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCommits();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>GitHub Commit Data</h1>
      {commits.map((commit, index) => (
        <div key={index}>
          Date: {commit.date}, Number of Commits: {commit.count}
        </div>
      ))}
    </div>
  );
};

export default Github;