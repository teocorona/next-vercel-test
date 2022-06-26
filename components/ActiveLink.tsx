import {useRouter} from 'next/router'

import Link from 'next/link'
import { CSSProperties } from 'react';

interface Props {
  text: string;
  href: string;
}

const style: CSSProperties = {
    color:'#0070f3',
    textDecoration: 'underline'
}

export const ActiveLink = ({href, text}:Props) => {

    const {asPath} = useRouter()

  return (
    <Link href={href}>
        <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  )
}
