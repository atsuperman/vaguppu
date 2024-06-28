document.addEventListener("DOMContentLoaded", function() {
    const weightCategory = document.getElementById("weight-category");
    const weightInput = document.getElementById("f");
    const resultOutput = document.getElementById("result");
    const coolieOutput = document.getElementById("coolie");

    const radioButtons = document.querySelectorAll('input[name="b"]');
    const moottaiValue = document.getElementById("moottai-value");
    const bundleValue = document.getElementById("bundle-value");
    const tonValue = document.getElementById("ton-value");

    function calculateResult() {
        const b = parseFloat(moottaiValue.value) || parseFloat(bundleValue.value) || parseFloat(tonValue.value) || 0;
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
            moottaiValue.disabled = !document.getElementById("moottai").checked;
            bundleValue.disabled = !document.getElementById("bundle").checked;
            tonValue.disabled = !document.getElementById("ton").checked;
            calculateResult();
        });
    });

    moottaiValue.addEventListener("input", calculateResult);
    bundleValue.addEventListener("input", calculateResult);
    tonValue.addEventListener("input", calculateResult);
    weightInput.addEventListener("input", calculateResult);
});
