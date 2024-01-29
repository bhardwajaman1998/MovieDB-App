import React from "react";
import ScreenLayout from "../layout/ScreenLayout";

const MoviesScreen = ({route}) => {
    const platform = 'movie'
    const filters = ["popular", "now_playing", "top_rated", "upcoming"]

    return (
        <ScreenLayout platform={platform} filters={filters}/>    
    )
}

export default MoviesScreen