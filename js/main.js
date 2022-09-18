//створюємо елементи лайк/дизлайк

var likeImage = document.getElementById('roflan_like');
var dislikeImage = document.getElementById('roflan_dislike');

//Функції що віповідають за показ лайків/дизлайків
function showLikePicture() {
    likeImage.style.display = 'block';
    dislikeImage.style.display = 'none';
}

function showDislikePicture() {
    dislikeImage.style.display = 'block';
    likeImage.style.display = 'none';
}



//ствроюємо модал
var modal = document.getElementById('myModal');

var img = document.getElementById('uncleBogdan');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');
img.onclick = function(){
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

/*Достаємо елемент спан, */
var span = document.getElementsByClassName('close')[0];

span.onclick = function(){
    modal.style.display = 'none';
}


$(document).ready(function () {
    $("#demo").html("");
});