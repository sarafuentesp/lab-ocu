import * as React from 'react';

export const useExpandable = (initialValue) => {
  const [isExpanded, setIsExpanded] = React.useState(initialValue);

  const onToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return { isExpanded, onToggle };
};
