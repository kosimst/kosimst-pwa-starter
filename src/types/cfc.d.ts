import { CSSProperties, FC } from 'react'

type CFC<Props = {}> = FC<
  {
    className?: string
    style?: CSSProperties
  } & Props
>

export default CFC
