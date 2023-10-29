"use client";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { BsFillBalloonHeartFill } from 'react-icons/bs'

export function Title(props: { title: string, color: string }) {
    const color = props.color;
    return (
        <div>
            <p css={css`
            background-color: ${color};
            font-size: 2rem;
            width: 100vw;
            padding-left: 5%;
            margin-bottom: 15px;
        `}>
            show me the kitties <BsFillBalloonHeartFill css={css`padding-top: 5px;`}/></p>
        </div>
    )
}
