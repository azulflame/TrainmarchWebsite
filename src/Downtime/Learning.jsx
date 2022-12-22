import React from "react";
import { Helmet } from "react-helmet";

export default function Learning() {
    return (
        <>
            <Helmet><title>Learning Additional Skills</title></Helmet>
            <h1>Learning Additional Skills</h1>
            <p>One of the available downtime actions players can take is to learn additional proficiencies. This allows characters which deviate from their original story the ability to represent some of their changes mechanically.</p>
            <p>To enable this, you can spend downtime learning various proficiencies. To keep things balanced, there are some restrictions on how much you can learn.</p>
            <table className="blue-table">
                <thead>
                    <tr>
                        <th>Proficiency</th>
                        <th>Downtime Cost</th>
                        <th>Maximum Limit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Skill Proficiency</td>
                        <td>75</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Weapon Proficiency</td>
                        <td>50</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Tool Proficiency</td>
                        <td>50</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Common Language</td>
                        <td>50</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Exotic Language</td>
                        <td>75</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Instrument Proficiency</td>
                        <td>50</td>
                        <td>5</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}