import "bootstrap/dist/css/bootstrap.css";
import './homepage.css'

export const metadata = {
  title: 'Integration',
  description: 'La aplicacion de Produccion de Integration',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  )
}
