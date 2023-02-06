$("#submit").click(function () {
    // set variable values to input values on html
    var assignment = $("#assignment").val()
    var project = $("#project").val()
    var midterm = $("#midterm").val()
    var quiz = $("#quiz").val()
    var final = $("#final").val()
    var intex = $("#intex").val()

    // calculate the values based on the chart
    var finalGrade = (assignment * 0.5) + (project * 0.1) + (midterm * 0.1) + (quiz * 0.1) + (final * 0.1) + (intex * 0.1);

    // find letter grade from final grade percentage
    if (finalGrade >= 94) {
        var letterGrade = 'A'
    }
    else if (finalGrade >= 90) {
        var letterGrade = 'A-'
    } else if (finalGrade >= 87) {
        letterGrade = 'B+'
    } else if (finalGrade >= 84) {
        letterGrade = 'B'
    } else if (finalGrade >= 80) {
        letterGrade = 'B-'
    } else if (finalGrade >= 77) {
        letterGrade = 'C+'
    } else if (finalGrade >= 74) {
        letterGrade = 'C'
    } else if (finalGrade >= 70) {
        letterGrade = 'C-'
    } else if (finalGrade >= 67) {
        letterGrade = 'D+'
    } else if (finalGrade >= 64) {
        letterGrade = 'D'
    } else if (finalGrade >= 60) {
        letterGrade >= 'D-'
    } else {
        letterGrade = 'E'
    }

    //print final letter grade in html and alert
    $("#finalGrade").html("Final Grade: " + letterGrade)

    alert("Your final grade is: " + letterGrade)
})