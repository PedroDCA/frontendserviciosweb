import Sidebar from '@/components/sidebar/sidebar'
import './globals.css'

export const metadata = {
  title: 'Integration',
  description: 'La aplicacion de Produccion de Integration',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className='d-flex flex-nowrap'>
          <nav>
            <Sidebar/>
          </nav>
          <main className="p-5 w-100">
            {children}
          </main>
        </main>
      </body>
    </html>
  )
}
