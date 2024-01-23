import React, { useState } from "react";
import { View, FlatList } from "@gluestack-ui/themed"
import { StyleSheet } from "react-native";
import ListCard from "../listCards/ListCard";

const TvShowsScreen = ({navigation}) => {

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
        <View style={styles.listContainer}>
            <View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <ListCard item={item}/>}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%',
        margin: 20
    },
  });

export default TvShowsScreen