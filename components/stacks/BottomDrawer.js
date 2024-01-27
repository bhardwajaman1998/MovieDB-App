import { useState } from "react";
import { Dimensions } from "react-native";
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicatorWrapper, ActionsheetDragIndicator,ActionsheetItem, ActionsheetIcon, ActionsheetItemText } from '@gluestack-ui/themed';
import { Icon, TrashIcon } from "@gluestack-ui/themed"


const BottomDrawer = ({handleClose, showActionsheet, filters, onSelectFilter}) => {

    const handleClosing = (filter) => {
        handleClose()
        onSelectFilter(filter)
    }

    return (
        <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
            <ActionsheetBackdrop />
            <ActionsheetContent>
                <ActionsheetDragIndicatorWrapper>
                    <ActionsheetDragIndicator />
                </ActionsheetDragIndicatorWrapper>
                {filters.map((filter, index) => (
                    <ActionsheetItem key={index} onPress={() => handleClosing(filter)}>
                        <ActionsheetIcon>
                        <Icon as={TrashIcon} />
                        </ActionsheetIcon>
                        <ActionsheetItemText>{filter}</ActionsheetItemText>
                    </ActionsheetItem>
                ))}
            </ActionsheetContent>
        </Actionsheet>
    )
} 

export default BottomDrawer