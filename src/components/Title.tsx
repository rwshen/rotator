"use client";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { BsFillBalloonHeartFill } from 'react-icons/bs'

export function Title(props: { title: string, color: string }) {
    const color = props.color;
    return (
        <div>
            <p css={css`
            grid-area: header;
            background-color: ${color};
            font-size: 2rem;
            text-align: left;
            width: 100vw;
            margin-bottom: 15px;
        `}>
            Let's see some stuff <BsFillBalloonHeartFill css={css`padding-top: 5px;`}/></p>
        </div>
    )
}
