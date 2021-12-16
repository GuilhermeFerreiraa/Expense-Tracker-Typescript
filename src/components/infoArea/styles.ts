import styled from "styled-components";

export const Container = styled.div`
  background-color: #e0ffe0;
  box-shadow: 0 0 5px #ccc;
  border-radius: 0.5rem;
  padding: 20px;
  margin-top: -2.25rem;
  display:flex;
  align-items: center;
`; 

export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const MonthArrow = styled.div`
  width: 2.5rem;
  text-align: center;
  font-size: 2rem;
  cursor: pointer;
`;

export const MonthTitle = styled.div`
  flex:1;
  text-align: center;
`;

export const ResumeArea = styled.div`
  flex: 2;
  display: flex;
`;