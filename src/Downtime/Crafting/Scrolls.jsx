import React from "react";
import { Helmet } from "react-helmet";

export default function Scrolls() {
    return (
        <>
            <Helmet><title>Creating Spell Scrolls</title></Helmet>
            <h1>Creating Spell Scrolls</h1>
            <p>Sometime casters want to, for various reasons, create a spell scroll from a spell they already know. This costs time and money for the materials and effort put in to create the spell scroll. To create a spell scroll, you can pay the following downtime and gold, and create the spell scroll when you finish paying for it.</p>
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
                        <td>Cantrip</td>
                        <td>45</td>
                        <td>2</td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>90</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>155</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>270</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>470</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>820</td>
                        <td>13</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>1435</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>2515</td>
                        <td>18</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>4400</td>
                        <td>20</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}