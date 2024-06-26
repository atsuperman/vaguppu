document.addEventListener("DOMContentLoaded", function() {
    const weightCategory = document.getElementById("weight-category");
    const weightInput = document.getElementById("f");
    const bInput = document.getElementById("b");
    const resultOutput = document.getElementById("result");

    function calculateResult() {
        const b = parseFloat(bInput.value) || 0;
        const f = parseFloat(weightInput.value) || 0;

        // Calculate the result based on the formula b * f
        const result = b * f;

        resultOutput.value = `Rs ${result.toFixed(2)}`;
    }

    weightCategory.addEventListener("change", function() {
        weightInput.value = weightCategory.value;
        calculateResult();
    });

    bInput.addEventListener("input", calculateResult);
    weightInput.addEventListener("input", calculateResult);
});
