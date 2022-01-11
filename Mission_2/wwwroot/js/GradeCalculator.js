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

    // Displays grade to the user after calculation is finished 
    alert("Final Grade = " + String(finalGrade) + "%");
})