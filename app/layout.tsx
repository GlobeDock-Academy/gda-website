import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
    title: 'GlobeDock Academy',
    description: 'Access a rich library of lessons and resources, all created by subject matter experts and educators.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className="">{children}</body>
        </html>
    );
}
