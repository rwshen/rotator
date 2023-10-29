"use client";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function MainImage(props: { width: number, height: number }) {

    const placeKitties = ['placekitten.com/g/', 'loremflickr.com/']
    const imgSrc = () => {

    }

    return (
        <img onClick={imgSrc} css={css`
            border-radius: 30px;
            `} src={`http://${placeKitties[1]}${props.width}/${props.height}`}
            alt="Placeholder kitten is saving the day"
            width={props.width}
            height={props.height} />
    )
}