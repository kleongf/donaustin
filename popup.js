document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    const sliderValue = document.getElementById('sliderValue');
    const saveButton = document.getElementById('saveButton');

    // Retrieve the stored value from chrome.storage.local
    chrome.storage.local.get(['sliderValue'], (result) => {
        if (result.sliderValue !== undefined) {
            slider.value = result.sliderValue;
            sliderValue.textContent = result.sliderValue;
        }
    });

    // Update the displayed value when the slider changes
    slider.addEventListener('input', () => {
        sliderValue.textContent = slider.value;
    });

    // Save the value to chrome.storage.local when the button is clicked
    saveButton.addEventListener('click', () => {
        const valueToSave = slider.value;
        chrome.storage.local.set({ sliderValue: valueToSave }, () => {
            console.log(`Value saved: ${valueToSave}`);
        });
    });
});
