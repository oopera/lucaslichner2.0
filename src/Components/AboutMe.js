import {useState} from "react";
import React from "react";


export default function AboutMe(props){
    const [active, setActive] = useState(true);
    const [hyperActive, setHyperActive] =  useState(false);
    return(
        <>
        <a className="hoverPar" onClick={() => {setActive(!active); setHyperActive(false)}}> About me </a>
        {active === true && (
            <div>
           
        <table>
            <tbody>
            <tr>
                <th>I do:</th>
            </tr>
            <tr onClick={() => setActive('web')}>
                <td className="hoverTable"><p>Web Development</p></td>
            </tr>
            <tr onClick={() => setActive('ux')}>
                <td className="hoverTable"><p>UI&UX Design</p></td>
            </tr>
            <tr>
                <td className="hoverTable">Illustrations</td>
            </tr>
            <tr>
                <td className="hoverTable">Graphics</td>
            </tr>
            </tbody>
        </table>
        </div>
        )}
                {active === 'web' && (
                    
                    <table>
                        <tbody>
                        <tr>
                            <th>I do:</th>
                            <th>I know:</th>
                        </tr>
                        <tr>
                            <td className="hoverTable" onClick={() => setActive(true)}><p>Web Development</p></td>
                            <td>HTML CSS JS PHP SQL</td>
                        </tr>
                        <tr>
                            <td className="hoverTable" onClick={() => setActive('ux')}><p>UI&UX Design</p></td>
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
                        </tbody>
                    </table>
        )}
               {active === 'ux' && (
                       <table>
                        <tbody>
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
                       </tbody>
                   </table>
               
               
               )}
               {active !== false && (
                <a onClick={() => setHyperActive(!hyperActive)} className="hoverPar"> Want to know more?</a>
               )}
                     {hyperActive !== false && (
               
                     <table>
                        <tbody>
                     <tr>
                         <th>I am:</th>
                     </tr>
                     <tr>
                         <td className="hoverTable">23 Years old</td>
                     </tr>
                     <tr>
                         <td className="hoverTable">Currently doing my b.sc. in Human Computer Interaction @ HRW Bottrop</td>
                     </tr>
                     <tr>
                         <td className="hoverTable">Currently working as a Shopify backend Developer</td>
                     </tr>
                     <tr>
                         <td className="hoverTable">Pretty rad. </td>
                     </tr>
                     </tbody>
                 </table>
           
                     )}
                    {hyperActive !== false && (
                        <a className="hoverPar margin" href='https://lukislachsfarm.notion.site/lukislachsfarm/lucaslichner-CV-94396266bb2c41968ddab1e4357ffa0e' target='_blank'> If you still want to know more, here's my CV.</a>
        
                        )}
        </>
    )
}