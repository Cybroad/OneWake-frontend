import { PropsWithChildren } from 'react';
import Header from '../Header';

export default function PageLayout({ children }: PropsWithChildren) {
    return (
        <div className="container mx-auto px-4">
            <Header />
            {children}
        </div>
    );
}
