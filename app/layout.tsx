import type { Metadata } from 'next';
import './globals.css';
import { avertaStd, dailyMemo } from './fonts';
export const metadata: Metadata = {
    title: 'GlobeDock Academy',
    description: 'Access a rich library of lessons and resources, all created by subject matter experts and educators.',
    icons: {
        icon: [
            { url: '/images/favicon.png', type: 'image/png' },
        ],
        apple: [
            { url: '/images/favicon.png', type: 'image/png' },
        ],
        shortcut: ['/images/favicon.png'],
    },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${avertaStd.variable} ${dailyMemo.variable}`}>
            <body className="font-averta">
                {children}
            </body>
        </html>
    );
}
