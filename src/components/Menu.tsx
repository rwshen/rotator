"use client";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const Menu = () => {
    const accordianData = [{
        title: 'Login'
    },
    {
        title: 'Image Viewer'
    }]

    return (
        <div css={css`
            height: 200px;
            width: 150px;
        `}>
            {accordianData.map(t => t.title)}
        </div>
    )
}