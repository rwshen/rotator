"use client";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from 'next/image'
import { useCallback, useEffect, useState } from "react";

const loaderProp = ({ src }: any) => {
    return src;
}

export function MainImage(props: { width: number, height: number, numberFromClicks: number}) {
    const [index, setIndex] = useState<number>(2)
    const imgSrc = ['placekitten.com/g/', 'loremflickr.com/', 'placeholder.pics/svg/'];
    const { numberFromClicks } = props
    console.log(numberFromClicks)

    useEffect(() => {
        setIndex(numberFromClicks)
        console.log(index)
    }, [numberFromClicks, index])

    const changeImg = useCallback(() => {
        numberFromClicks > 2 ? 1 : numberFromClicks
        return `http://${imgSrc[numberFromClicks]}${props.width}/${props.height}`
    },[index, numberFromClicks])
    
    return (
        <Image css={css`
            border-radius: 30px;
            `}
            src={changeImg()}
            alt="Placeholder kitten is saving the day"
            loader={loaderProp}
            width={props.width}
            priority
            height={props.height}
        />
    )
}