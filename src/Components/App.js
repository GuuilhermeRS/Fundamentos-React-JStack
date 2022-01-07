import React, { useState } from 'react';

import Header from './Header';
import Post from './Post';


function App() {
  const [theme, setTheme] = useState('dark');

  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 20, read: false },
    { id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 50, read: true },
    { id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 10, read: false },
  ]);

  function handleToggleTheme() {
    setTheme((prevState) => (
      prevState === 'dark'
      ? 'light'
      : 'dark'
    ));
  }

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Subtitle#0${prevState.length + 1}`,
        likes: 50,
        read: false,
      }
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState =>
      prevState.filter(post => post.id !== postId)
    ));
  }

  return (
    <>
      <Header
      theme={theme}
        onToggleTheme={handleToggleTheme}
      >
        <h2>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr/>

      {posts.map(post => (
        <Post 
          key={post.id}
          onRemove={handleRemovePost}
          post={post}
          theme={theme}
        />
      ))}    
    </>
  );
}

export default App;
