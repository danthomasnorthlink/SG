import React, { PropsWithChildren } from 'react'

export interface Props {
    className?: string;
    maxWidth?: string;
}

export const Container: React.FC<PropsWithChildren<Props>> = ({ maxWidth = 'max-w-8xl', className, children }) => {
  return (
    <div className={`${className} ${maxWidth} w-full mx-auto px-3 md:px-6`}>{children}</div>
  )
}

export default Container