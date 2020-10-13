"use strict"

document.addEventListener('DOMContentLoaded',function(){

    console.log('andando');
    const div = document.querySelector('.loading-bar')

    div.addEventListener('click', async function()
    {
        this.style.animation = await "testAnimation 2s 1";
        this.style.backgroundColor = 'red'
    })
})