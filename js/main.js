var likeImage = document.getElementById('roflan_like');
var dislikeImage = document.getElementById('roflan_dislike');
var dislikeImage2 = document.getElementById('roflan_dislike_2');
var likeImage2 = document.getElementById('roflan_like_2');

function showLikePicture() {
    likeImage.style.display = 'block';
    dislikeImage.style.display = 'none';
}

function showDislikePicture() {
    dislikeImage.style.display = 'block';
    likeImage.style.display = 'none';
}

function showLikePicture2() {
    likeImage2.style.display = 'block';
    dislikeImage2.style.display = 'none';
}

function showDislikePicture2() {
    dislikeImage2.style.display = 'block';
    likeImage2.style.display = 'none';
}