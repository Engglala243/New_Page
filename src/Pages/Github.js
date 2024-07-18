import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../Components/Navigation";
import ProfileSearchForm from "../Components/ProfileSearchForm";
import './Github.css';

let BASE_URL = "https://api.github.com/users";

function Github() {
    let [username, setUsername] = useState("adarsh24688");
    let [profile, setProfile] = useState({ data: null, isLoading: true, error: null });
    let [repos, setRepos] = useState([]);
    let [showRepos, setShowRepos] = useState(false);
  

  useEffect(() => {
    async function fetchUser() {
      try {
        let userResult = await axios.get(`${BASE_URL}/${username}`);
        setProfile({ data: userResult.data, isLoading: false });
      } catch (error) {
        console.error("Error fetching the GitHub user profile:", error);
        setProfile({ data: null, isLoading: false, error: "Invalid username"  });
      }
    }
    fetchUser();
  }, [username]);

  useEffect(() => {
    if (showRepos) {
      async function fetchRepos() {
        try {
          let reposResult = await axios.get(`${BASE_URL}/${username}/repos`);
          setRepos(reposResult.data);
        } catch (error) {
          console.error("Error fetching the GitHub repositories:", error);
          setRepos([]);
        }
      }
      fetchRepos();
    }
  }, [showRepos, username]);

  let search = (username) => {
    setProfile({ data: null, isLoading: true, error: null });
    setUsername(username);
    setShowRepos(false);
  };

  const handleShowRepos = () => {
    setShowRepos(!showRepos);
  };

  if (profile.isLoading) return <i>Loading...</i>;
  if (profile.error) return <div className="error-message">{profile.error}</div>;
  if (!profile.data) return null;

  let date = new Date(profile.data.updated_at);
  let formattedDate = date.toLocaleDateString();
  let formattedTime = date.toLocaleTimeString();

  document.title = 'React page - Github Profile';
  return (
    <>
      <Navigation />
      <div className="profile-viewer-container">
        <ProfileSearchForm search={search} />
        {profile.data ? (
          <div className="profile-info">
            <h2>{profile.data.name}</h2>
            <img src={profile.data.avatar_url} alt={`${profile.data.name}'s avatar`} />
            <p><strong>Last Repo Pushed Date:</strong> {formattedDate}</p>
            <p><strong>Last Repo Pushed Time:</strong> {formattedTime}</p>
            <p><strong>Total Repositories:</strong> {profile.data.public_repos}</p>
            <p><strong>Followers:</strong> {profile.data.followers}</p>

            <button onClick={handleShowRepos}>{showRepos ? "Hide Repositories" : "Show Repositories"}</button>
            {showRepos && repos.length > 0 && (
              <div className="repo-list">
                <h3>Repositories:</h3>
                <ul>
                  {repos.map(repo => (
                    <li key={repo.id}>
                      <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (<p>User not found</p>)}
      </div>
    </>
  );
}
export default Github;