// เพิ่มข้อมูลการแข่งขันโดยใช้ข้อมูลจากฟอร์ม
document.getElementById("match-form").addEventListener("submit", function(event) {
    event.preventDefault(); // ไม่ให้ฟอร์มส่งข้อมูล

    var team = document.getElementById("team").value;
    var venue = document.getElementById("venue").value;
    var score = document.getElementById("score").value;

    addMatch(team, venue, score); // เพิ่มข้อมูลลงในตาราง
    document.getElementById("match-form").reset(); // เคลียร์ค่าฟอร์ม
});

// เพิ่มข้อมูลการแข่งขันลงในตาราง
function addMatch(team, venue, score) {
    var table = document.getElementById("match-table");
    var row = table.insertRow(-1);
    var teamCell = row.insertCell(0);
    var venueCell = row.insertCell(1);
    var scoreCell = row.insertCell(2);
    teamCell.innerHTML = team;
    venueCell.innerHTML = venue;
    scoreCell.innerHTML = score;
}
