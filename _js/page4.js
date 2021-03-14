$("#summaryButt").click(() => {
    $("#summaryButt").css("box-shadow", "0 0 10px black");
    $("#rightsButt").css("box-shadow", "");
    $("#summaryText").css("display","");
    $("#rightsText").css("display","none");
});

$("#rightsButt").click(() => {
    $("#rightsButt").css("box-shadow", "0 0 10px black");
    $("#summaryButt").css("box-shadow", "");
    $("#rightsText").css("display","");
    $("#summaryText").css("display","none");
});