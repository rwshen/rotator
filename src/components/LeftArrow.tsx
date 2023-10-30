"use client";
/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react"
import { PiArrowSquareLeftBold } from 'react-icons/pi'

export const LeftArrow = (props: { width: number, height: number, indexForImage: number }) => {
    const { indexForImage } = props;
    let [index, setIndex] = useState(indexForImage);
    return (
        <button
            type='submit'
            onClick={() => setIndex(index === 1 ? 0 : 1)}
            css={css`
            height: ${props.height}px;
            width: ${props.width}px;
            border: none;
            background-color: transparent;
            &:hover {
                cursor: pointer;
            }
            `}>
            <PiArrowSquareLeftBold css={css`
                height: ${props.height}px;
                width: ${props.width}px;
                `} />
        </button>
    )
}