import React from "react";
import Helmet from "react-helmet";


export default function CharacterCreation() {
    return (
        <main>
            <Helmet><title>Character Creation</title></Helmet>
            <meta content="text/html; charset=UTF-8" httpEquiv="content-type" />
            <h1 className="11" id="h.rimgwfujldfz">
                Creating Your Character
            </h1>
            <h2>The Basics</h2>
            <ol>
                <li key="1">Select the site you want to use. The bot we use (Avrae) currently
                    supports 3 sites:
                    <ul>
                        <li><a href="https://www.dndbeyond.com">D&D Beyond</a></li>
                        <li><a href="https://docs.google.com/spreadsheets/d/1szvHmonNbX-A_UKcMfUlqEXvjH7IJADhO3lixamiPk4/edit#gid=359784640">Google Sheets</a></li>
                        <li><a href="https://www.dicecloud.com">Dicecloud</a></li>
                    </ul>
                    <p>We offer some content campaigns for our players on D&D Beyond. Here are their links. Note that the space is limited, so leave the campaign after you finish your edits.</p>
                    <ul>
                        <li><a href="https://ddb.ac/campaigns/join/28865511491003720">Content Campaign 1</a></li>
                        <li><a href="https://ddb.ac/campaigns/join/28865524009220166">Content Campaign 2</a></li>
                        <li><a href="https://ddb.ac/campaigns/join/28865531371723103">Content Campaign 3</a></li>
                        <li><a href="https://ddb.ac/campaigns/join/3120290319124018">Content Campaign 4</a></li>
                        <li><a href="https://ddb.ac/campaigns/join/35013373753346734">Content Campaign 5</a></li>
                        <li><a href="https://ddb.ac/campaigns/join/26173671119194881">Content Campaign 6</a></li>
                    </ul>
                </li>
                <li>
                    You will need to change some settings for the character. The notable changes are:
                    <ul>
                        <li>
                            Milestone XP.
                        </li>
                        <li>
                            Fixed HP.
                        </li>
                        <li>
                            Feat Prerequisites are required.
                        </li>
                        <li>
                            Multiclassing Prerequisites are Required.
                        </li>
                    </ul>
                </li>
                <li>
                    Decide how you want to make decide your stats. Your options (and their restrictions):
                    <ul>
                        <li><b>Point Buy</b> - If you want to use point buy, we use a modified version of the default point buy. You can only use point buy if you have not rolled for stats. <a href="https://chicken-dinner.com/5e/5e-point-buy.html">Point Buy Calculator</a>
                            <ul>
                                <li>Points: 27</li>
                                <li>Minimum: 6</li>
                                <li>Maximum: 18</li>
                            </ul>

                        </li>
                        <li><b>Rolling</b> - If you want to roll for your stats, that is an available option. To roll, use the <b>!threshold</b> command inside of your ticket. You may roll twice and choose which roll to use. Rolling uses 4d6 drop 1, min 68, max 75.</li>
                        <li><b>Standard Array</b> - If you rolled for your stats and aren't happy with what you got, you can instead take a Standard Array. A Standard Array is the stats 15/14/13/12/10/8, which you can assign to each stat.</li>
                    </ul>
                </li>
                <li>
                    Decide what race you want to play. All official races are allowed, both legacy and current variants. Mark it on your sheet.
                </li>
                <li>
                    Decide what class you want to play, and mark it on your sheet. Select any subclasses you want.
                    <ul>
                        <li>
                            All official subclasses are allowed except the Wizard’s School of Chronurgy.
                        </li>
                    </ul>
                </li>
                <li>
                    Set your level. All PCs start at level 3. Select any options that are required. In D&D Beyond, these will show up with a small blue icon on the dropdown that you need to make a choice for.
                </li>
                <li>
                    Put your stats on the character sheet. If you rolled or used our point buy, select “Manual/Rolled” and input the stats. If you are using the standard array, select “Standard Array”. Then put in your stats.
                </li>
                <li>Select your background. Choose any options that are required.
                    <ul><li>Custom Background is allowed, but the only mechanics you gain are the languages and proficiencies.</li></ul></li>
                <li>
                    Gain your starting equipment. We use starting equipment, not starting gold.
                </li>
                <li>Congratulations, you have finished your character! Make sure to select any spells (if applicable) and equip your starting gear.
                </li>
            </ol>
            <h2>
                Optional Feat
            </h2>
            <p>We allow all characters (Except Custom Lineage races) to take a feat at character creation. You may choose from one of the following feats:</p>
            <ul>
                <li>Athlete</li>
                <li>Actor</li>
                <li>Linguist</li>
                <li>Observant</li>
                <li>Skilled</li>
                <li>Weapon Master</li>
            </ul>
            <h2>Optional Common Magic Item</h2>
            <p>We allow all characters to take a common magical item at character creation. It must be common. It must be magical.
            </p>
            <h2>
                Character Origination
            </h2>
            <p>
                Characters on this server are either Natives or Wanderers. Natives grew up in Cypress, while Wanderers were pulled to the Train from an external source. For purposes of planar travel or banishment, once you come to the train, your home becomes the Train, specifically Cypress.
            </p>
            <h2>
                Application Format
            </h2>
            <p>
                Character Name: <br></br>
                Wanderer/Native: <br></br>
                Character [Sub]Class: <br></br>
                Character Level: <br></br>
                Character Race: <br></br>
                Character Background: <br></br>
                Stat Creation Method: <br></br>
                Optional Feat: <br></br>
                Optional Common Magic Item: <br></br>
                If applicable, retired stamps/gold: <br></br>
                Sheet Link:
            </p>
            <h3>If you do not put the source and amount of your retiring stamps and gold, you do not gain them for your character!</h3>
        </main>
    );
}