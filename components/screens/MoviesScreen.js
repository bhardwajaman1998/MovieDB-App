import React, { useState, useEffect } from "react";
import { View, FlatList } from "@gluestack-ui/themed"
import { StyleSheet } from "react-native";

import { fetchMovies, fetchTVShows } from "../services/api";

import BottomDrawer from  '../stacks/BottomDrawer'
import ListCard from "../listCards/ListCard";
import FilterContainer from "../containers/FilterContainer";

const MoviesScreen = ({route}) => {

    const [showActionsheet, setShowActionsheet] = React.useState(false)
    const [selectedFilter, setSelectedFilter] = useState(""); // Add state to store selected filter

    const handleClose = () => setShowActionsheet(!showActionsheet)

    useEffect(() => {
      setSelectedFilter(filters[0]);
      fetchData(filters[0]);
  }, []);

  const filters = ["popular", "now_playing", "top_rated", "upcoming"]

  const handleFilterSelection = (filter) => {
    setSelectedFilter(filter);
    setShowActionsheet(false);
    fetchData(filter);
  };

  const [data, setData] = useState([]);

  const fetchData = async (filter) => {
      try {
          const movies = await fetchMovies(filter); // Call fetchMovies function with the selected filter
          setData(movies);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

    return (
        <View>
            <View style={styles.filterContainer}>
                <FilterContainer handleClose={handleClose} showSearchButton={false} selectedFilter={selectedFilter}/>
                </View>
                <BottomDrawer handleClose={handleClose} showActionsheet={showActionsheet} filters={filters} onSelectFilter={handleFilterSelection} selectedFilter={selectedFilter}/>
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
        marginHorizontal: 70,
        marginVertical: 15
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


export default MoviesScreen