import React from "react";

import data from "../../data/data.js"

const game = data;
// console.log(dataGame);
export const Card = () => {
    
    console.log(game);
    return(
                <>    
                    <div id="monexo">
                        {game.map((game, index) =>
                        
                        <article key={index} className="mon__exo">
                            <figure className="mon__exo__image"> 
                                <img src= {game.gamePicture ? `assets/img/games/${game.gamePicture}.jpg`: "assets/img/noimg.png"} />
                            </figure>
                                <div className="mon__exo__header">
                                    <h2> {game.title} </h2>
                                </div>

                                <div className="mon__exo__desc">
                                    <p>{game.description && game.description.length > 200 ? game.description.slice(0, 200) + "..." : game.description}</p>
                                        {game.description && game.description.length > 200 && (<div className="read-more">↓ Lire la suite</div>)}
                                </div>


                                <div className="mon__exo__footer">
                                    <span className="device">
                                        {game.devices.map((device, index) => (
                                            <img className="device__img" src={`/static/assets/img/devices/${device}.png`} alt={device} key={index} />
                                        ))}
                                        {game.devices[0] === undefined? <span className="no-device">Information Indisponible</span> : null}
                                    </span>
                                </div>

                        </article>
                    
                        )}
                    </div>
                    
                </>
            )
            
        }