"use client";
/** @jsxImportSource @emotion/react */

import { MainImage, Title, LeftArrow, RightArrow } from '@/components'
import { css } from '@emotion/react'

export default function Home() {
  return (
    <main css={css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    `}>
      <Title title="Image Rotator" color="#9C92A3"/>
      <section css={css`
      margin-top: 5%;
      display: flex;

      }
      `}>
        <LeftArrow css={css`

        `}
        width={100} height={500}/>
        <MainImage css={css`

        `}
        width={500} height={500} />
        <RightArrow css={css`

        `}
        width={100} height={500} />
      </section>
    </main>
  )
}
