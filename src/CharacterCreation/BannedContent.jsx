import React from "react";
import Helmet from "react-helmet";

export default function BannedContent() {
    return (
        <>
            <Helmet><title>Banned Content</title></Helmet>
            <h1>Banned Content</h1>
            <p>
                Some content does not work well with keeping everyone's time and simplicity of commands,
                or has led to balance problems in the past. As a result, not all content
                is available to players. The restricted content is listed here:
            </p>
            <ul>
                <h3>Races</h3>
                <li>Giff</li>
                <h3>Subclasses</h3>
                <li>School of Chronurgy</li>
                <h3>Spells</h3>
                <li>Chronurgy Spells</li>
                <li>Create Spelljamming Helm</li>
                <h3>Backgrounds</h3>
                <li>Strixhaven backgrounds</li>
                <li>Spelljammer backgrounds</li>
                <h3>Feats</h3>
                <li>Strixhaven feats</li>
                <h3>Other</h3>
                <li>Unearthed Arcana</li>
                <li>Unapproved Homebrew</li>
                <li>Characters that copy from media</li>
            </ul>
        </>
    )
}