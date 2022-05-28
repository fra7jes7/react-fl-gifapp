import React from 'react';
// import ReactDOM from 'react-dom/client';
import { createRoot } from "react-dom/client";
import { GitExpertApp } from './GitExpertApp';

import './index.css';


// root.render(
//     <GitExpertApp />,
//     document.getElementById('root')
// );

const divRoot = document.querySelector('#root');
const root=createRoot(divRoot);

// root.render(saludo,divRoot);
root.render( <GitExpertApp />);

