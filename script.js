document.addEventListener("DOMContentLoaded", function() {
    const weightCategory = document.getElementById("weight-category");
    const weightInput = document.getElementById("f");
    const fContainer = document.getElementById("f-container");
    const resultOutput = document.getElementById("result");
    const coolieOutput = document.getElementById("coolie");

    const radioButtons = document.querySelectorAll('input[name="b"]');
    const bValue = document.getElementById("b-value");

    function calculateResult() {
        const b = parseFloat(bValue.value) || 0;
        const f = parseFloat(weightInput.value) || 0;

        // Calculate the result based on the formula b * f
        const result = b * f;

        resultOutput.value = `Rs ${result.toFixed(2)}`;
        coolieOutput.value = `Rs ${result.toFixed(2)}`;
    }

    weightCategory.addEventListener("change", function() {
        weightInput.value = weightCategory.value;
        calculateResult();
    });

    radioButtons.forEach(radio => {
        radio.addEventListener("change", function() {
            bValue.disabled = false;

            // Show the f-container only if b1 is selected
            if (document.getElementById("b1").checked) {
                fContainer.className = "f-visible";
            } else {
                fContainer.className = "f-hidden";
            }

            calculateResult();
        });
    });

    bValue.addEventListener("input", calculateResult);
    weightInput.addEventListener("input", calculateResult);
});
