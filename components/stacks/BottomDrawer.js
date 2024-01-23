import { useState } from "react";
import { Image, Modal, View, Text, Button, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicatorWrapper, ActionsheetDragIndicator,ActionsheetItem, ActionsheetIcon, ActionsheetItemText } from '@gluestack-ui/themed';
import { Icon, TrashIcon, ArrowDownIcon } from "@gluestack-ui/themed"


const BottomDrawer = ({handleClose, showActionsheet}) => {

    const windowHeight = Dimensions.get('window').height;
    return (
        <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
            <ActionsheetBackdrop />
            <ActionsheetContent>

            <ActionsheetDragIndicatorWrapper>
                <ActionsheetDragIndicator />
            </ActionsheetDragIndicatorWrapper>

            <ActionsheetItem onPress={handleClose}>
                <ActionsheetIcon>
                <Icon as={TrashIcon} />
                </ActionsheetIcon>
                <ActionsheetItemText>Delete</ActionsheetItemText>
            </ActionsheetItem>
            </ActionsheetContent>

        </Actionsheet>
    )
} 

export default BottomDrawer