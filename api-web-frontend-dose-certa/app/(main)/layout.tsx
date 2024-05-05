import { Metadata } from 'next';
import Layout from '../../layout/layout';

interface AppLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: 'Dose Certa',
    description: 'The ultimate collection of design-agnostic, flexible and accessible React UI Components.',
    robots: { index: false, follow: false },
    viewport: { initialScale: 1, width: 'device-width' },
    openGraph: {
        type: 'website',
        title: 'Dose Certa',
        url: 'https://sakai.primereact.org/',
        description: 'The ultimate collection of design-agnostic, flexible and accessible React UI Components.',
        images: [{ url: '/assets/layout/images/logo.svg', width: 512, height: 512, alt: 'Dose Certa Logo' }],
        ttl: 604800
    },
    icons: {
        icon: '/favicon.ico'
    }
};

export default function AppLayout({ children }: AppLayoutProps) {
    return <Layout>{children}</Layout>;
}
