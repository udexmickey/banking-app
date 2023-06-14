import React, { FC } from 'react'
import { ThemeProvider } from 'react-bootstrap';
import { LayoutProps } from '../types/layout.type';

export const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
    >
        <div>{children}</div>
    </ThemeProvider>
  )
}
