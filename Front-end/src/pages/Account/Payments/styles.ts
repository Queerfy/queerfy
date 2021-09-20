import styled from 'styled-components';

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputBox = styled(Center)`
  width: 100%;
  height: 225px;
  border-radius: 15px;
  background: linear-gradient(
    to top,
    rgba(240, 191, 90, 1) 30%,
    rgba(253, 233, 128, 1) 100%
  );
`;