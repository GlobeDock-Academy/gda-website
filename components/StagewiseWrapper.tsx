'use client';

import { useEffect, useState } from 'react';

const StagewiseWrapper = () => {
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        // Only initialize stagewise in development mode and on client side
        if (process.env.NODE_ENV === 'development' && !isInitialized) {
            const initializeStagewise = async () => {
                try {
                    const { initToolbar } = await import('@stagewise/toolbar');
                    
                    initToolbar({
                        plugins: [],
                    });
                    
                    setIsInitialized(true);
                    console.log('Stagewise toolbar initialized successfully');
                } catch (error) {
                    console.warn('Failed to initialize Stagewise toolbar:', error);
                }
            };
            
            initializeStagewise();
        }
    }, [isInitialized]);

    // This component doesn't render anything - the toolbar is initialized programmatically
    return null;
};

export default StagewiseWrapper;
