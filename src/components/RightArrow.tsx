"use client";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { PiArrowSquareRightBold } from 'react-icons/pi'


export const RightArrow = (props: { width: number, height: number}) => {
    return (
        <button css={css`
        height: ${props.height}px;
        width: ${props.width}px;
        border: none;
        background-color: transparent;
        `}>
            <PiArrowSquareRightBold css={css`
            height: ${props.height}px;
            width: ${props.width}px;
            `} />
        </button>
    )
}