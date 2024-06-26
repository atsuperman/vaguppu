document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll(".value-input");
    const totalOutput = document.getElementById("total");
    const weightCategory = document.getElementById("weight-category");
    const weightInput = document.getElementById("f");

    function calculateTotal() {
        const a = parseFloat(document.getElementById("a").value) || 0;
        const b = parseFloat(document.getElementById("b").value) || 0;
        const c = parseFloat(document.getElementById("c").value) || 0;
        const d = parseFloat(document.getElementById("d").value) || 0;
        const e = parseFloat(document.getElementById("e").value) || 0;
        const f = parseFloat(weightInput.value) || 0;

        // Example formula: total = a + b + c + d + e + f
        // Adjust the formula as needed
        const total = a + b + c + d + e + f;

        totalOutput.value = total.toFixed(2);
    }

    weightCategory.addEventListener("change", function() {
        weightInput.value = weightCategory.value;
        calculateTotal();
    });

    inputs.forEach(input => {
        input.addEventListener("input", calculateTotal);
    });
});
