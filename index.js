// Write your code here!
/*
    after index.js is processed
    no longer has DOM node 'main#main'
    has a 'newHeader' variable that points to node 'h1#victory'
    has a 'newHeader' variable that points to node 'h1#victory'
    has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside
 */
document.getElementById("main").remove();
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Douglas obara is the champion";
