import React from "react";

import ScreenLayout from "../layout/ScreenLayout";

const TvScreen = ({route}) => {
    const platform = 'tv'
    const filters = ["airing_today", "on_the_air", "popular", "top_rated"]
    
    return (
      <ScreenLayout platform={platform} filters={filters}/>
    )
}

export default TvScreen