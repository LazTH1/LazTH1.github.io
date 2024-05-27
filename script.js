// เมื่อฟอร์มถูกส่ง
document.getElementById("match-form").addEventListener("submit", function(event) {
    event.preventDefault(); // ยกเลิกการส่งฟอร์ม

    // ดึงข้อมูลจากฟอร์ม
    var team = document.getElementById("team").value;
    var venue = document.getElementById("venue").value;
    var score = document.getElementById("score").value;

    // เพิ่มข้อมูลในตาราง
    addMatch(team, venue, score);

    // เคลียร์ฟอร์ม
    document.getElementById("match-form").reset();
});

// เพิ่มข้อมูลในตาราง
function addMatch(team, venue, score) {
    var table = document.getElementById("match-table");
    var row = table.insertRow(-1); // เพิ่มแถวใหม่ที่สุด
    var teamCell = row.insertCell(0);
    var venueCell = row.insertCell(1);
    var scoreCell = row.insertCell(2);
    teamCell.textContent = team;
    venueCell.textContent = venue;
    scoreCell.textContent = score;
}
