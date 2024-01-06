import React from 'react'

import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import StoreIcon from '@mui/icons-material/Store';

export default function Due() {
  return (
    <div className='bg-black rounded-lg p-4'>
        <h1 className='font-medium text-gray-100'>Due</h1>

        <div className='mt-4 space-y-4'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <span className='text-gray-100 bg-[#082E66] p-2 rounded-full'><LocalGasStationIcon /></span>
                    <div>
                        <h1 className='font-medium text-gray-100'>Gas</h1>
                        <p className='text-[#FFB229] text-xs font-light'>Due 4 days ago</p>
                    </div>
                </div>
                <div className='flex flex-col items-end'>
                    <p className='text-gray-100'>$13.10</p>
                    <p className='text-gray-400 text-xs'>-4.5%</p>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <span className='text-gray-100 bg-[#434343] p-2 rounded-full'><StoreIcon /></span>
                    <div>
                        <h1 className='font-medium text-gray-100'>Shopping</h1>
                        <p className='text-gray-200 text-xs font-light'>5:01am 2022-04-12</p>
                    </div>
                </div>
                <div className='flex flex-col items-end'>
                    <p className='text-gray-100'>$15.10</p>
                    <p className='text-gray-400 text-xs'>-1.5%</p>
                </div>
            </div>
        </div>
    </div>
  )
}
