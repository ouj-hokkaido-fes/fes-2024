let fes_day = new Date(2024,8,14,0).getTime();
let time = 0;

let cd_DD = document.querySelector('.cd_DD');
let cd_HH = document.querySelector('.cd_HH');
let cd_MM = document.querySelector('.cd_MM');
let cd_SS = document.querySelector('.cd_SS');

function startTimer(){
    setInterval('showTimer()',1000);
}
function showTimer(){
    if(time <= 0){
        return("fes Start");
    }
    else{
        time = parseInt(Number(new Date().getTime() - fes_day)/1000)*-1;
        console.log(time);

        time_DD = parseInt(time/86400);
        time_HH = parseInt((time-86400*time_DD)/3600);
        time_MM = parseInt(((time-86400*time_DD)-3600*time_HH)/60);
        time_SS = parseInt((((time-86400*time_DD)-3600*time_HH)-60*time_MM));

        cd_DD.textContent = parseInt(time_DD).toString().padStart(2,"0");
        console.log(time_DD);
        cd_HH.textContent = parseInt(time_HH).toString().padStart(2,"0");
        console.log(time_HH);
        cd_MM.textContent = parseInt(time_MM).toString().padStart(2,"0");
        console.log(time_MM);
        cd_SS.textContent = parseInt(time_SS).toString().padStart(2,"0");
        console.log(time_SS);
    }
}

time = parseInt(Number(new Date().getTime() - fes_day)/1000)*-1;
console.log(time);