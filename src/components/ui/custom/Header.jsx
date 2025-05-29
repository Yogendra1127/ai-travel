import React from 'react';
import { Button } from '@/components/ui/button'; // ✅ use correct path or alias

function Header() {
  return (
    <div className='p-2 shadow-sm flex justify-between item-center px-5'>
      <img src="/logo.svg" alt="Logo" />
      <Button>Sign In</Button>
    </div>
  );
}

export default Header;
