import "bootstrap/dist/css/bootstrap.css";
import './homepage.css'

export const metadata = {
  title: 'Integration',
  description: 'La aplicacion de Produccion de Integration',
}

/**
 * Gets the root layout.
 * @param {Component} children The children component to be used. 
 * @returns The root layout for all pages.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
            {children}
        </main>
      </body>
    </html>
  )
}
