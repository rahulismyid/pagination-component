import styled from 'styled-components';

export const StyledPaginationContainer = styled.div`
  padding: 0 20px;
`;

export const StyledUl = styled.ul`
  list-style: none;
  padding: 0px;

  li {
    margin: 8px 0;
    padding: 5px 0;
    background: #faebd7;
    border-radius: 4px;

    &:hover {
      cursor: pointer;
      background: #16a306;
      color: white;
    }
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const StyledButton = styled.button`
  background-color: #3e23ab;
  color: white;
  border: 1px solid #ddd;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 4px;
  padding: 8px 20px;
  margin: 0 10px;

  &:hover {
    background-color: #16a306;
  }

  &:disabled {
    background-color: #ddd;
    color: #666;
    cursor: not-allowed;
  }

  &.active {
    background-color: #16a306;
  }

  /* Responsive styles */
  @media (max-width: 425px) {
    margin: 0 auto;
    padding: 8px 8px;
  }
`;

export const StyledEllipsis = styled.span`
  display: inline-block;
`;

export const StyledH1 = styled.h1`
  text-decoration: underline;
`;
