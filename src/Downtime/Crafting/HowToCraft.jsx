import React from "react";
import Helmet from "react-helmet";

export default function HowToCraft() {
    return <>
        <Helmet><title>How to Craft Things</title></Helmet>
        <h1>How To Craft</h1>
        <p>Crafting items is available to all players. When you craft an item, you will pay the gold cost
            for the item up front, and then will work towards the progress cost with your downtime. The only bonuses
            that count towards these progress checks will be proficiency or expertise in the appropriate tool for the item,
            and the artificer's Magic Item Adept class feature.
            <h3>Starting to Craft</h3>
            When you first start crafting an item, you will pay the gold cost of the item.
            <h3>Spending Downtime</h3>
            When you spend downtime on a crafting item, you make 1 roll of progress per DT spent. The only modifiers for the result are proficiency or expertise in the appropriate tool,
            or the artificer's Magic Item Adept class feature.
            <h3>Progress per roll</h3>
            When you roll, you gain an amount of progress towards the final crafting item. The progress uses the following chart:
        </p>
        <table className="blue-table">
            <thead>
                <tr>
                    <th>Roll</th>
                    <th>Progress gained</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Natural 1</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>1 or lower</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>2-4</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>5-9</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>10-14</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>15-19</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>20 or higher</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>Natural 20</td>
                    <td>7</td>
                </tr>
            </tbody>
        </table>
        <p>When you meet the progress requirement for the item, the item is created and the crafting process is over.</p>
    </>
}