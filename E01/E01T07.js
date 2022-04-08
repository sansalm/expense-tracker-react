var points = [64, 56, 48, 12, 81, 91, 34, 19, 95, 55];

var enough_points = points.filter(function(point) {
    return point > 40;
});

console.log(enough_points)

function getGrades(grades) {
    return grades.map(function(point) {
        if (point > 85) {
            return 5;
        } else if (point > 70) {
            return 4;
        } else if (point > 60) {
            return 3;
        } else if (point > 50) {
            return 2;
        } else if (point > 40) {
            return 1;
        } else if (point < 40) {
            return 0;
        }
    });
}

var grades = getGrades(points);
console.log(grades)

var average = (grades) => grades.reduce((a, b) => a + b) / grades.length;

console.log(average(grades));
