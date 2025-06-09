import React, { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export default function FooterContainer({ children, className = '' }: ContainerProps) {
    return (
        <div className={`mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 ${className}`}>
            {children}
        </div>
    );
}
