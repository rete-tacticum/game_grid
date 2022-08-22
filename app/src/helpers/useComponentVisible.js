import { useState, useEffect, useRef } from 'react';

export default function useComponentVisible(initialState) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialState);
    const ref = useRef(null);

    const handleHideDropdown = (event) => {
        if (isComponentVisible && event.key === 'Escape') {
            setIsComponentVisible(false);
        }
    };

    const handleClickOutside = (event) => {
        if (isComponentVisible && ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleHideDropdown, true);
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('keydown', handleHideDropdown, true);
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return [ ref, isComponentVisible, setIsComponentVisible ];
}