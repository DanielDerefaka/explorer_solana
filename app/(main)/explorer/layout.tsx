import { ThemeProvider } from "@/app/provider";
import Navbar from "@/components/explorer/Navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    
      <body className="h-full">
        <Navbar/>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
    
      </body>
    </html>
  );
}
