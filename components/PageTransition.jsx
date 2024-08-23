"use client"

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { usePathname } from 'next/navigation';

const PageTransition = ({ children }) => {
    const pathname = usePathname();

    return (
        <TransitionGroup>
            <CSSTransition
                key={pathname}
                classNames="page"
                timeout={500}
                unmountOnExit
            >
                <div className="page-transition-wrapper">
                    {children}
                </div>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default PageTransition;
