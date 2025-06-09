import type { Metadata } from 'next';
import './globals.css';
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
        <html lang="en">
            <body className="">{children}</body>
        </html>
    );
}
