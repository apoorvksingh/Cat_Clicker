
var names= ["Tom", "Garfield", "Gidget", "Felix", "Chesire", "Whiskers"];
var catPic = ["cat1.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpg", "cat5.jpg", "cat6.jpg"];
var clickCount = [0,0,0,0,0,0];

for (var i =0;i < names.length; i++) {
    var listStr = "<li><p class=\"cat\" id =\"" + i + "\">" + names[i] + "</p></li>";
    $('#cat-list').append(listStr);
}
var x = document.getElementsByClassName("cat");

var show = function(){
    $('.imagepanel').empty();
    var catID = parseInt($(this).attr("id"));
    var name = "<h1>" + names[catID] + "</h1>";
    var imageSrc = "<img id=\"cat" +catID+ "\" class=\"catimage\" src=\"img/" + catPic[catID] + "\">";
    var counter = "<p id=\"clickCount" +catID+"\" > Click Count :" + clickCount[catID] + "</p>";
    $('.imagepanel').append(name+imageSrc+counter);
    var scriptTag = "<script>\nvar x1 = document.getElementsByClassName('catimage');\nconsole.log(x1);\nvar countInc = function() {\nvar index = $(this).attr(\"id\");\nindex = parseInt(index.substr(index.length-1));\nclickCount[index] += 1;\nconsole.log(clickCount[index]);\nvar newCount = $(\"#clickCount\"+ index);\nnewCount.text('Click Count :' + clickCount[index]);};\nx1[0].addEventListener('click', countInc);\n</script>";
    $('body').append(scriptTag);
};
for( var i = 0; i < x.length; i++) {
   x[i].addEventListener("click", show);
}



