import Sidebar from '@/components/sidebar/sidebar'
import './globals.css'

export const metadata = {
  title: 'Integration',
  description: 'La aplicacion de Produccion de Integration',
}

/**
 * 
 * @param {Component} children The page component.
 * @returns The layout for the user pages.
 */
export default function RootLayout({ children }) {
  return (
    <div className='d-flex flex-nowrap'>
      <nav>
        <Sidebar/>
      </nav>
      <div className="p-5 w-100">
        {children}
      </div>
    </div>    
  )
}
