import React, { useEffect, useState } from 'react';
import HeatMap from '@uiw/react-heat-map';
import Tooltip from '@uiw/react-tooltip';

import './github.css' 

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
        console.log('GitHub API response:', commitData); // Log the full response
        // Group commits by date and sum up counts
        const groupedData = commitData.reduce((acc, commit) => {
          const date = commit.date.split('T')[0];  // Assuming date is in ISO format and includes time

          //console.log('Filtered commit data:', groupedData);

          if (!acc[date]) {
            acc[date] = 0;
          }
          acc[date] += commit.count;
          return acc;
        }, {});

        // Convert grouped data object to array required by HeatMap
        const heatMapData = Object.keys(groupedData).map(date => ({
          date: date.replace(/-/g, '/'), // Date converted from European to American
          count: groupedData[date]
        }));

        setCommitsByDay(heatMapData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCommits();
  }, []);

  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(endDate.getDate() - 1)
  startDate.setFullYear(startDate.getFullYear() - 1);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='github'>
    <p className='GithubText'>Commit History (WIP)</p>
    <div className='gitHeatmap flex justify-center'>
    
      <HeatMap
        value={commitsByDay}
        weekLabels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
        startDate={startDate} // Start from the beginning of the current year
        style={{ color: '#FFB633', '--rhm-rect-active': '' }}
        endDate={endDate}
        rectSize={16}
        width={990}
        rectRender={(props, data) => {
        if (!data.count) return <rect {...props} />;
        return (
          <Tooltip placement="top" content={`count: ${data.count || 0}`}>
            <rect {...props} />
          </Tooltip>
        );}}
        rectProps={{
          rx: 2
        }}
        panelColors={{
        
        0: "var(--secondary)",
        2: '#ffdd9f',
        4: '#ffc660',
        10: '#ffc660',
        20: 'var(--primary)',
        30: 'var(--primary)',
        }}
      />
    </div>
    </div>
  );
};

export default Github;