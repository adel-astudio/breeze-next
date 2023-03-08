import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export function SortableItem(props) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({id: props.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <th ref={setNodeRef} style={style} {...attributes} {...listeners} className="px-6 py-3 bg-astudio border text-base font-bold cursor-grabbing">
            {props.header.toUpperCase().split('_').join(' ')}
        </th>
    );
}