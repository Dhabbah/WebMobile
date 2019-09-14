

function upDate(previewPic){

    //The first two is about getting the attribute, src and alt, to use them.
    var src = previewPic.getAttribute("src");
    var alt = previewPic.getAttribute("alt");
    //The second two is to show the attribute we have already taken
    document.getElementById("image").style.backgroundImage = "url(" + src + ")";
    document.getElementById("image").innerHTML = alt;
	}

	function unDo(x){
    
    // Here we get the element by its id and clean it. Then we show a the pervious message.
    x = document.getElementById("image");
    x.style.backgroundImage = "url('')";
    document.getElementById("image").innerText = "Hover over an image below to display here.";
	}