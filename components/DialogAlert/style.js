import styled, { keyframes } from "styled-components";

import IconChecker from "~/public/images/checker.svg";

const DialogAlert = keyframes`
    0%,100% { 
        transform: translateY(100%);
        opacity: 0;
    }

    50% { 
        transform: translateY(0);
        opacity: 1; 
    }
}

`;

export const Message = styled.div`
    flex: 1;

    text-align: center;
`;

export const Container = styled.div`
    margin: auto;

    display: flex;
    align-items: center;

    border-radius: 10px;

    padding: 10px;

    background-color: #FFF;
`;

export const Dialog = styled.div`
    pointer-events: none;

    color: #007dc5;
    
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    pointer-events: none;

    font-size: 14px;
    
    width: 100%;

    text-align: center;

    padding: 10px;

    animation: ${DialogAlert};
    animation-duration: 7s;
    animation-fill-mode: forwards;
`;

export const SvgChecker = styled.div`
    background-image: url(${ IconChecker });
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    width: 26px;
    height: 26px;
    flex: 0 0 26px;

    display: flex;

    margin-left: 5px;
`;
