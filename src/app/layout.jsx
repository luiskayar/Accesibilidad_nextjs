import "./globals.css";
import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/Navbar';
import { ThemeProvider } from './ThemeProvider.jsx'

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-1">
            <Sidebar />
            <div className="flex flex-col flex-1 h-screen overflow-hidden">
              <Navbar />
              <main className="flex-1 overflow-hidden">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
