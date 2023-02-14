import React, { PropsWithChildren } from 'react'
import Link from 'next/link'
import Container from './Container';

const navlinks = [
  {
      title: 'Who are we?',
      url: '/'
  }, 
  
  {
      title: 'Contact us',
      url: '/'
  }, 
  
  {
      title: 'Sign in / Register',
      url: '/signIn'
  },

]

export interface Props {
    maxWidth?: string;
}

export const Navbar: React.FC<PropsWithChildren<Props>> = ({ maxWidth = 'max-w-7xl', children }) => {
  return (
    <nav className="bg-alpha text-white">
      <Container className="flex justify-between py-6">
        <ul className="flex gap-6">
          <li className="text-blue-500">
            <Link href="/"><img src="/SG-Logo.svg"/></Link>
            {/* <svg viewBox="0 0 100 100">
              <rect x="0" y="0" width="100" height="100" fill="currentColor" />
            </svg> */}
          </li>
        </ul>

      <ul className="flex items-center gap-6">
         {navlinks.map((navlink) => {
          return(
            <li>
              <Link href={navlink.url}>{navlink.title}</Link>
            </li>
          )
         })}
        </ul>
        </Container>
    </nav>
  )
}

export default Navbar