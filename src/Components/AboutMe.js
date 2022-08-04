import {useState} from "react";
import React from "react";


export default function AboutMe(props){
    const [active, setActive] = useState(true);
    return(
        <>
        <div className="hoverPar" onClick={() => setActive(!active)}> About me </div>
        {active === true && (
        <table>
            <tr>
                <th>I do:</th>
            </tr>
            <tr onClick={() => setActive('web')}>
                <td className="hoverTable">Web Development</td>
            </tr>
            <tr>
                <td className="hoverTable">UI&UX Design</td>
            </tr>
            <tr>
                <td className="hoverTable">Illustrations</td>
            </tr>
            <tr>
                <td className="hoverTable">Graphics</td>
            </tr>
        </table>
        )}
                {active === 'web' && (
        <table>
            <tr>
                <th>I do:</th>
                <th>I know:</th>
            </tr>
            <tr>
                <td onClick={() => setActive(true)}>Web Development</td>
                <td>HTML CSS JS</td>
            </tr>
            <tr>
                <td>UI&UX Design</td>
            </tr>
            <tr>
                <td>Illustrations</td>
            </tr>
            <tr>
                <td>Graphics</td>
            </tr>
        </table>
        )}
        </>
    )
}