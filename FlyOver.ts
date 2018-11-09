import { COLOR, TEXT, VISUALS } from '../constants/styles';
import styled from './styled-components';

export const FlyOver = styled.div`
  display: flex;
  flex-direction: row;
  left: 0;
  right: 0;
  position: absolute;
  top: 140px;

  align-items: center;
  height: 50px;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  width: 422px;

  background-color: ${COLOR.WHITE};
  border-radius: 25px;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  color: ${COLOR.BYNDER};

  font-size: ${TEXT.MEDIUM_FONT_SIZE};

  z-index: 1100;

  svg {
    margin-left: ${VISUALS.MARGIN_S};
  }

  div {
    margin-left: ${VISUALS.MARGIN_S};
    color: ${COLOR.RICHBLACK_80};
  }

  a {
    display: inline-flex;

    align-items: center;
    padding-left: 5px;
    margin: ${VISUALS.PADDING_S};

    border-left: 1px solid ${COLOR.RICHBLACK_05};
    color: ${COLOR.BYNDER};

    span {
      margin-left: ${VISUALS.PADDING_XS};
    }
  }
`;
