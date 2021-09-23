import styled from 'styled-components';

interface Colors {
    title?: string;
    subtitle?: string;
    text?: string;
}

export const StyledH2 = styled.h2<Colors>`
    margin: 0 0 16px 0;
    font-size: 26px;
    color: ${props => props.title};
`;