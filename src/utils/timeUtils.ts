/**
 * Utility functions for formatting timestamps and relative time
 */

export const getRelativeTime = (timestamp: number): string => {
  const now = Date.now();
  const diff = now - timestamp;
  
  // Convert to different time units
  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;
  
  if (diff < minute) {
    return 'Just now';
  } else if (diff < hour) {
    const minutes = Math.floor(diff / minute);
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  } else if (diff < day) {
    const hours = Math.floor(diff / hour);
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  } else if (diff < week) {
    const days = Math.floor(diff / day);
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  } else if (diff < month) {
    const weeks = Math.floor(diff / week);
    return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
  } else if (diff < year) {
    const months = Math.floor(diff / month);
    if (months < 2) {
      return 'About a month ago';
    } else if (months >= 11) {
      return '11 months ago';
    } else {
      return `${months} months ago`;
    }
  } else {
    const years = Math.floor(diff / year);
    if (years === 1) {
      return 'About a year ago';
    } else {
      return `About ${years} years ago`;
    }
  }
};

export const getFullTimestamp = (timestamp: number): string => {
  const date = new Date(timestamp);
  // Format without seconds, in user's timezone
  return date.toLocaleString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};