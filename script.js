let s = 0
const sw = document.getElementById('switch')
switchteme = () => {
    if(s==0)
    {
    document.body.style.background='#2e2e2d';
    sw.innerText='Try out lite mode'
    s=1;
}
else{
    document.body.style.background='linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 32%, rgba(0,212,255,1) 100%)';
    sw.innerText='Try out dark mode'
    s=0;
}
}