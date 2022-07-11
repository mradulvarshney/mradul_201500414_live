const name = document.getElementById("student-name");
const rollNo = document.getElementById("univesity-rollno");
const address = document.getElementById("address");
const date = document.getElementById("date");

window.onload = () => {
    name.innerHTML = "Mradul Varshney";
    rollNo.innerHTML = "201500414";
    address.innerHTML = "GLA University, Mathura";
    date.innerHTML = new Date().toDateString();
}