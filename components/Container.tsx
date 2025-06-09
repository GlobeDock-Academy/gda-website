import React, { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
    return (
        <div className={`mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 ${className}`}>
            {children}
        </div>
    );
}
