import styled from 'styled-components';

interface Colors {
    title?: string;
    subtitle?: string;
    text?: string;
}

export const ContainerAccount = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
`;

export const Container = styled.div<Colors>`
    margin: 0 0 32px 0;

    h1 {
        width: 100%;
        font-size: 28px;
        color: ${props => props.title};
    }
    h2 {
        width: 100%;
        font-size: 20px;
        color: ${props => props.subtitle};
    }
    h3 {
        width: 100%;
        font-size: 14px;
        color: ${props => props.text};
    }
`;

export const ImageArrow = styled.img`
    width: 20px;
    margin: 32px 0 16px 0;
`;