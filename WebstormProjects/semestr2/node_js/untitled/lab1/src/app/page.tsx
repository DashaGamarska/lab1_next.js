import { Header } from '@/components/common/Header/Header';
import { Menu } from '@/components/common/Menu/Menu';
import {Logo} from "@/components/common/Logo/Logo";
import { Button } from 'antd';

import React from 'react';

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Header/>
          <Logo/>
          <Menu/>
          <div className="bg-primary text-white text-sm 2xl:text-xl">Primary Background</div>
          <div className="bg-secondary text-white text-base sm:text-lg">Secondary Background</div>
          <div className="bg-accent text-white text-lg lg:text-lg">Accent Background</div>
          <div className="bg-dark text-white text-xl xl:text-lg">Dark Background</div>
          <div className="bg-light text-black text-2xl 2xl:text-lg">Light Background</div>
          <Button type="primary">Primary Button</Button>

      </main>
  );
}