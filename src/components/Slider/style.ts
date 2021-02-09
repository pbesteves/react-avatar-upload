import styled from "styled-components";

export const SliderComponent = styled.input`
  background: transparent;
  width: 276px;
  -webkit-appearance: none;

  ::-webkit-slider-thumb {
    background: ${({ theme }) => theme.colors.mediumBlue};
    border: none;
    border-radius: 20px;
    cursor: pointer;
    height: 12px;
    width: 12px;
    position: relative;
    top: -6px;
  }

  ::-webkit-slider-runnable-track {
    background: ${({ theme }) => theme.colors.lightBlue};
    border-radius: 1px;
    cursor: pointer;
    height: 2px;
    width: 100%;
  }

  ::-moz-range-thumb {
    background: ${({ theme }) => theme.colors.mediumBlue};
    border: none;
    border-radius: 20px;
    cursor: pointer;
    height: 12px;
    width: 12px;
  }

  ::-moz-range-track {
    background: ${({ theme }) => theme.colors.lightBlue};
    border-radius: 1px;
    cursor: pointer;
    height: 2px;
    width: 100%;
  }

  ::-moz-range-progress {
    background-color: ${({ theme }) => theme.colors.mediumBlue};
    height: 2px;
    border-radius: 30px;
    border: none;
  }
`;
