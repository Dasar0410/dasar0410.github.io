import React, { useEffect, useState } from 'react';

const Github = () => {
  const [commitsByDay, setCommitsByDay] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await fetch('https://worker-aged-lab-b68e.danielsarjomaa.workers.dev');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const commitData = await response.json();

        // Group commits by date and sum up counts
        const groupedData = commitData.reduce((acc, commit) => {
          const date = commit.date.split('T')[0];  // Assuming date is in ISO format and includes time
          if (!acc[date]) {
            acc[date] = { date, count: 0 };
          }
          acc[date].count += commit.count;
          return acc;
        }, {});

        // Convert grouped data object to array
        setCommitsByDay(Object.values(groupedData));
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
      {commitsByDay.map(({ date, count }, index) => (
        <div key={index}>
          Date: {date}, Number of Commits: {count}
        </div>
      ))}
    </div>
  );
};

export default Github;