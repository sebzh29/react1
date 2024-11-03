import React from 'react';
import './Profile.css';

const Profile = () => {
    const user = {
        name: 'John Doe',
        profileImage: 'https://placehold.co/150',
        bio: 'Développeur passionné par les technologies web et mobile.',
        friends: ['Alice', 'Bob', 'Charlie'],
        posts: [
          { content: 'Aujourd\'hui, j\'ai appris à utiliser React!', date: '2024-01-15' },
          { content: 'Regardez mon nouveau projet sur GitHub.', date: '2024-01-20' },
        ],
      };
    
      return (
        <div className="profile-page">
          <div className="profile-header">
            <img src={user.profileImage} alt={`${user.name}'s profile`} />
            <h2>{user.name}</h2>
          </div>
    
          <div className="bio">
            <h3>Bio</h3>
            <p>{user.bio}</p>
          </div>
    
          <div className="friends-list">
            <h3>Friends</h3>
            <ul>
              {user.friends.map((friend, index) => (
                <li key={index}>{friend}</li>
              ))}
            </ul>
          </div>
    
          <div className="posts-list">
            <h3>Recent Posts</h3>
            {user.posts.map((post, index) => (
              <div key={index} className="post">
                <p>{post.content}</p>
                <small>{post.date}</small>
              </div>
            ))}
          </div>
        </div>
      );
    }   


export default Profile;