let words = [
	"adapt",
	"advance",
	"all",
	"awesome",
	"bad",
	"barrel",
	"bridge",
	"bring",
	"blue",
	"capital",
	"castle",
	"cat",
	"change",
	"chimney",
	"circle",
	"consecutive",
	"corgi",
	"create",
	"curl",
	"darkness",
	"deal",
	"deserve",
	"dissent",
	"dog",
	"erupt",
	"every",
	"everything",
	"fall",
	"ferocious",
	"first",
	"force",
	"gallant",
	"gibberish",
	"glisten",
	"good",
	"green",
	"haste",
	"hierarchy",
	"hindrance",
	"interest",
	"isle",
	"island",
	"jank",
	"jealousy",
	"jouster",
	"kingdom",
	"ladder",
	"last",
	"leaf",
	"least",
	"leave",
	"life",
	"light",
	"loose",
	"lustrous",
	"malice",
	"mankind",
	"mental",
	"metal",
	"misuse",
	"mouse",
	"multitask",
	"nasty",
	"neglect",
	"nest",
	"never",
	"oops",
	"orbit",
	"overlap",
	"paradise",
	"parallel",
	"paste",
	"penetrate",
	"pet",
	"pink",
	"post",
	"postpone",
	"purple",
	"quadrant",
	"quarrel",
	"radiation",
	"red",
	"resemblance",
	"reset",
	"ring",
	"rust",
	"sand",
	"seal",
	"singer",
	"soon",
	"steal",
	"task",
	"teach",
	"teal",
	"tell",
	"test",
	"tick",
	"turquoise",
	"underline",
	"vast",
	"very",
	"vouch",
	"western",
	"yellow",
	"zebra",
	"zoom"
];
const data = {
	currentWord: words[Math.floor(Math.random()*words.length)],
	score: 0
};
document.getElementById("gameover").visible = false;
function isSpellingValid() {
	if (document.getElementById("yourspelling").value.toLowerCase() == data.currentWord) {
		data.currentWord = words[Math.floor(Math.random()*words.length)]
		document.getElementById("yourspelling").value = "";
		data.score++;
		document.getElementById("word").style = `filter: blur(${Math.sqrt(data.score)*4}px);`
	} else {
		document.getElementById("app").visible = false;
	}
}
function retry() {
	document.getElementById("gameover").visible = false;
	document.getElementById("app").visible = true;
	data.score = 0;
	data.currentWord = words[Math.floor(Math.random()*words.length)];
	document.getElementById("word").style = `filter: blur(0);`
}
function update() {
	document.getElementById("word").innerText = `Your word: ${data.currentWord}`
}
document.getElementById("enter").addEventListener("click",isSpellingValid);
document.getElementById("retry").addEventListener("click",retry);
setInterval(update,0)
