import React from "react";
import './plant-list.css';
import {PlantContextConsumer} from "../../provider/plantContext";
import EditPost from "../EditPost/editPost.js";



const PlantList = () => {

    
    
    return(
        <PlantContextConsumer>
        {plant => (
            <div  className = "consumer" >
                {plant.plants.map((addPlants, id) => {
                    return (
                        <div className = "plantList" key={id} >
                            <div className = "column">
                                <h3 
                                    className="name">
                                    {addPlants.name}
                                </h3>
                                <img 
                                    className="imgUrl" 
                                    src={addPlants.imgUrl} 
                                    alt="plantpicture"/>
                                <h5 
                                    className="location">
                                    Comment: 
                                    <p>
                                        "{addPlants.location}"
                                    </p>
                                </h5>
                            </div>
                            <EditPost/>
                        </div>
                    )
                })}
            </div>
        )}
        </PlantContextConsumer>
    )

}

export default PlantList;