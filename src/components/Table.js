import React from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    horizontalListSortingStrategy
} from '@dnd-kit/sortable';

import { SortableHeader } from './SortableHeader';

function Table({ headers, setHeaders, rows }) {
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    );

    function handleDragEnd(event) {
        const { active, over } = event;
        if (active.id !== over.id) {
            setHeaders((items) => {
                const oldIndex = items.indexOf(active.id);
                const newIndex = items.indexOf(over.id);
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    };

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={headers}
                strategy={horizontalListSortingStrategy}
            >
                <div className="relative overflow-x-auto shadow-md max-w">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-700 uppercase">
                            <tr className='border'>
                                <th scope="col" className="p-4 bg-astudio">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                </th>
                                {headers.map((header, index) => <SortableHeader key={index} id={header} header={header} />)}
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map(e => (
                                <tr key={e.id} className="bg-white border">
                                    <td className="w-4 p-4">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                    </td>
                                    {headers.map((header, index) => (
                                        <td key={index} className="w-4 p-4 border">
                                            {e[header]}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div >
            </SortableContext>
        </DndContext>
    );
}

export default Table;