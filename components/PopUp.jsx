"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { FaUsers } from 'react-icons/fa';
import { RiCoupon3Line } from 'react-icons/ri';
import Link from 'next/link';


const actions = [
  { icon: <FaUsers />, name: 'Add Customers'  },
  { icon: <RiCoupon3Line/>, name: 'Add Users' },

];


export default function BasicSpeedDial() {
    
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial 
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16,
            '& .MuiFab-primary': { // Applying custom styles to the FAB
            backgroundColor: '#FF9800', 
            '&:hover': { // Slightly darker shade on hover
            }
          }
         }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
