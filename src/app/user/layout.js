import Sidebar from '@/components/sidebar'
import '../globals.css'

export const metadata = {
  title: 'Integration',
  description: 'La aplicacion de Produccion de Integration',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className='d-flex flex-nowrap'>
          <Sidebar/>
          {children}
        </main>
      </body>
    </html>
  )
}
