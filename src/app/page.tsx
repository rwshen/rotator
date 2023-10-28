"use client";
/** @jsxImportSource @emotion/react */

import { MainImage, Title } from '@/components'
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
      margin-bottom: 40px;
      align-items: center;
      justify-content: space-around;
      `}>
        <MainImage 
        width={500} height={500} />
      </section>
    </main>
  )
}
