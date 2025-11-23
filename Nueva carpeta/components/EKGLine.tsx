import React from 'react';

const EKGLine: React.FC = () => (
  <div className="mt-12 pt-1 max-w-4xl">
    <svg viewBox="0 0 200 20" className="w-full h-auto" preserveAspectRatio="none">
      <path
        className="ekg-line-path-base"
        d="M 0 10 L 13 10 L 15 9 L 17 10 L 23 10 L 25 12 L 28 2 L 31 18 L 33 10 L 36 8 L 41 10 L 70 10 L 72 9 L 74 10 L 80 10 L 82 12 L 85 2 L 88 18 L 90 10 L 93 8 L 98 10 L 127 10 L 129 9 L 131 10 L 137 10 L 139 12 L 142 2 L 145 18 L 147 10 L 150 8 L 155 10 L 200 10"
        fill="none"
        strokeWidth="1"
      />
      <path
        className="ekg-line-path"
        d="M 0 10 L 13 10 L 15 9 L 17 10 L 23 10 L 25 12 L 28 2 L 31 18 L 33 10 L 36 8 L 41 10 L 70 10 L 72 9 L 74 10 L 80 10 L 82 12 L 85 2 L 88 18 L 90 10 L 93 8 L 98 10 L 127 10 L 129 9 L 131 10 L 137 10 L 139 12 L 142 2 L 145 18 L 147 10 L 150 8 L 155 10 L 200 10"
        fill="none"
        stroke="#f59e0b" // amber-500
        strokeWidth="0.5"
      />
    </svg>
  </div>
);

export default EKGLine;