import React from "react";
import Helmet from "react-helmet";

export default function Rules() {
    return (
        <>
            <Helmet><title>Rules</title></Helmet>
            <h1>Server Rules</h1>
            <h2>Common Rules</h2>
            <ol>
                <li>Be civil.</li>
                <li>No spamming.</li>
                <li>Keep all content PG13 or cleaner.</li>
                <li>No Erotic Roleplay (ERP) or other adult topics.</li>
                <li>No advertising.</li>
                <li>Avoid controversial topics (religion, politics, etc).</li>
            </ol>
            <h2>D&D Rules</h2>
            <ol>
                <li>Do not cheat.</li>
                <li>Do not transfer wealth between your characters in any form (coins, items, favors, etc).</li>
                <li>Do not PVP without consent from all parties.</li>
            </ol>
            <h2>Roleplay rules</h2>
            <ol>
                <li>Characters cannot roleplay in multiple locations at the same time.</li>
                <li>A character must be approved to RP with them.</li>
                <li>If you are in a quest, you cannot roleplay while that quest is happening.</li>
                <li>Erotic Roleplay (ERP) and other adult topics are prohibited.</li>
            </ol>
        </>
    )
}