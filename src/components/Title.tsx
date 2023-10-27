"use client";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { BsFillBalloonHeartFill } from 'react-icons/bs'

export function Title(props: { title: string, color: string }) {
    const color = props.color;
    return (
        <div css={css`
            margin: 0;
            background-color: ${color};
        `}>
            <p>
            Let's see some stuff <BsFillBalloonHeartFill /></p>
            {props.title}
        </div>
    )
}
