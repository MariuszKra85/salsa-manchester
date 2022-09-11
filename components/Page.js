import { PropTypes } from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@font-face{
  font-family: 'radnika_next';
  src: url('./static/radnikanext-medium-webfont.woff2')
  format('woff2');
  font-weight: normal;
  font-style: normal;
}
html{
  --red: #ff0000;
  --black: #000000;
  --grey: #3a3a4a;
  --lightGrey: #e1e1e1;
  --lightGray: #e1e1e1;
  --offWhite: #ededed;
  --maxWidth: 1000px;
  --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.1);

  font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
  Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  padding: 0;
  margin: 0;
  font-size: 10px;
  line-height: 2;
  background-color: --black;
} 
a{
  text-decoration: none;
  color: var(--black)
}
body{
  margin: 0;
  background-color: var(--black);
}


button{
  
  font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
  Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

const InnerStyle = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page({ children }) {
  return (
    <>
      <GlobalStyles />
      <InnerStyle>{children}</InnerStyle>
    </>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
