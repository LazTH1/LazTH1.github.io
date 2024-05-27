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

// เพิ่มข้อมูลการแข่งขันลงในตาราง (ตัวอย่าง)
addMatch("เวลส", "สนามกีฬา", "0-0");
addMatch("สถานที่", "สนามกีฬา", "0-0");
