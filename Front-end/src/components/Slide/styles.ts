import styled from 'styled-components';

export const SlideContainer = styled.section`
  overflow: hidden;
  width: 100%;
  height: 500px;
  margin-top: 16px;
  border-radius: 10px;
`;

export const SlidePanel = styled.div`
  display: flex;

  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  overflow: hidden;
`;

export const SlideItem = styled.div`
  flex: none;
  width: 100%;
  height: 500px;
  scroll-snap-align: start;
  pointer-events: none;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;

    object-fit: cover;
  }
`;
