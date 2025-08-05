import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme/theme-provider'
import './globals.css'
import { Header } from '@/components/header'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Testes automatizados - Apresentação',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					<main className=" pt-[90px]">{children}</main>
				</ThemeProvider>
			</body>
		</html>
	)
}
