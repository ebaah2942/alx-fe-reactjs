import { useState } from "react";
import { fetchAdvancedUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleSearch = async (newPage = 1) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchAdvancedUsers({
        username,
        location,
        minRepos,
        page: newPage
      });
      setUsers(newPage === 1 ? data.items : [...users, ...data.items]);
      setHasMore(data.items.length === 10);
      setPage(newPage);
    } catch (err) {
      setError(err.message);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(1);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold mb-6 text-center">GitHub Advanced User Search</h1>

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-3 mb-6">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="sm:col-span-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Results */}
      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id} className="flex items-center p-4 border rounded-lg hover:shadow">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h2 className="text-lg font-semibold">{user.login}</h2>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Profile
              </a>
            </div>
          </li>
        ))}
      </ul>

      {/* Load More */}
      {hasMore && !loading && (
        <div className="text-center mt-6">
          <button
            onClick={() => handleSearch(page + 1)}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;



// import { useState } from "react";
// import { fetchUserData } from "../services/githubService";

// function Search() {
//   const [username, setUsername] = useState("");     
//   const [user, setUser] = useState(null);           
//   const [loading, setLoading] = useState(false);    
//   const [error, setError] = useState(null);         

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!username.trim()) return;

//     setLoading(true);
//     setError(null);
//     setUser(null);

//     try {
//       const data = await fetchUserData(username);
//       setUser(data);
//     } catch (err) {
//       setError("Looks like we cant find the user");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "40px" }}>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter GitHub username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           style={{ padding: "8px", width: "250px" }}
//         />
//         <button type="submit" style={{ padding: "8px 12px", marginLeft: "10px" }}>
//           Search
//         </button>
//       </form>

//       {/* Conditional Rendering */}
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {user && (
//         <div style={{ marginTop: "20px" }}>
//           <img
//             src={user.avatar_url}
//             alt={user.login}
//             width="120"
//             style={{ borderRadius: "50%" }}
//           />
//           <h2>{user.name || user.login}</h2>
//           <a href={user.html_url} target="_blank" rel="noopener noreferrer">
//             View GitHub Profile
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Search;
