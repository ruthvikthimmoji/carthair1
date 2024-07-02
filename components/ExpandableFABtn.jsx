"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { FaUsers } from 'react-icons/fa';
import { RiCoupon3Line } from 'react-icons/ri';
import { useRouter } from 'next/navigation';


const actions = [
  { icon: <FaUsers />, name: 'Add Customers', path: "/addCustomers" },
  { icon: <RiCoupon3Line />, name: 'Add Users', path: "/addOffers" },

];

export default function ExpandableFABtn() {
  const router = useRouter('');
  const handleClick = async (path) => {
    router.push(path);
    router.refresh();
  }

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{
          position: 'absolute', bottom: 16, right: 16,
          '& .MuiFab-primary': { // Applying custom styles to the FAB
            backgroundColor: '#FF9800',
            '&:hover': {
              backgroundColor: '#424242',// Slightly darker shade on hover
            }
          }
        }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction className='bg-orange-400 text-xl  hover:bg-gray-800 hover:text-orange-400 text-gray-800'
            key={action.name}
            icon={action.icon}
            onClick={() => handleClick(action.path)}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}