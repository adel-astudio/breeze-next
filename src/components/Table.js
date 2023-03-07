import React from 'react';

function Table({ data }) {
    return (

        <div class="relative overflow-x-auto shadow-md max-w">
            <table class="w-full text-sm text-left">
                <thead class="text-xs text-gray-700 uppercase bg-astudio">
                    <tr className='border'>
                        <th scope="col" class="p-4">
                            <div class="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                <label for="checkbox-all-search" class="sr-only">checkbox</label>
                            </div>
                        </th>
                        {Object.keys(data[0]).map((header, index) => (
                            header !== 'id' &&
                            <th key={index} scope="col" className="px-6 py-3 border text-base font-bold">
                                {header.toUpperCase().split('_').join(' ')}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map(e => (
                        <tr key={e.id} className="bg-white border">
                            <td class="w-4 p-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            {Object.keys(e).map((header, index) => (
                                header !== 'id' &&
                                <td key={index} className="w-4 p-4 border">
                                    {e[header]}
                                </td>
                            ))}
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    );
}

export default Table;