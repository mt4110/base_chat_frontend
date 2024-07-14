// 'use client'
// import dynamic from 'next/dynamic'

// const App = dynamic(() => import('../_app'), { ssr: false })

// export function ClientOnly() {
//   return App
// }
import React from 'react';

const ClientOnly = () => {
  return (
    <div>
      <h1>Client Only Component</h1>
    </div>
  );
};

export default ClientOnly;
