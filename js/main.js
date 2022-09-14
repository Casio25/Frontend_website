
function showLikePicture(){
    var likeImage = document.getElementById('roflan_like');
    var dislikeImage = document.getElementById('roflan_dislike');
    likeImage.style.display = 'block';
    dislikeImage.style.display = 'none';
}

function showDislikePicture(){
    var dislikeImage = document.getElementById('roflan_dislike');
    var likeImage = document.getElementById('roflan_like');
    dislikeImage.style.display = 'block';
    likeImage.style.display = 'none';
}
