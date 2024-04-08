'use client';
import { MenuItem } from '@/components/common/Menu/MenuItem/MenuItem';
import {usePathname} from "next/navigation";

export const Menu_for_profile = () => {
    const pathname = usePathname();
    return (

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

            <MenuItem
                href="/profile/security"
                heading="Security"
                active={pathname == '/profile/security'}
                description="Instantly deploy your Next.js site to a shareable URL with Vercel."
            />
            <MenuItem
                href="/profile/settings"
                heading="Settings"
                active={pathname == '/profile/settings'}
                description="Instantly deploy your Next.js site to a shareable URL with Vercel."
            />
        </div>
    );
};