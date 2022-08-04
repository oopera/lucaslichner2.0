import {useState} from "react";
import React from "react";


export default function AboutMe(props){
    const [active, setActive] = useState(true);
    const [hyperActive, setHyperActive] = useState(true);
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
            <tr onClick={() => setActive('ux')}>
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
                <td>HTML CSS JS PHP SQL</td>
            </tr>
            <tr onClick={() => setActive('ux')}>
                <td>UI&UX Design</td>
                <td>MongoDB Express React.js Node.js</td>
            </tr>
            <tr>
                <td>Illustrations</td>
                <td>Tailwind SCSS</td>
            </tr>
            <tr>
                <td>Graphics</td>
                <td>A tiny bit of WebGL</td>
            </tr>
        </table>
        )}
               {active === 'ux' && (
                       <table>
                       <tr>
                           <th>I do:</th>
                           <th>I know:</th>
                       </tr>
                       <tr>
                           <td onClick={() => setActive('web')} >Web Development</td>
                           <td>Figma, Axure</td>
                       </tr>
                       <tr>
                           <td onClick={() => setActive(true)}>UI&UX Design</td>
                           <td>Web&App Design</td>
                       </tr>
                       <tr>
                           <td>Illustrations</td>
                           <td>Rapid Prototyping, User Research</td>
                       </tr>
                       <tr>
                           <td>Graphics</td>
                           <td>User centered Design</td>
                       </tr>
                   </table>
               
               
               )}
               {active !== false && (
                <p onClick={() => setHyperActive(!hyperActive)} className="hoverPar"> Want to know more?</p>
               )}
                     {hyperActive !== false && (
                     
                     <table>
                     <tr>
                         <th>I am:</th>
                     </tr>
                     <tr>
                         <td className="hoverTable">23 Years old</td>
                     </tr>
                     <tr>
                         <td className="hoverTable">Currently studying Human Computer Interaction @ HRW Bottrop</td>
                     </tr>
                     <tr>
                         <td className="hoverTable">Currently working as a Shopify backend Developer</td>
                     </tr>
                     <tr>
                         <td className="hoverTable">Pretty rad. </td>
                     </tr>
                 </table>
                     )}
        </>
    )
}