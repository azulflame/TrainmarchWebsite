import React from "react";
import { Helmet } from "react-helmet";

export default function Research() {
    return (
        <>
            <Helmet><title>Research</title></Helmet>
            <h1>Researching Spells</h1>
            <p>
                If you wish to expand your knowledge of the arcane arts, you can use your spare time to research arcane texts for their secrets. By paying for access and fees, you can be let into Cypress's library, and discover a spell from a chosen school of magic.
                <br />
                Spells from level 1 - 8 are available to research, and the resulting knowledge is represented as a spell scroll. In order to learn spells of a level, you must be able to learn or prepare spells of that level.
            </p>
            <table className="blue-table">
                <thead>
                    <tr>
                        <th>Spell Level</th>
                        <th>Gold Cost</th>
                        <th>Downtime Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>90</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>155</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>270</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>470</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>820</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>1435</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>2515</td>
                        <td>35</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>4400</td>
                        <td>40</td>
                    </tr>
                </tbody>
            </table>
            <p>
                After you finish the research, a random spell scroll from the level and school will be assigned to you.
            </p>
        </>
    )
}