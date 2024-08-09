import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../Components/Navigation";
import ProfileSearchForm from "../Components/ProfileSearchForm";
import './Github.css';
import Spiner from "./Spiner";

const BASE_URL = "https://api.github.com/users";

function Github() {
    const [username, setUsername] = useState("Engglala243");
    const [profile, setProfile] = useState({ data: null, isLoading: true, error: null });
    const [repos, setRepos] = useState([]);
    const [showRepos, setShowRepos] = useState(false);

    useEffect(() => {
        async function fetchUser() {
            try {
                await new Promise((resolve) => setTimeout(resolve, 1500));
                
                const userResult = await axios.get(`${BASE_URL}/${username}`);
                setProfile({ data: userResult.data, isLoading: false, error: null });
            } catch (error) {
                console.error("Error fetching the GitHub user profile:", error);
                setProfile({ data: null, isLoading: false, error: "Invalid Username. Enter a correct username." });
            }
        }
        fetchUser();
    }, [username]);

    useEffect(() => {
        if (showRepos) {
            async function fetchRepos() {
                try {
                    const reposResult = await axios.get(`${BASE_URL}/${username}/repos`);
                    setRepos(reposResult.data);
                } catch (error) {
                    console.error("Error fetching the GitHub repositories:", error);
                    setRepos([]);
                }
            }
            fetchRepos();
        }
    }, [showRepos, username]);

    const search = (username) => {
        setProfile({ data: null, isLoading: true, error: null });
        setUsername(username);
        setShowRepos(false);
    };

    const handleShowRepos = () => {
        setShowRepos(!showRepos);
    };

    if (profile.isLoading) return <i><Spiner /></i>;

    document.title = 'React page - Github Profile';

    return (
        <>
            <Navigation />
            <div className="profile-viewer-container">
                <ProfileSearchForm search={search} />
                {profile.error ? (
                    <div className="error-message">
                        <h2>{profile.error}</h2>
                        <p>Try searching for a different username.</p>
                    </div>
                ) : (
                    profile.data && (
                        <div className="profile-info">
                            <h2>{profile.data.name}</h2>
                            <img src={profile.data.avatar_url} alt={`${profile.data.name}'s avatar`} />
                            <p><strong>Last Repo Pushed Date:</strong> {new Date(profile.data.updated_at).toLocaleDateString()}</p>
                            <p><strong>Last Repo Pushed Time:</strong> {new Date(profile.data.updated_at).toLocaleTimeString()}</p>
                            <p><strong>Total Repositories:</strong> {profile.data.public_repos}</p>
                            <p><strong>Followers:</strong> {profile.data.followers}</p>

                            <button onClick={handleShowRepos}>
                                {showRepos ? "Hide Repositories" : "Show Repositories"}
                            </button>
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
                    )
                )}
            </div>
        </>
    );
}

export default Github;
