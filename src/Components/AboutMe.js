import {useState} from "react";
import React from "react";


export default function AboutMe(props){
    const [active, setActive] = useState('ux');
    const [hyperActive, setHyperActive] =  useState(false);
    return(
        <>
        <a id="text--aboutme" className="hoverPar" onClick={() => {setActive(!active); setHyperActive(false)}}> About me </a>
        {active === true && (
            <div>
           
        <table border="1" cellPadding="0" cellSpacing="0">
            <tbody>
            <tr>
                <th>I do:</th>
            </tr>
            <tr onClick={() => setActive('web')}>
                <td className="table--hover"><p>Web Development</p></td>
            </tr>
            <tr onClick={() => setActive('ux')}>
                <td className="table--hover"><p>User Experience Design</p></td>
            </tr>
            <tr>
                <td className="table--hover">Illustrations</td>
            </tr>
            <tr>
                <td className="table--hover">Graphics</td>
            </tr>
            </tbody>
        </table>
        </div>
        )}
        {active === 'web' && (
            
            <table border="1" cellPadding="0" cellSpacing="0">
                <tbody>
                <tr>
                    <th>I do:</th>
                    <th>I know:</th>
                </tr>
                <tr>
                    <td className="table--hover selTd" onClick={() => setActive(true)}><p>Web Development</p></td>
                    <td>HTML CSS JS PHP SQL</td>
                </tr>
                <tr>
                    <td className="table--hover" onClick={() => setActive('ux')}><p>User Experience Design</p></td>
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
                <table border="1" cellPadding="0" cellSpacing="0">
                <tbody>
                <tr>
                    <th>I do:</th>
                    <th>I know:</th>
                </tr>
                <tr>
                    <td className="table--hover" onClick={() => setActive('web')} ><p>Web Development</p></td>
                    <td>User centered Design, Usability Engineering</td>
                </tr>
                <tr>
                    <td className="table--hover selTd" onClick={() => setActive(true)}><p>User Experience Design</p></td>
                    <td>Human Factors, Ergonomics</td>
                </tr>
                <tr>
                    <td>Illustrations</td>
                    <td>Rapid Prototyping, User Research</td>
                </tr>
                <tr>
                    <td>Graphics</td>
                    <td>Figma, Adobe Suite </td>
                </tr>
                </tbody>
            </table>
        
               
               )}
        {active !== false && (
        <a onClick={() => setHyperActive(!hyperActive)} className="hoverPar"> Want to know more?</a>
        )}
                {hyperActive !== false && (
        
                <table border="1" cellPadding="0" cellSpacing="0">
                <tbody>
                <tr>
                    <th>I am:</th>
                </tr>
                <tr>
                    <td className="table--hover">23 Years old</td>
                </tr>
                <tr>
                    <td className="table--hover">Currently doing my b.sc. in Human Computer Interaction @ HRW Bottrop</td>
                </tr>
                <tr>
                    <td className="table--hover">Currently working as a Shopify backend Developer</td>
                </tr>
                <tr>
                    <td className="table--hover">Pretty rad. </td>
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