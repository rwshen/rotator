"use client";
/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { css } from "@emotion/react"
import { PiArrowSquareLeftBold } from 'react-icons/pi'

export const LeftArrow = (props: { width: number, height: number, func: ((d: any) => void)}) => {
    const [newNumber, setNewNumber] = useState<number>(0)
    useEffect(() => {
       props.func(newNumber)
    }, [newNumber, setNewNumber, props.func])
    return (
        <button
            type='submit'
            onClick={() => {
                let random = Number((Math.random() * 10).toFixed(0))
                setNewNumber(random)
            }}
            css={css`
                height: ${props.height}px;
                width: ${props.width}px;
                border: none;
                background-color: transparent;
                &:hover {
                    cursor: pointer;
                }
            `
            }>
            <PiArrowSquareLeftBold css={css`
                height: ${props.height}px;
                width: ${props.width}px;
                `} />
        </button>
    )
}