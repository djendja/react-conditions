import React from 'react';
import './styles.scss';
import stylesModule from './htmlExample.module.scss';

export default function HtmlExample() {
    return <>
                        <h1 className="jsx-title">Hedy Lamarr's Todos</h1>
                        <img
                            src="https://i.imgur.com/yXOvdOSs.jpg"
                            alt="Hedy Lamarr"
                            className="photo"
                        />
                        <ul style={{backgroundColor: 'pink'}}>
                            <li>Invent new traffic lights</li>
                            <li>Rehearse a movie scene</li>
                            <li>Improve the spectrum technology</li>
                        </ul>
                        <button className={stylesModule.error_btn}>Button</button>
                        <br/>
            </>
    
    }