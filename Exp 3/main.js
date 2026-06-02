let heading = document.getElementById("heading");
let paragraph = document.getElementById("paragraph");
let input = document.getElementById("userinput");


let fontzise= 16 ;

// change heading text
document.getElementById("changeheading").addEventListener("click", function() {
    if (input.value !== "") {
        heading.innerHTML = input.value;
    }
});
// change background color
document.getElementById("bgcolorbtn").onclick = function() {
    document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
}

// increase font size

document.getElementById("increasefontsize").addEventListener("click", function() {
    fontzise += 2;
    heading.style.fontSize = fontzise + "px";
    paragraph.style.fontSize = fontzise + "px";
});
//  decrease font size


document.getElementById("decreasefontsize").addEventListener("click", function() {
    fontzise -= 2;
    heading.style.fontSize = fontzise + "px";
    paragraph.style.fontSize = fontzise + "px";
});

// show/hide paragraph


document.getElementById("toggleparagraph").addEventListener("click", function() {  
      if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
});

// reset heading and paragraph to default

document.getElementById("reset").addEventListener("click", function() {
    heading.innerHTML = "Welcome to  JavaScript Lab";
    paragraph.innerHTML = "This is a sample paragraph. You can change the text, background color, and font size using the buttons above.";
    document.body.style.backgroundColor = "white";
    fontzise = 16;
    heading.style.fontSize = fontzise + "px";
    paragraph.style.fontSize = fontzise + "px";
    paragraph.style.display = "block";
    input.value = "";
});