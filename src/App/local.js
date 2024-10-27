export const setLocal = (posts) => {
  localStorage.setItem('posts', JSON.stringify(posts)); // Save posts in localStorage
};

export const getFromLocal = () => {
  const db = localStorage.getItem('posts');

  // Handle case where localStorage is empty or contains invalid data
  if (!db) {
    return []; // Return an empty array if no data is found
  }

  try {
    return JSON.parse(db); // Attempt to parse the data
  } catch (error) {
    console.error("Error parsing posts from localStorage:", error);
    return []; // Return an empty array if parsing fails
  }
};
