import { useDragLayer } from "react-dnd"
import { Column } from "./Column"
import { CustomDragLayerContainer, DragPreviewWrapper } from "./styles"
import { useAppState } from "./state/AppstateContext"

export const CustomDragLayer = () => {
    const { draggedItem } = useAppState()
    const { currentOffset } = useDragLayer( monitor => ({
        currentOffset: monitor.getSourceClientOffset()
    }))

    return draggedItem && currentOffset ? (
        <CustomDragLayerContainer>
            <Column 
             id={draggedItem.id}
             text={draggedItem.text}
             isPreview
            />
        </CustomDragLayerContainer>
    ) : null
}

export {}