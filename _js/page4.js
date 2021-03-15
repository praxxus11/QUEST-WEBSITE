const threeLocs = {
    "ca": document.getElementById("ccpa-info"),
    "eu": document.getElementById("gdpr-info"),
    "us": document.getElementById("aaa-info")};
    
window.onload = () => {
    threeLocs['eu'].remove();
    threeLocs['us'].remove();
};

$("#caButt").click(() => {
    document.getElementById("page4").appendChild(threeLocs['ca']);
    threeLocs['eu'].remove();
    threeLocs['us'].remove();
});
$("#euButt").click(() => {
    document.getElementById("page4").appendChild(threeLocs['eu']);
    threeLocs['ca'].remove();
    threeLocs['us'].remove();
});
$("#usButt").click(() => {
    document.getElementById("page4").appendChild(threeLocs['us']);
    threeLocs['eu'].remove();
    threeLocs['ca'].remove();
});




$("#page4").on("click", "#summaryButt", () => {
    $("#summaryButt").css("box-shadow", "0 0 10px black");
    $("#rightsButt").css("box-shadow", "");
    $("#summaryText").css("display","");
    $("#rightsText").css("display","none");
});

$("#page4").on("click", "#rightsButt", () => {
    $("#rightsButt").css("box-shadow", "0 0 10px black");
    $("#summaryButt").css("box-shadow", "");
    $("#rightsText").css("display","");
    $("#summaryText").css("display","none");
});