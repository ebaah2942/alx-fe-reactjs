import axios from "axios";

import axios from "axios";

const BASE_URL = "https://api.github.com/users";

// 🔑 Load GitHub API key from .env
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

/**
 * Fetch user data from GitHub
 * @param {string} username - GitHub username
 * @returns {Promise<Object>}
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`, {
      headers: API_KEY
        ? { Authorization: `token ${API_KEY}` }
        : {} // fallback to no auth if no key
    });
    return response.data;
  } catch (error) {
    throw new Error("Looks like we cant find the user");
  }
};
