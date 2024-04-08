import { Header } from '@/components/common/Header/Header';
import { Menu_for_articles } from '@/components/common/Menu/Menu_for_articles';
import { LayoutProps } from '@/types/page';

export default function ArticlesLayout({ children }: LayoutProps) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            {children}
            <Menu_for_articles />
            <Header />
        </main>
    );
}