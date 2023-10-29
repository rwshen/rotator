"use client";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { PiArrowSquareRightBold } from 'react-icons/pi'


export const RightArrow = (props: { width: number, height: number}) => {
    const onClickHandler = () => {
        return 
    };
    
    return (
        <button 
        onClick={onClickHandler}
        type="submit"
        css={css`
        height: ${props.height / 2}px;
        width: ${props.width}px;
        border: none;
        background-color: transparent;
        &:hover {
            cursor: pointer;
        }
        `}>
            <PiArrowSquareRightBold css={css`
            height: ${props.height}px;
            width: ${props.width}px;
            `} />
        </button>
    )
}