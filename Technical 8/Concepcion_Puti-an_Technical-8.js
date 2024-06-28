function resetFlexbox(){
    document.querySelector('.content-output').style.gap = '0px';
    document.querySelector('.content-output').style.flexDirection = 'row';
    document.querySelector('.content-output').style.justifyContent = 'flex-start';
    document.querySelector('.content-output').style.alignItems = 'flex-start';
    document.getElementById('BI').value = 0;
    resetFlexGrow();
}

function updateGap(){
    var gap = document.getElementById('BI').value;
    document.querySelector('.content-output').style.gap = gap + 'px';
}

function flexDirection(direction){
    document.querySelector('.content-output').style.flexDirection = direction;
}

function justifyContent(justify){
    document.querySelector('.content-output').style.justifyContent = justify;
}

function alignItems(align){
    document.querySelector('.content-output').style.alignItems = align;
}

function resetFlexGrow(){
    var items = document.querySelectorAll('.box-flex');
    items.forEach(item => {
        item.style.flexGrow = 0;
    });
    document.getElementById('B1').value = 0;
    document.getElementById('B2').value = 0;
    document.getElementById('B3').value = 0;
}

function GrowAll(){
    var items = document.querySelectorAll('.box-flex');
    items.forEach(item => {
        item.style.flexGrow = 1;
    });
}

function updateB1(){
    var value = document.getElementById('B1').value;
    var value = parseInt(value); 
    document.querySelector('.content-output').children[0].style.flexGrow = value;

}

function updateB2(){
    var value = document.getElementById('B2').value;
    var value = parseInt(value); 
    document.querySelector('.content-output').children[1].style.flexGrow = value;

}

function updateB3(){    
    var value = document.getElementById('B3').value;
    var value = parseInt(value); 
    document.querySelector('.content-output').children[2].style.flexGrow = value;

}







