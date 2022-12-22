import React from "react";
import Helmet from "react-helmet";

export default function Retirement() {
    return (
        <>
            <Helmet><title>Character Retirement</title></Helmet>
            <h1>Retirement</h1>
            <p>Since there is a limited number of character slots, sometimes a character's story is finished
                and ready to move on. When this happens, a character can retire, making the character
                unplayable, and rewarding the player with stamps and gold based on the stamps
                the character had.<br /><br />The new character will have half of the stamps the old character had,
                and will have 10 gold for every stamp the new character starts with. If the character was level 20, use the stamps as if they had just reached level 20.</p>
            <h2>Freezing</h2>
            <p>If you want to put a character to the side and free up their slot for a while, you can freeze a character.
                <br /><br />
                When you freeze a character, they are unable to be played, and do not generate retirement stamps and gold. If a character is frozen, it must be frozen for at least 2 months.
            </p>
        </>
    )
}