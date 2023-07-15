import React, { useEffect, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

export const DraggableComponentsAccountDetails = (props) => {
    const { components, setComponents, middleStyleProps } = props
    const [show, setShow] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true)
        }, 50)

        return () => clearTimeout(timer)
    }, [])

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list)
        const [removed] = result.splice(startIndex, 1)
        result.splice(endIndex, 0, removed)

        return result
    }

    const onDragEnd = (result) => {
        if (!result.destination) {
            return
        }

        const reorderedItems = reorder(
            components,
            result.source.index,
            result.destination.index
        )

        setComponents(reorderedItems)
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            {show && <Droppable droppableId='accountComponent' direction='horizontal' key={components.map(component => component.id).join(':')}>
                {(provided) => (
                    <div style={middleStyleProps} ref={provided.innerRef} {...provided.droppableProps}>
                        {components.map((component, index) => (
                            <Draggable key={component.id} draggableId={component.id} index={index}>
                                {(provided) => (
                                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        {component.component}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>}
        </DragDropContext>
    )
}
