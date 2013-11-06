$( document ).ready(function() {
	
	var setIntervalOnce = false;
	var fontSize = 12;
	
	function textIncrease(){
		fontSize = fontSize + 2;
		$("#pimpText").css("font-size", fontSize+"pt");
	}
	
	$("#pimpButton1").click(function(event) {
		if (!setIntervalOnce){
			setIntervalOnce = true;
			setInterval(textIncrease, 500);
		}
	});
	
	$("#pimpButton2").click(function(event) {
		$("#pimpText").css("text-transform", "uppercase");
		var text = $("#pimpText").val();
		var lines = text.split("\n");
		var length = lines.length;   
		for (var i = 0; i < length; i++) {
		  var words = lines[i].split(" ");
		  var lastWord = words[words.length-1];
		  var lastLetter = lastWord.charAt(lastWord.length-1)
		  //Or use regex to check if the last letter is an end of sentence punctuation
		  if (lastLetter == "!" || lastLetter == "." || lastLetter == "?"){
			  lastWord = lastWord.substr(0, lastWord.length-1);
		  }
		  lines[i] = lines[i].replace(lastWord, lastWord + "-izzle");
		}
		var newText = lines.join("\n");
		$("#pimpText").val(newText);
	});
	
	$("#pimpButton3").click(function(event) {
		if ($("#pimpCB").is(':checked')){
			$('body').css('background-image', 'url(background.jpg)');
		}
	});
	
	$("#pimpButton4").click(function(event) {
		var text = $("#pimpText").val();
		var lines = text.split("\n");
		var linelength = lines.length;   
		for (var i = 0; i < linelength; i++) {
		  var words = lines[i].split(" ");
		  var wordlength = words.length;
		  for (var j = 0; j < wordlength; j++){
			  var word = words[j];
			  var consonant = "";
			  var lastLetter = word.charAt(word.length-1);
			  //or use regex
			  if (lastLetter == "!" || lastLetter == "." || lastLetter == "?" || lastLetter == ","){
				  word = word.substr(0, word.length-1);
			  }
			  if (isConsonant(word.charAt(0).toLowerCase())){
				  consonant = word.charAt(0);
			  }
			  words[j] = words[j].replace(word, word.substr(1, word.length-1) + consonant + "ay");
		  }
		  lines[i] = words.join(" ");
		}
		var newText = lines.join("\n");
		$("#pimpText").val(newText);
	});
	
	function isConsonant(c) {
	    return ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'].indexOf(c) !== -1
	}
	
	$("#pimpCB").change(function(event) {
		if ($("#pimpCB").is(':checked')){
			$("#pimpText").css("font-weight", "bold");
			$("#pimpText").css("color", "green");
			$("#pimpText").css("text-decoration", "underline");
			$("#pimpText").css("text-decoration", "blink");
		}
		else {
			$("#pimpText").css("font-weight", "normal");
			$("#pimpText").css("color", "inherit");
			$("#pimpText").css("text-decoration", "normal");
		}
	});
	
});
