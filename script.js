document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll(".value-input");
    const totalOutput = document.getElementById("total");

    function calculateTotal() {
        let total = 0;
        inputs.forEach(input => {
            const value = parseFloat(input.value) || 0;
            total += value;
        });
        totalOutput.value = total.toFixed(2);
    }

    inputs.forEach(input => {
        input.addEventListener("input", calculateTotal);
    });
});
