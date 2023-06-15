import styled from '@emotion/styled';
import { Field } from 'formik';

export const Label = styled.label`
  margin: 10px;
  font-size: 25px;
  color: #FFD233;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled(Field)`
  margin: 0;
  font-size: 14px;
  outline: none;
  border: 2px solid #FFD233;
  border-radius: 5px;
  padding: 7px;
`;
