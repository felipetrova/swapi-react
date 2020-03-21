import styled from 'styled-components';

const Icon = styled.i`
    font-family: 'labiicons' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`;

export const Money = styled(Icon)`
    &:before {
        content: "\\e900";
    }
`;

export const Alert = styled(Icon)`
    &:before {
        content: "\\e901";
    }
`;

export const ArrowLeft = styled(Icon)`
    &:before {
        content: "\\e902";
    }
`;

export const Edit = styled(Icon)`
    &:before {
        content: "\\e903";
    }
`;

export const Filter = styled(Icon)`
    &:before {
        content: "\\e904";
    }
`;

export const Home = styled(Icon)`
    &:before {
        content: "\\e905";
    }
`;

export const Order = styled(Icon)`
    &:before {
        content: "\\e906";
    }
`;

export const Pause = styled(Icon)`
    &:before {
        content: "\\e907";
    }
`;

export const Period = styled(Icon)`
    &:before {
        content: "\\e908";
    }
`;

export const Products = styled(Icon)`
    &:before {
        content: "\\e909";
    }
`;
