import React from "react";
import { Helmet } from "react-helmet";
import water_icon from "../images/water.png";
import storage_icon from "../images/storage.png";
import tool_icon from "../images/hammer.png";
import raid_icon from "../images/swords.png";
import garden_icon from "../images/plant.png";
import electric_icon from "../images/lightning-bolt.png";
import empty_icon from "../images/Img_blank.png";

const sty = {
    "width": "20px",
    "height": "20px"
}

function getIcons(storage, tools, raids, garden, water, electricity) {
    return (
        <>
            <img src={storage ? storage_icon : empty_icon} alt="safe storage" style={sty} />
            <img src={tools ? tool_icon : empty_icon} alt="safe storage" style={sty} />
            <img src={raids ? raid_icon : empty_icon} alt="safe storage" style={sty} />
            <img src={garden ? garden_icon : empty_icon} alt="safe storage" style={sty} />
            <img src={water ? water_icon : empty_icon} alt="safe storage" style={sty} />
            <img src={electricity ? electric_icon : empty_icon} alt="safe storage" style={sty} />
        </>
    );
}

export default function Housing() {
    return (
        <>
            <Helmet><title>Housing</title></Helmet>
            <h1>Housing</h1>
            <p>Player housing is a way for players to call a piece of the world theirs. Different houses have different locations and ameneties,
                and each house gives players a text channel to roleplay in. A player can only have one housing channel per character.</p>

            <h3>Due to an uptick in demand, the Cypress Real Estate Association now has a land fee of 200 gold and 10 downtime.</h3>
            <p><b>NOTE</b> Daily downtime cannot be used for housing costs</p>

            <div>
                <table className="blue-table">
                    <thead>
                        <tr>
                            <th>Icon</th>
                            <th>Amenity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src={storage_icon} alt="safe storage" style={sty} /></td>
                            <td>Safe Storage</td>
                        </tr>
                        <tr>
                            <td><img src={tool_icon} alt="Tool Station" style={sty} /></td>
                            <td>Tool Station</td>
                        </tr>
                        <tr>
                            <td><img src={raid_icon} alt="Allows Raids" style={sty} /></td>
                            <td>Allows Raids</td>
                        </tr>
                        <tr>
                            <td><img src={garden_icon} alt="Garden Available" style={sty} /></td>
                            <td>Gardening Available</td>
                        </tr>
                        <tr>
                            <td><img src={water_icon} alt="Running Water" style={sty} /></td>
                            <td>Running Water</td>
                        </tr>
                        <tr>
                            <td><img src={electric_icon} alt="Electricity Available" style={sty} /></td>
                            <td>Electricity Available</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <table className="blue-table">
                <thead>
                    <tr>
                        <th>House Type</th>
                        <th>Ameneties</th>
                        <th>Gold Cost</th>
                        <th>Downtime Cost</th>
                        <th>Location</th>
                        <th>Maximum Residents</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Campsite</td>
                        <td>{getIcons(false, false, true, false, false, false)}</td>
                        <td>100</td>
                        <td>1</td>
                        <td>Cypress Outskirts or Nassau Harbor</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>Cabin</td>
                        <td>{getIcons(true, false, true, false, false, false)}</td>
                        <td>200</td>
                        <td>2</td>
                        <td>Cypress Forest</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Farmhouse</td>
                        <td>{getIcons(true, false, true, true, true, false)}</td>
                        <td>250</td>
                        <td>2</td>
                        <td>Cypress Forest</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Apartment</td>
                        <td>{getIcons(true, true, false, false, true, true)}</td>
                        <td>400</td>
                        <td>3</td>
                        <td>Cypress or Cypress Slums</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Bungalow</td>
                        <td>{getIcons(true, true, true, false, false, false)}</td>
                        <td>425</td>
                        <td>3</td>
                        <td>Merchant's Rest or Nassau Harbor</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Stilt House</td>
                        <td>{getIcons(false, false, true, false, false, false)}</td>
                        <td>450</td>
                        <td>3</td>
                        <td>Nassau Harbor</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Treehouse</td>
                        <td>{getIcons(false, false, true, false, false, false)}</td>
                        <td>475</td>
                        <td>3</td>
                        <td>Cypress Forest</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Tower</td>
                        <td>{getIcons(true, false, false, false, true, false)}</td>
                        <td>500</td>
                        <td>3</td>
                        <td>Any Location</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Cottage</td>
                        <td>{getIcons(true, true, true, true, true, false)}</td>
                        <td>525</td>
                        <td>3</td>
                        <td>Forest Car or Merchant's Rest</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Boat House</td>
                        <td>{getIcons(true, false, false, false, true, true)}</td>
                        <td>800</td>
                        <td>3</td>
                        <td>Islands Car</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>House</td>
                        <td>{getIcons(true, false, true, true, true, true)}</td>
                        <td>1000</td>
                        <td>5</td>
                        <td>Cypress or Merchant's Rest</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Lighthouse</td>
                        <td>{getIcons(true, false, false, false, true, true)}</td>
                        <td>2100</td>
                        <td>7</td>
                        <td>Islands Car</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Mansion</td>
                        <td>{getIcons(true, true, true, true, true, true)}</td>
                        <td>3500</td>
                        <td>10</td>
                        <td>Cypress or Merchant's Rest</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>Manor</td>
                        <td>{getIcons(true, true, true, true, true, true)}</td>
                        <td>5000</td>
                        <td>15</td>
                        <td>Cypress Outskirts or Merchant's Rest Coast</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>Castle</td>
                        <td>{getIcons(true, true, true, true, true, true)}</td>
                        <td>7000</td>
                        <td>20</td>
                        <td>Player Choice</td>
                        <td>15</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}