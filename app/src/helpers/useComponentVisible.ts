import { useState, useEffect, createRef, useRef, Dispatch } from 'react';
import { assertIsNode } from './misc';


export const useComponentVisible = (initialState: boolean): [any, boolean, Dispatch<boolean>] => {
    const [isComponentVisible, setIsComponentVisible] = useState(initialState);
    const ref = useRef<HTMLElement>();

    const handleHideDropdown = (event: KeyboardEvent) => {
        if (isComponentVisible && event.key === 'Escape') {
            setIsComponentVisible(false);
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        assertIsNode(event.target);
        if (isComponentVisible && ref.current && !ref?.current?.contains(event.target)) {
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