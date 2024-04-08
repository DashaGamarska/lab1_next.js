import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { AppBar, Toolbar, Typography } from '@mui/material';
export const Header = () => {
    return (


            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link
                        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                        href="/"
                    >
                        By{" "}
                        <Image
                            src="/zdtu-white.svg"
                            alt="ZDTU Logo"
                            width={120}
                            height={36}
                            priority
                        />
                    </Link>
                    </Typography>
                </Toolbar>
            </AppBar>

    );
};