import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Resizable } from "re-resizable";

export function SortableHeader(props) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: props.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <th className='bg-astudio border' >
            <Resizable className="min-w-full min-h-full bg-astudio flex items-center p-1 justify-left" >
                <div className='p-2 bg-astudio w-full min-h-full text-base font-bold ' ref={setNodeRef} style={style} {...attributes} {...listeners}>
                    <span> {props.header.toUpperCase().split('_').join(' ')} </span>
                </div>
                <button className='p-2 bg-astudio text-center text-base rounded-full active:bg-white' name={props.header} onClick={props.sortByColumn}>
                    V
                    {/* <svg aria-hidden="true" focusable="false">
                        <path d="m6.5,4 4-4 4,4zm0,1 4,4 4-4z" />
                    </svg> */}
                </button>

            </Resizable>
        </th>
    );
}