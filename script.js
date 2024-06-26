document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll(".value-input");
    const resultOutput = document.getElementById("result");
    const weightCategory = document.getElementById("weight-category");
    const weightInput = document.getElementById("f");

    function calculateResult() {
        const b = parseFloat(document.getElementById("b").value) || 0;
        const f = parseFloat(weightInput.value) || 0;

        // Calculate the result based on the formula b × f
        const result = b * f;

        resultOutput.value = `Rs ${result.toFixed(2)}`;
    }

    weightCategory.addEventListener("change", function() {
        weightInput.value = weightCategory.value;
        calculateResult();
    });

    inputs.forEach(input => {
        input.addEventListener("input", calculateResult);
    });
});
