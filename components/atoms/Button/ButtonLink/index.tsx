import Button, { ButtonProps } from 'components/atoms/Button'
import Link from 'next/link'
import React from 'react'

interface ButtonLinkProps extends ButtonProps {
  href: string
  target?: React.HTMLAttributeAnchorTarget // <- Menambah tipe data target (agar bisa klik Link pindah tab)
}

const ButtonLink = ({
  href,
  value,
  onClick = () => {},
  size = 'normal',
  style = 'solid',
  color = 'primary',
  radius = 'rounded',
  target, // <- ambil properti target dari props (atas)
}: ButtonLinkProps) => {
  return (
    <Link passHref
      href={href}
      target={target} // teruskan ke Link
      rel={target === '_blank' ? 'noopener noreferrer' : undefined} // <- tambahkan class rel (untuk keamanan)
    >
          <Button
            value={value}
            color={color}
            onClick={onClick}
            radius={radius}
            size={size}
            style={style}
          />
    </Link>
  )
}

export default ButtonLink
export type { ButtonLinkProps }
