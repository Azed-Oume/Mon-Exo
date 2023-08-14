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
                            <div className="mon__exo__rate">
                                {game.rate === 0 && <span> 🖤🖤🖤🖤🖤 </span>}
                                {game.rate === 1 && <span> ❤️🖤🖤🖤🖤 </span>}
                                {game.rate === 2 && <span> ❤️❤️🖤🖤🖤 </span>}
                                {game.rate === 3 && <span> ❤️❤️❤️🖤🖤 </span>}
                                {game.rate === 4 && <span> ❤️❤️❤️❤️🖤 </span>}
                                {game.rate === 5 && <span> ❤️❤️❤️❤️❤️ </span>}
                                {game.rate === undefined && <span className="mon__exo__norate"> pas encore de note </span>}
                                
                            </div>
                            <figure className="mon__exo__image"> 
                                <img src= {game.gamePicture ? `assets/img/games/${game.gamePicture}`: "assets/img/noimg.png"} alt="Avatar" />
                            </figure>
                                <div className="mon__exo__header">
                                    <h2> {game.title} </h2>
                                </div>
                                src\compenents\img\games\ac_bf.jpg
                                
                                <div className="mon__exo__desc">
                                    <p>{game.description && game.description.length > 200 ? game.description.slice(0, 200) + "..." : game.description}</p>
                                        {game.description && game.description.length > 200 && (<div className="read-more">↓ Lire la suite</div>)}
                                </div>

                                
                                <div className="mon__exo__footer">
                                    <span className="device">
                                        {game.devices.map((device, index) => (
                                            <img className="device__img" src={`assets/img/devices/${device}.png`} alt={device} key={index} />
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
