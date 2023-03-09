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
import { Resizable } from "re-resizable";
import _ from 'lodash';

function Table({ headers, setHeaders, rows, setRows }) {

    function sortByColumn(event) {
        const { name } = event.target;
        const sortedRows = _.sortBy(rows, [function (o) { return o[name] }]);
        setRows(sortedRows);
    }

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
                <div className="shadow-md overflow-x-auto flex justify-center">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-700 uppercase">
                            <tr className='border'>
                                <th scope="col" className="p-4 bg-astudio">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                </th>
                                {headers.map((header, index) => <SortableHeader key={index} id={header} header={header} sortByColumn={sortByColumn} />)}
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map(e => (
                                <tr key={e.id} className="bg-white border">
                                    <td className="w-4 p-4">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                    </td>
                                    {headers.map((header, index) => (
                                        <td key={index} className="border">
                                            <div>
                                                <Resizable className="min-w-full flex flex-wrap	items-center p-1 m-2 mr-4 justify-left">
                                                    {e[header]}
                                                </Resizable>
                                            </div>

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