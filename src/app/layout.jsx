"use client";

import "./globals.css";
import Sidebar from '../components/layout/Sidebar';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        
          <div className="h-screen">{children}</div>
        
      </body>
    </html>
  );
}
