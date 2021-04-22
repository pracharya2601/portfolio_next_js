import styled from 'styled-components';
import {GithubWithCircle} from '@styled-icons/entypo-social/GithubWithCircle';

import {
  Card
} from 'reactstrap';

export const StyledCard = styled(Card)`
  background: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.text};
  border: 1px solid ${({theme}) => theme.shadow};
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 2px;
  margin-left: 2px;
  position: relative;
  overflow: hidden;
  &:hover {
    & > #mask {
      height: 100%;
    }
  }
`
export const AbsoluteCard = styled(Card)`
  position: absolute;
  top: 0;
  left: 0;
  background: ${({theme}) => theme.mask};
  height: 0%;
  width: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
  flex-wrap: wrap;
  transition: all .5s ease;
  overflow: hidden;
`
export const TopLine = styled.div`
  padding: 10px 30px 0 30px;
  height: 100px;
  width: 130px;
  position: absolute;
  z-index: 100;
  top: -46px;
  right: -47px;
  background: ${({theme}) => theme.bg};
  -ms-transform: rotate(40deg);
  transform: rotate(40deg);
  display: flex;
  align-items: flex-end;
`
export const Git = styled(GithubWithCircle)`
  padding-bottom: 5px;
  margin-left: 20px;
  color: ${({theme}) => theme.text};
  z-index: 100;
  &:hover {
    color: ${({theme}) => theme.textHover};
    cursor: pointer;
  }
`

export const Chip = styled.div`
  background: ${({theme}) => theme.sidebar};
  border: 1px solid ${({theme}) => theme.shadow};
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: 600;
  margin: 2px;
`

export const ChipContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 20px 0;
`