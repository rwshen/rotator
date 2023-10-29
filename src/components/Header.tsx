"use client";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Fragment } from 'react';
import { BsFillBalloonHeartFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'

export function Header(props: { title: string, color: string }) {
    const color = props.color;
    const menuOnClickHandler = () => {
        console.info('hamburger clicked')

    }

    return (
        <div
            css={css`
            background-color: ${color};
            font-size: 2rem;
            width: 100vw;
            margin-bottom: 15px;
        `}>
            <GiHamburgerMenu
                onClick={menuOnClickHandler}
                css={css`
                    padding-top: 5px;
                    float: left;
                `} suppressHydrationWarning />
            <h5 css={css`
                    text-align: center;
                    float: center;
                `}>
                Show me the kittens
                <BsFillBalloonHeartFill css={css`padding-top: 5px;`} />
            </h5>
        </div>

    )

}
