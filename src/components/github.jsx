import React, { useEffect, useState } from 'react';


const username = 'Dasar0410';


const Github = () => {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/events`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const commitData = data.filter(event => event.type === 'PushEvent')
                               .map(event => ({
                                  date: event.created_at,
                                  count: event.payload.commits.length
                               }));
        setCommits(commitData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCommits();
  }, []); // Empty dependency array means this effect will only run once after the component mounts

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