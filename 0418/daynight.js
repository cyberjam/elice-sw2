function night(){
    document.querySelector('body').style.backgroundColor = 'black';
    //$('body').css("background-color",'black');
    //document.querySelector('body').style.color = 'white';

    let as = document.querySelectorAll('a');
    for(let i=0; i<as.length;i++){
        as[i].style.color='white'
    }
    //$('a').css("color","white")
}
function day(){
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
    // 이 버튼의 value값을 night로 변경한다. 
    let as = document.querySelectorAll('a');
    for(let i=0; i<as.length;i++){
        as[i].style.color='black'
    }
}

export function dayNight(mode){
    if(mode ==='night'){
        night();
    }else {
        day();
    }
}