import { useEffect } from 'react';

const useFontAwesome = () => {
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);
};

export default useFontAwesome;
