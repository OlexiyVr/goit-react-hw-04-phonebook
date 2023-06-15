import styled from '@emotion/styled';

export const IconButtonStyle = styled.button`
  margin-left: 7px;
  border: none;
  border-radius: 50%;
  outline: none;
  padding: 10px;
  background-color: #400080;
  color: #FFD233;

  & svg {
    display: block;
  }

  &:hover {
    background-color: #5218fa;
    outline: 2px solid #FFD233;
  }
`;
