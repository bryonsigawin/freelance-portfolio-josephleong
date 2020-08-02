import styled from 'styled-components'

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.5rem 0 1.5rem;
`

export const FilterItem = styled.div`
  color: ${(props) => (props.isActive ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.6)')};
  cursor: pointer;
  text-transform: uppercase;

  :not(:first-child)::before {
    content: '|';
    margin: 0 1.5rem;
    color: black;
  }

  :hover {
    color: rgba(0, 0, 0, 1);
  }
`
