import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

import { ThemeContext } from '../../ThemeContext';

export default function Header() {
  const { theme, onToggleTheme } = useContext(ThemeContext);
  const history = useHistory();

  function handleNavigate() {
    history.push('/posts');
  }

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button
        type="button"
        onClick={onToggleTheme}
      >
        {theme === 'dark' ? '🌞' : '🌚'}
      </button>
      <button onClick={handleNavigate} style={{ color: '#fff' }}>Posts</button>
    </Container>
  );
}