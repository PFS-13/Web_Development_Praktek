import SidebarCMS from '@/Components/CMS/SidebarCMS';
import FooterCMS from '@/Components/CMS/FooterCMS';

import { Head } from '@inertiajs/react';
import React from 'react';




const AdminDashboard = (data) => {
  return (
    <div>
      <Head title={data.title}></Head>
   <SidebarCMS>
    <h2>Hallo</h2>
   </SidebarCMS>
   


   </div> 
  );
};

export default AdminDashboard;
