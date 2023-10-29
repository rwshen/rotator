"use client";
/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import { css } from '@emotion/react'
import { PiArrowSquareLeftBold } from 'react-icons/pi'

export const LeftArrow = (props: { width: number, height: number }) => {
    const [] = useState();
    const clickHandler = () => { 
        
    }

    return (
        <button onClick={clickHandler}
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