import styled from 'styled-components'
import { devicesMin, devicesMax } from '@styles/breakpoints'

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.5rem 0 1.5rem;

  @media ${devicesMax.tablet.sm} {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`

export const FilterItem = styled.div`
  margin-bottom: 0.5rem;

  color: ${(props) => (props.isActive ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.6)')};
  cursor: pointer;
  text-transform: uppercase;

  :not(:last-child)::after {
    content: '|';
    margin: 0 1rem;
    color: black;
  }

  :hover {
    color: rgba(0, 0, 0, 1);
  }
`
