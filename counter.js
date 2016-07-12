
//create arrays for each aspect of the page
var names= ["Tom", "Garfield", "Gidget", "Felix", "Chesire", "Whiskers"];
var catPic = ["cat1.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpg", "cat5.jpg", "cat6.jpg"];
var clickCount = [0,0,0,0,0,0];

//Create the unordered list for the cat names
for (var i =0;i < names.length; i++) {
    var listStr = "<li><p class=\"cat\" id =\"" + i + "\">" + names[i] + "</p></li>";
    $('#cat-list').append(listStr);
}
var x = document.getElementsByClassName("cat");

var show = function(){
    //add the cat which is clicked on in the menu in the image panel after removing the previous one
    $('.imagepanel').empty();
    var catID = parseInt($(this).attr("id"));
    var name = "<h1>" + names[catID] + "</h1>";
    var imageSrc = "<img id=\"cat" +catID+ "\" class=\"catimage\" src=\"img/" + catPic[catID] + "\">";
    var counter = "<p id=\"clickCount" +catID+"\" > Click Count :" + clickCount[catID] + "</p>";
    $('.imagepanel').append(name+imageSrc+counter);
    //Add a script that adds the click function to the image to increase the counter;
    var scriptTag = "<script>\nvar x1 = document.getElementsByClassName('catimage');\nconsole.log(x1);\nvar countInc = function() {\nvar index = $(this).attr(\"id\");\nindex = parseInt(index.substr(index.length-1));\nclickCount[index] += 1;\nconsole.log(clickCount[index]);\nvar newCount = $(\"#clickCount\"+ index);\nnewCount.text('Click Count :' + clickCount[index]);};\nx1[0].addEventListener('click', countInc);\n</script>";
    $('body').append(scriptTag);
};
//initialise the click properties for each of the cat menu items.
for( var i = 0; i < x.length; i++) {
   x[i].addEventListener("click", show);
}



