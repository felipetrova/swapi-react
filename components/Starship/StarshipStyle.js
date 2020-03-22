import styled from 'styled-components';
import * as C from '~/styles/Constants';

export const Starship = styled.div`
  /* background-color: #eeeeee;
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
  color: ${C.DARK_GREY};
  display: block;
  padding: 0.5rem; */

  background: transparent;
  width: 100%;
  
  .accordion {
    width: 100%;
    color: ${C.BLUE};
    cursor: pointer;
    padding: 15px;
    display: flex;
    align-items: center;
    border: none;
    border-bottom: 1px solid #1c1e22;
    outline: none;
    transition: background-color 0.6s ease;
    
    p {
      position: relative;
      width: 100%;
    }
    i.arrowIcon {
      position: absolute;
      right: 5px;
      transform: rotate(270deg);
    }
  }

  .accordion__title {
    text-align: left;
  }

  .accordion__icon {
    margin-left: auto;
    transition: transform 0.6s ease;
  }

  .minus {
    transform: rotate(180deg);
  }
  
  .accordion__content {
    width: 100%;
    background: #EEEEEE;
    overflow: auto;
    transition: max-height 0.6s ease;
    padding: 0 0.5rem;
  }
`;