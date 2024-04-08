import { Header } from '@/components/common/Header/Header';
import { Menu_for_profile } from '@/components/common/Menu/Menu_for_profile';
import { LayoutProps } from '@/types/page';

export default function NonHomePageLayout({ children }: LayoutProps) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Menu_for_profile />
            {children}
            <Header />
        </main>
    );
}