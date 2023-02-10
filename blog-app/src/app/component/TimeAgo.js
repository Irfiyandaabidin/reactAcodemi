import { parseISO, formatDistanceToNow } from "date-fns/esm";
import React from "react";

const TimeAgo = ({ timestamp }) => {
  const date = parseISO(timestamp);
  const timeAgo = formatDistanceToNow(date);

  return (
    <div>
      <p className="text-sm text-gray-700">{timeAgo}</p>
    </div>
  );
};

export default TimeAgo;
