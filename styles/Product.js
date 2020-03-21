import styled from 'styled-components';
import media from 'styled-media-query';

export const CardPrice = styled.p`
    color: #007DC5;

    font-size: 16px;
    font-weight: 600;

    line-height: 16px;

    display: inline-block;

    margin-right: 5px;
    margin-bottom: 5px;

    ${media.greaterThan("medium")`
        font-size: 18px;
        line-height: 21px;
        
        margin: 0 10px 10px 0;
    `}
`;

export const CardPromoPrice = styled.span`
    color: #C3C3C3;

    font-size: 12px;

    line-height: 8px;

    text-decoration: line-through;

    position: relative;
    top: -1px;

    display: block;

    ${media.greaterThan("375px")`
        display: inline-block;
    `};

    ${media.greaterThan("medium")`
        line-height: 16px;  
    `}
`;

export const CardTitle = styled.h6`
    font-size: 12px;
    font-weight: 400;

    line-height: 14px;
    
    color: #555;

    margin-bottom: 7px;

    ${media.greaterThan("medium")`
        font-size: 14px;
        
        line-height: 16px;

        margin-bottom: 9px;
    `}
`;