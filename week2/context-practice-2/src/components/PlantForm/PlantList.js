import React from "react";
import './plant-list.css';
import {PlantContextConsumer} from "../../provider/plantContext";

const PlantList = () => {
    
    return(
        <PlantContextConsumer>
        {plant => (
            <div  className = "consumer" >
                {plant.plants.map((allPlants, id) => {
                    return (
                        <div className = "plantList" key={id} >
                            <div className = "column">
                                <h3 className="name">{allPlants.name}</h3>
                                <h5 className="location">Location: {allPlants.location}</h5>
                            </div>
                            <div className = "column">
                                <img className="imgUrl" src={allPlants.imgUrl} alt="plantpicture"/>
                            </div>
                        </div>
                    )
                })}
            </div>
        )}
        </PlantContextConsumer>
    )

}

export default PlantList;