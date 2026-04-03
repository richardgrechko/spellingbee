try {
	fetch("words.txt").then(x=>x.text()).then(words=>{
		words = words.split("\n").map(e=>e.split(","))
		const filter = words.filter(e=>{
			var bool = false;
			for (let i in e) {
				bool = e[i].length <= (score/25)**0.35+4 || bool
			}
			return bool
		});
		const k = {
			currentWord: filter[Math.floor(Math.random()*filter.length)],
			score: 0
		};
		document.getElementById("gameover").style = "display:none;";
		function isSpellingValid() {
			if (data.currentWord.has(document.getElementById("yourspelling").value.toLowerCase())) {
				data.currentWord = filter[Math.floor(Math.random()*filter.length)]
				document.getElementById("yourspelling").value = "";
				data.score++;
				filter = words.filter(e=>{
					const bool = false;
					for (let i in e) {
						bool = e[i].length <= (score/25)**0.35+4 || bool
					}
					return bool
				});
				document.getElementById("word").style = `filter: blur(${Math.sqrt(data.score)*0.5}px);`
			} else {
				document.getElementById("app").style = "display:none;";
				document.getElementById("gameover").style = "display:flex;";
			}
		}
		function retry() {
			document.getElementById("app").style = "display:flex;";
			document.getElementById("gameover").style = "display:none;";
			data.score = 0;
			data.currentWord = filter[Math.floor(Math.random()*filter.length)];
			document.getElementById("word").style = `filter: blur(0);`
			document.getElementById("yourspelling").value = "";
		}
		function update() {
			document.getElementById("score").innerText = `Score: ${data.score}`
			document.getElementById("word").innerText = `Your word: ${data.currentWord[0]}`
			if (document.getElementById("yourspelling").value == "") {
				document.getElementById("enter").disabled = true
			} else {
				document.getElementById("enter").disabled = false
			}
		}
		document.getElementById("yourspelling").addEventListener("keypress",function(e) {
			if (e.keyCode == 13) {
				isSpellingValid()
			}
		});
		document.getElementById("enter").addEventListener("click",isSpellingValid);
		document.getElementById("retry").addEventListener("click",retry);
		setInterval(update,0)
	})
} catch (e) {
	document.getElementById("yourspelling").value = "An error occurred";
}
