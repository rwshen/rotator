"use client";
/** @jsxImportSource @emotion/react */

import { MainImage, Title, LeftArrow, RightArrow } from '@/components'
import { css } from '@emotion/react'

export default function Home() {
  return (
    <main css={css`
      display: grid;
      grid-gap: 1rem;
      align-items: start;
    `}>
      <Title title="Image Rotator" color="#9C92A3"/>
      <section css={css`
      display: grid;
      grid-template-columns: repeat(auto-fill, 100px);
      grid-template-rows: 20% 20% 20% 20% 20%;
      }
      `}>
        <LeftArrow css={css`
        grid-column-start: 4;
        grid-row-start: 5;
        `}
        width={100} height={500}/>
        <MainImage css={css`
        grid-area: content;
        grid-column-start: 4;
        `}
        width={500} height={500} />
        <RightArrow css={css`
        grid-column-start: 5;
        grid-row-start: 8;
        `}
        width={100} height={500} />
      </section>
    </main>
  )
}
