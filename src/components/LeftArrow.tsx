"use client";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { PiArrowSquareLeftBold } from 'react-icons/pi'

export const LeftArrow = (props: { width: number, height: number}) => {
    return (
            <button css={css`
            height: ${props.height}px;
            width: ${props.width}px;
            border: none;
            background-color: transparent;
            `}>
                <PiArrowSquareLeftBold  css={css`
                height: ${props.height}px;
                width: ${props.width}px;
                `}/>
            </button>
    )
}