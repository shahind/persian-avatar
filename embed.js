function PRAvatar_getRandomInt(max) {
  return 1 + Math.floor(Math.random() * (max-1));
}

function PRAvatar_showAvatar(width=100,height=100){
	var id = PRAvatar_getRandomInt(20);
	var avatar = document.createElement("img");
	avatar.setAttribute('src', 'https://shahind.github.io/persian-avatar/avatars/'+id+'.jpg');
	avatar.setAttribute('height', height);
	avatar.setAttribute('width', width);
	document.body.appendChild(avatar);
}

function PRAvatar_feedImg(avatarID){
	var id = PRAvatar_getRandomInt(20);
	var avatar = document.getElementById(avatarID);
	avatar.setAttribute('src', 'https://shahind.github.io/persian-avatar/avatars/'+id+'.jpg');
}