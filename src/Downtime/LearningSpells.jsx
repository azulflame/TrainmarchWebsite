import React from "react";
import { Helmet } from "react-helmet";

export default function LearningScrolls() {
    return (
        <>
            <Helmet><title>Learning Spells</title></Helmet>
            <h1>Learning Spells</h1>
            <p>One thing central to the wizard class is the ability to learn new spells. To do so on this server, it requires a spell scroll, and the time and materials to copy it properly into your spellbook. The spell scroll is consumed by doing this.</p>
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
                        <td>65</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>80</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>100</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>120</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>150</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>190</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>240</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>300</td>
                        <td>8</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}