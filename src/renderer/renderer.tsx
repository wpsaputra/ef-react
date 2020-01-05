import * as React from 'react'
import { render } from 'react-dom'
import { App } from './App'

render(<App />, document.getElementById('root'))

document.onreadystatechange = () => {
    if (document.readyState == "complete") {
        handleWindowControls();
    }
};

function handleWindowControls() {
    let minimizebtn = document.getElementById('minimize-button')!;
    minimizebtn.addEventListener('click', (e) => {
        minimizeCurrentWindow();
    });
    
    let closebtn = document.getElementById('close-button')!;
    closebtn.addEventListener('click', (e) => {
        closeCurrentWindow();
    });
    
    let maximizebtn = document.getElementById('maximize-button')!;
    let unmaximizebtn = document.getElementById('unmaximize-button')!;

    maximizebtn.addEventListener('click', (e) => {
        maximizeCurrentWindow();
        maximizebtn.style.display="none";
        unmaximizebtn.style.display="flex";
    });
    
    unmaximizebtn.addEventListener('click', (e) => {
        unMaximizeCurrentWindow();
        maximizebtn.style.display="flex";
        unmaximizebtn.style.display="none";
    });
}

