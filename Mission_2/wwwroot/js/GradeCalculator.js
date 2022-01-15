// Runs when the calculate button is pressed
$("#calculate").click(function () {
    var finalGrade = 0;

    // Calculates the final grade by adding up each entry from the form and multiplying them by their respective weights. 
    finalGrade =

        (parseInt($("#assignments").val()) * .55 +
            parseInt($("#groupProjects").val()) * .05 +
            parseInt($("#quizzes").val()) * .10 +
            parseInt($("#exams").val()) * .20 +
            parseInt($("#intex").val()) * .10);

    // Assigns the grade to a letter
    sLetterGrade = "";
    if (finalGrade >= 94) {
        sLetterGrade = "A"
    } else if (finalGrade >= 90) {
        sLetterGrade = "A-"
    } else if (finalGrade >= 87) {
        sLetterGrade = "B+"
    } else if (finalGrade >= 84) {
        sLetterGrade = "B"
    } else if (finalGrade >= 80) {
        sLetterGrade = "B-"
    } else if (finalGrade >= 77) {
        sLetterGrade = "C+"
    } else if (finalGrade >= 74) {
        sLetterGrade = "C"
    } else if (finalGrade >= 70) {
        sLetterGrade = "C-"
    } else if (finalGrade >= 67) {
        sLetterGrade = "D+"
    } else if (finalGrade >= 64) {
        sLetterGrade = "D"
    } else if (finalGrade >= 60) {
        sLetterGrade = "D-"
    } else {
        sLetterGrade = "E"
    }

    // Displays grade to the user after calculation is finished 
    alert("Final Grade Percentage = " + String(finalGrade.toFixed(2)) + "% | Final Letter Grade = " + sLetterGrade);
})