"use client";
/** @jsxImportSource @emotion/react */
import { useCallback, useRef, useState } from "react";
import { css } from "@emotion/react"
import { PiArrowSquareLeftBold } from 'react-icons/pi'

export const LeftArrow = (props: { width: number, height: number }) => {
    const [number, setNumber] = useState(0)
    let numberRef = useRef<null | number>(null)
    const onClickHandler = useCallback((i: number) => {
        setNumber((n) => n = Math.random() * 10)
        if (numberRef.current !== number) {
            numberRef.current = number
        }
        console.log(number)
        console.log(numberRef)
    }, [])
    return (
        <button
            type='submit'
            onClick={() => onClickHandler}
            css={css`
                height: ${props.height}px;
                width: ${props.width}px;
                border: none;
                background-color: transparent;
                &:hover {
                    cursor: pointer;
                }
            `
            }
            ref={numberRef.current as null}>
            <PiArrowSquareLeftBold css={css`
                height: ${props.height}px;
                width: ${props.width}px;
                `} />
        </button>
    )
}