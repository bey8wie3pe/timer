$("#progress").hide();
$("#hide").hide();
$("#button").click(function(){
    let hours = $("#hours").val();
    let minutes = $("#minutes").val();
    let seconds = $("#seconds").val();
    hours = Number(hours);
    minutes = Number(minutes);
    seconds = Number(seconds);
    let total = hours*60*60+minutes*60+seconds;
    $("#total").html(total);
    const timer = setInterval(() => {$("#progress").show();
    $("#hide").show();
    $("#hour").text(`残り ${Math.floor(total / 3600)}時間`);
    $("#min").text(`${Math.floor((total % 3600) / 60)}分`);
    $("#sec").text(`${Math.floor(total % 60)}秒`);
    total--;
    if(total === 0){
        alert("時間です");
        clearInterval(timer)}}, 1000)
    ;})
