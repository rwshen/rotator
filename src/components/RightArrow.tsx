"use client";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useState, useEffect } from "react";
import { PiArrowSquareRightBold } from 'react-icons/pi'


export const RightArrow = (props: { width: number, height: number, func: (d: any) => void}) => {
    const [newNumber, setNewNumber] = useState<number>(0)
    useEffect(() => {
       props.func(newNumber)
    }, [newNumber, setNewNumber, props.func])
    return (
        <button css={css`
        height: ${props.height / 2}px;
        width: ${props.width}px;
        border: none;
        background-color: transparent;
        &:hover {
            cursor: pointer;
        }
        `}
        onClick={() => {
            let random = Number((Math.random() * 10).toFixed(0))
            setNewNumber(random)
        }}
        >
            <PiArrowSquareRightBold css={css`
            height: ${props.height}px;
            width: ${props.width}px;
            `} />
        </button>
    )
}