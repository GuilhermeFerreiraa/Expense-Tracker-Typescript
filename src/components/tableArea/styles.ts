import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  background-color: #f0ffe0;
  padding: 20px;
  box-shadow: 0 0 5px #CCC;
  border-radius: 0.75rem;
  margin-top: 1.5rem;
  color: #000;
  `;
// props width opcional '?'
export const TableHeadColumn = styled.th<{width?: number}>`
  padding: 0.75rem 0;
  width: ${props => props.width ? `${props.width}px` : 'auto'};
  text-align: left;
  border-bottom: 1px solid #8ff2a1;
  margin-bottom: 0.25rem;
  `;
