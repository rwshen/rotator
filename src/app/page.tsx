"use client";
/** @jsxImportSource @emotion/react */

import { MainImage, Header, LeftArrow, RightArrow } from '@/components'
import { css } from '@emotion/react'

export default function Home() {
  let numberFromClicks = 0;
  let pull_data = (data: number) => {
    numberFromClicks = data;
    console.log({numberFromClicks})
  }
  return (
    <main css={css`
      display: grid;
      justify-items: center;
    `}>
      <Header title="Image Rotator" color="#9C92A3" />
      <section css={css`
        margin-top: 5%;
        grid-template-column: repeat(5, 20%);
        grid-template-row: repeat(5, 20%);
        }
      `}>
        <LeftArrow 
          css={css`
          grid-column: 2 / span 3;
          grid-row: 3 / span 3;
        `}
          width={100} 
          height={500}
          func={pull_data}
           />
        <MainImage 
          css={css`
          grid-column: 3/span 4;
          grid-row: 3/span 4;
        `}
          width={500}
          height={500} 
          numberFromClicks={numberFromClicks}
          />
        <RightArrow css={css`
          grid-column: 5/span 3;
          grid-row: 3/span 4;
        `}
          width={100}
          height={500} 
          func={pull_data}/>
      </section>
    </main>
  )
}
