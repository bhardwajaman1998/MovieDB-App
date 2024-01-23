import React, { useState } from "react";
import { View, Text, Center, Box, FlatList } from "@gluestack-ui/themed"
import { Image, Modal, Button, ButtonText, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { HStack } from '@gluestack-ui/themed';
import { Icon } from 'react-native-elements'
import BottomDrawer from  '../stacks/BottomDrawer'
import ListCard from "../listCards/ListCard";

const IndexScreen = ({navigation}) => {

    const [showActionsheet, setShowActionsheet] = React.useState(false)
    const handleClose = () => setShowActionsheet(!showActionsheet)

    const data = [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          name: "Aafreen Khan",
          popularity: "12:47 PM",
          date: "Good Day!",
          avatarUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            name: "Aafreen Khan",
            popularity: "12:47 PM",
            date: "Good Day!",
            avatarUrl:
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          },
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            name: "Aafreen Khan",
            popularity: "12:47 PM",
            date: "Good Day!",
            avatarUrl:
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          },
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            name: "Aafreen Khan",
            popularity: "12:47 PM",
            date: "Good Day!",
            avatarUrl:
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          },
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            name: "Aafreen Khan",
            popularity: "12:47 PM",
            date: "Good Day!",
            avatarUrl:
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          },
      ]



    return (
        <View>
            <View style={styles.filterContainer}>
                <TouchableOpacity onPress={handleClose} style={styles.button}>
                    <HStack gap={30} style={styles.hStack}>
                        <Text>abcd</Text>
                        <Icon name="arrow-down" size={20} color="black" />
                    </HStack>
                </TouchableOpacity>
                </View>
            <BottomDrawer handleClose={handleClose} showActionsheet={showActionsheet}/>
            <View style={styles.listContainer}>
                <View>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <ListCard item={item}/>}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    filterContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
    listContainer: {
        width: '100%',
        margin: 20
    },
    button: {
      padding: 5,
      margin: 15,
      width: "40%",
      borderWidth: 1,
      borderRadius: 5,
      borderColor: 'black',
      backgroundColor: 'transparent'
    },
    hStack: {
        justifyContent: 'space-between',
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });


export default IndexScreen