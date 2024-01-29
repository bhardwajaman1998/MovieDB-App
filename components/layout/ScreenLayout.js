import React, { useState, useEffect } from "react";
import { View, FlatList } from "@gluestack-ui/themed"
import { StyleSheet } from "react-native";

import { fetchMoviesAndTv } from "../services/api";

import BottomDrawer from  '../stacks/BottomDrawer'
import ListLayout from "../layout/ListLayout";
import FilterContainer from "../containers/FilterContainer";

const ScreenLayout = ({platform, filters}) => {

    const [showActionsheet, setShowActionsheet] = React.useState(false)
    const [selectedFilter, setSelectedFilter] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        if (filters.length > 0 ){
            setSelectedFilter(filters[0]);
            fetchData(filters[0]);
        }
    }, []);

  
  const handleClose = () => setShowActionsheet(!showActionsheet)

  const handleFilterSelection = (filter) => {
    setSelectedFilter(filter);
    setShowActionsheet(false);
    fetchData(filter);
  };

  const fetchData = async (filter) => {
      try {
        const shows = await fetchMoviesAndTv(platform, filter);
        setData(shows);
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
                <ListLayout data={data} type={platform}/>
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


export default ScreenLayout