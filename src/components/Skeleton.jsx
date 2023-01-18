import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = () => {
  return (
    <ContentLoader
      width={800}
      height={940}
      viewBox="0 0 800 940"
      backgroundColor="#f5f5f5"
      foregroundColor="#dbdbdb"
    >
      <rect x="4" y="8" rx="3" ry="3" width="7" height="288" />
      <rect x="6" y="289" rx="3" ry="3" width="669" height="8" />
      <rect x="670" y="9" rx="3" ry="3" width="6" height="285" />
      <rect x="55" y="42" rx="16" ry="16" width="274" height="216" />
      <rect x="412" y="113" rx="3" ry="3" width="102" height="7" />
      <rect x="402" y="91" rx="3" ry="3" width="178" height="6" />
      <rect x="405" y="139" rx="3" ry="3" width="178" height="6" />
      <rect x="416" y="162" rx="3" ry="3" width="102" height="7" />
      <rect x="405" y="189" rx="3" ry="3" width="178" height="6" />
      <rect x="5" y="8" rx="3" ry="3" width="669" height="7" />
      <rect x="406" y="223" rx="14" ry="14" width="72" height="32" />
      <rect x="505" y="224" rx="14" ry="14" width="72" height="32" />
      <rect x="376" y="41" rx="3" ry="3" width="231" height="29" />
    </ContentLoader>
  );
};

Skeleton.metadata = {
  name: 'Sridhar Easwaran',
  github: 'sridhareaswaran',
  description: 'Events',
  filename: 'EventsLoader',
};

export const ImageGrid = () => {
  return (
    <ContentLoader
      width={900}
      height={1200}
      viewBox="0 0 900 1200"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="537" y="9" rx="2" ry="2" width="140" height="10" />
      <rect x="14" y="30" rx="2" ry="2" width="667" height="11" />
      <rect x="12" y="58" rx="2" ry="2" width="211" height="211" />
      <rect x="240" y="57" rx="2" ry="2" width="211" height="211" />
      <rect x="467" y="56" rx="2" ry="2" width="211" height="211" />
      <rect x="12" y="283" rx="2" ry="2" width="211" height="211" />
      <rect x="240" y="281" rx="2" ry="2" width="211" height="211" />
      <rect x="468" y="279" rx="2" ry="2" width="211" height="211" />
      <circle cx="286" cy="536" r="12" />
      <circle cx="319" cy="535" r="12" />
      <circle cx="353" cy="535" r="12" />
      <rect x="378" y="524" rx="0" ry="0" width="52" height="24" />
      <rect x="210" y="523" rx="0" ry="0" width="52" height="24" />
      <circle cx="210" cy="535" r="12" />
      <circle cx="428" cy="536" r="12" />
    </ContentLoader>
  );
};

ImageGrid.metadata = {
  name: 'Hassan Tijani.A',
  github: 'surepeps',
  description: 'Image Grid with Pagination',
  filename: 'ImageGrid',
};
