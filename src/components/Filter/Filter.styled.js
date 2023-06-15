import styled from '@emotion/styled';

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Input = styled.input`
  margin: 0;
  outline: none;
  width: 45%;
  border: 2px solid #FFD233;
  border-radius: 5px;
  padding: 10px;

  &:focus,
  &:hover {
    outline-color: #400080;
  }
`;

export const Label = styled.label`
  font-size: 26px;
  letter-spacing: 1px;
  color: #5218fa;

`;
