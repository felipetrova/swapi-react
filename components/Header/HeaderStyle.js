import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;

  p{
    line-height: 23px;
  }

  div{
    height: 45px;
  }

  img{
    max-width: 61px;
    width: 100%;
    height: auto;
  }

  i{
    &:first-of-type{
      margin-left: 8px;
      font-size: 20px;
    }
  }
`
