import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function AboutDowntime() {
    return (
        <>
            <Helmet><title>About Downtime</title></Helmet>
            <h1>Downtime</h1>
            <h2>What is Downtime?</h2>
            <p>Downtime (abbreviated DT) is a representation of the time you spend outside of quests on the server. Since characters can do things in that time, we have some actions that you can take that benefit your character. 1 DT is equal to a single 24 hour period, and includes the time your character sleeps in that day.</p>
            <h2>Why do I want to use Downtime?</h2>
            <p>Using this system allows you to grow your character outside of questing.</p>
            <h2>How do I gain downtime?</h2>
            <p>Downtime is one of the rewards from quests. You also can use 1 free DT every 24 hours, without needing to add it to your total. The bot will manage this for you, refreshing the daily DT 24 hours after you use it. You cannot hold more than 30 DT at a time, so make sure to use it before you lose it.</p>
            <h2>How do I use my downtime?</h2>
            <p>To use your downtime, we have several actions you can take. They all cost downtime to use, so make sure you have some before try to use any.</p>
            <h2>How much Downtime can I use at a time?</h2>
            <p>There is no limit to the amount of downtime you can use at a time, and no limit to how much downtime you can store at a time.</p>
            <h2>What can I do with my downtime?</h2>
            <p>There are several actions you can take. They are listed below, and details can be found on each page.</p>
            <ul>
                <li><Link to="/downtime/working">Working</Link></li>
                <li><Link to="/downtime/learning">Learn Proficiencies</Link></li>
                <li><Link to="/downtime/housing">Buy Housing</Link></li>
                <li><Link to="/downtime/research">Research Spells</Link></li>
                <li><Link to="/downtime/scrolls">Copy Spell Scrolls into a Spellbook</Link></li>
                <li><Link to="/downtime/crafting/howto">Craft Items, Potions, or Spell Scrolls</Link></li>
            </ul>
        </>
    );
}