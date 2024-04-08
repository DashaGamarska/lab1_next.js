'use client';
import { MenuItem } from '@/components/common/Menu/MenuItem/MenuItem';
import {usePathname} from "next/navigation";

export const Menu_for_articles = () => {
    const pathname = usePathname();

    return (
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

            <MenuItem
                href="/articles/favorite"
                heading="Favorite"
                active={pathname == '/articles/favorite'}
                description="Learn about Next.js in an interactive course with&nbsp;quizzes!"
            />
            <MenuItem
                href="/articles/create"
                heading="Create"
                active={pathname == '/articles/create'}
                description="Explore starter templates for Next.js."
            />

        </div>
    );
};