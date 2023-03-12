import React from 'react';

const Table = ({ data, totalAmount }) => {
    return (
        <div name='table' className='mt-4'>
            <table className='w-full'>
                <thead>
                    <tr className='h-16 border-b-2 border-black'>
                        <th className='font-bold font-tf text-left '>
                            DESCRIPTION
                        </th>
                        <th className='font-bold font-tf text-right w-1/6'>
                            UNITS
                        </th>
                        <th className='font-bold font-tf text-right w-1/6'>
                            UNIT PRICE
                        </th>
                        <th className='font-bold font-tf text-right w-1/6'>
                            AMOUNT AED
                        </th>
                    </tr>
                </thead>
                <tbody className='bg-white'>
                    {data.map((e, index) => (
                        <tr key={index} className='h-10 border-b border-black'>
                            <td>
                                {e.description}
                            </td>
                            <td className='text-right'>
                                {e.units}
                            </td>
                            <td className='text-right'>
                                {e.price}
                            </td>
                            <td className='text-right pr-6'>
                                {e.amount}
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot className='bg-white'>
                    <tr className='h-12 border-b border-black'>
                        <td></td>
                        <td></td>
                        <td className='font-bold font-tf text-lg text-right'>TOTAL AED</td>
                        <td className='font-bold font-tf text-xl text-right pr-6'>{totalAmount}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Table;