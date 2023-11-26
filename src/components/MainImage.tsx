"use client";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import  Image from 'next/image'

export function MainImage(props: { width: number, height: number }) {
    const imgSrc = ['placekitten.com/g/', 'loremflickr.com/', 'placeholder.pics/svg/'];
    const loaderProp =({ src }: any ) => {
        return src;
    }
    return (
        <Image css={css`
            border-radius: 30px;
            `} 
            src={`http://${imgSrc[2]}${props.width}/${props.height}`} 
            alt="Placeholder kitten is saving the day" 
            loader={loaderProp}
            width={props.width} 
            priority
            height={props.height}
        />
    )
}