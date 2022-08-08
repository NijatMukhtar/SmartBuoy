const select = document.getElementById("city")

function Submitbtn() {
    const value1 = document.getElementById("city");
    var queryString = "?para1=" + value1.value;
    window.location.href = "map.html" + queryString;
}