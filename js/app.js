const getRemainTime = deadLine =>{
    let now = new Date();
        remainTime =  (new Date(deadLine) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = ('0' + Math.floor(remainTime / (3600 * 24))).slice(-2)
        
    return{
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays,
    }


};

let pDia = document.getElementById('dia'),
    pHora = document.getElementById('hora'),
    pMin = document.getElementById('minuto'),
    pSeg = document.getElementById('segundo');

//console.log(getRemainTime('May 05 2020 21:52:45 GMT-0400'));
const countDown = (deadLine) =>{

    const timerUpdate = setInterval( ()=>{
        let t = getRemainTime(deadLine);

        pDia.textContent = t.remainDays;
        pHora.textContent = t.remainHours;
        pMin.textContent = t.remainMinutes;
        pSeg.textContent = t.remainSeconds;

        /*el.innerHTML = `${t.remainDays}d:${t.remainHours}h:${t.remainDays}d:${t.remainMinutes}m:${t.remainSeconds}s`;*/

        if(t.remainTime <= 1){
            clearInterval(timerUpdate)
            /*el.innerHTML = finalMessage;*/
            alert('Finaliza el conteo');
        }

    },1000)
};



countDown('May 3 2020 00:00:00 GMT-0400');