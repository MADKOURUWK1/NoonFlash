
import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full"
        width="1440"
        height="1024"
        viewBox="0 0 1440 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <g opacity="0.2">
          <path
            d="M-344.498 488.583C-223.902 344.405 13.9161 247.783 238.388 349.034C511.458 471.217 639.267 680.122 813.292 632.74C1021.56 575.642 1007.47 348.681 1205.82 251.488C1404.17 154.296 1629.75 220.671 1756.5 365.111"
            stroke="#007BFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M-344.498 518.583C-194.596 384.975 87.051 328.665 238.388 449.034C421.037 594.025 504.646 764.12 702.73 732.74C943.435 694.618 1009.68 450.772 1205.82 351.488C1402.09 252.126 1604.42 320.916 1756.5 465.111"
            stroke="#007BFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
           <path
            d="M-344.498 548.583C-165.29 425.565 160.187 399.547 238.388 549.034C333.197 728.007 380.056 830.118 592.167 800.013C856.883 762.38 1011.89 500.864 1205.82 451.488C1400.12 402.015 1579.09 469.162 1756.5 565.111"
            stroke="#007BFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};
