import React, { useState } from 'react';

export default function AIToolsFinderAgent() {
  const [tools, setTools] = useState([
    {
      name: 'HeyGen',
      useCase: 'Video creation with avatars + voiceover',
      impact: 'Replaces full UGC team for creatives',
      score: 9.2
    },
    {
      name: 'Minea',
      useCase: 'Product + Ad Spy Tool (TikTok/Meta)',
      impact: 'Finds high-volume winning products daily',
      score: 8.9
    },
    {
      name: 'Runway ML',
      useCase: 'AI-powered video editor with motion tracking',
      impact: 'Removes video editing cost, 10x speed boost',
      score: 8.5
    }
  ]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🛠️ AI Tools Finder Agent — Intelligent Scanner + Evaluator</h1>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '2rem' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Tool Name</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Use Case</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Impact / Value</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Score</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool, idx) => (
            <tr key={idx}>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{tool.name}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{tool.useCase}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{tool.impact}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{tool.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
