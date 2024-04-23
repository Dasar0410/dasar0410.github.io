import React, { useEffect, useState } from 'react';
import HeatMap from '@uiw/react-heat-map';

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

        // Group commits by date and sum up counts
        const groupedData = commitData.reduce((acc, commit) => {
          const date = commit.date.split('T')[0];  // Assuming date is in ISO format and includes time
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
    
    <div className='gitHeatmap flex justify-center'>
    
      <HeatMap
        value={commitsByDay}
        weekLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
        startDate={new Date(new Date().getFullYear(), 0, 1)} // Start from the beginning of the current year
        style={{ '--rhm-rect': '#b9b9b9' }}
        rectSize={16}
        width={350}
        legendRender={(props) => <rect {...props} y={props.y + 10} rx={2} />}
        rectProps={{
          rx: 2
        }}
        panelColors={{
        
        0: '#100F2E',
        2: '#ffdd9f',
        4: '#ffdd9f',
        10: '#ffc660',
        20: '#ffb633',
        30: '#ffb633',
        }}
      />
    </div>
    </>
  );
};

export default Github;