import React from 'react';
import { StyledLink, StyledNav } from './top-menu.style';

const TopMenu = () => {
  return (
    <StyledNav>
      <StyledLink to='/'>⌂ Back Home</StyledLink>
      <StyledLink to='/cornelfilip'>Cornel Filip</StyledLink>
      {/* Add your custom link below this line */}
      {/* <StyledLink to="/your-github-user-name-all-in-lowercase">Firstname Lastname</StyledLink> */}
      {/* Add your custom link above this line */}
    </StyledNav>
  );
};

export { TopMenu };
