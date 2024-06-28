document.addEventListener("DOMContentLoaded", function() {
    const weightCategory = document.getElementById("weight-category");
    const weightInput = document.getElementById("f");
    const fContainer = document.getElementById("f-container");
    const resultOutput = document.getElementById("result");
    const coolieOutput = document.getElementById("coolie");

    const radioButtons = document.querySelectorAll('input[name="b"]');
    const b1Value = document.getElementById("b1-value");
    const b2Value = document.getElementById("b2-value");
    const b3Value = document.getElementById("b3-value");

    function calculateResult() {
        const b = parseFloat(b1Value.value) || parseFloat(b2Value.value) || parseFloat(b3Value.value) || 0;
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
            b1Value.disabled = !document.getElementById("b1").checked;
            b2Value.disabled = !document.getElementById("b2").checked;
            b3Value.disabled = !document.getElementById("b3").checked;

            fContainer.className = "f-hidden";
            if (document.getElementById("b1").checked || document.getElementById("b2").checked || document.getElementById("b3").checked) {
                fContainer.className = "f-visible";
            }

            calculateResult();
        });
    });

    b1Value.addEventListener("input", calculateResult);
    b2Value.addEventListener("input", calculateResult);
    b3Value.addEventListener("input", calculateResult);
    weightInput.addEventListener("input", calculateResult);
});
