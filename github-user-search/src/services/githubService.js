import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

/**
 * Advanced GitHub User Search
 * @param {Object} params - search parameters
 * @param {string} params.username
 * @param {string} params.location
 * @param {number} params.minRepos
 * @param {number} params.page
 */
export const fetchAdvancedUsers = async ({ username, location, minRepos, page = 1 }) => {
  try {
    // Build query string
    let query = username ? `${username} in:login` : "";
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const response = await axios.get(BASE_URL, {
      params: { q: query.trim(), page, per_page: 10 },
      headers: API_KEY ? { Authorization: `token ${API_KEY}` } : {}
    });

    return response.data; // includes { items: [], total_count: number }
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};

