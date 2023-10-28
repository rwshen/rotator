"use client";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function MainImage(props: { width: number, height: number }) {
    return (
        <img css={css`
            border-radius: 30px;
            `} src={`http://placekitten.com/g/${props.width}/${props.height}`} 
            alt="Placeholder kitten is saving the day" 
            width={props.width} 
            height={props.height} />
    )
}