var product1 = document.createElement("li");
var p1Node = document.createTextNode("Brown chickpeas");
product1.appendChild(p1Node);

var product2 = document.createElement("li");
var p2Node = document.createTextNode("White chickpeas");
product2.appendChild(p2Node);

var product3 = document.createElement("li");
var p3Node = document.createTextNode("Gram Floar");
product3.appendChild(p3Node);

var product4 = document.createElement("li");
var p4Node = document.createTextNode("Roh-e-Afza");
product4.appendChild(p4Node);

var product5 = document.createElement("li");
var p5Node = document.createTextNode("Tang");
product5.appendChild(p5Node);

var mainDiv = document.getElementById("productList")

var l1 = mainDiv.children[0];
mainDiv.insertBefore(product1, l1);
mainDiv.insertBefore(product2, l1);
mainDiv.insertBefore(product3, l1);
mainDiv.insertBefore(product4, l1);
mainDiv.insertBefore(product5, l1);