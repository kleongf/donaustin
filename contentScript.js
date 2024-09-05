const link = "https://private-user-images.githubusercontent.com/113314277/364604624-101255dc-ef30-42c3-9c69-031423998e73.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU1MDQzNzUsIm5iZiI6MTcyNTUwNDA3NSwicGF0aCI6Ii8xMTMzMTQyNzcvMzY0NjA0NjI0LTEwMTI1NWRjLWVmMzAtNDJjMy05YzY5LTAzMTQyMzk5OGU3My5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDkwNSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDA5MDVUMDI0MTE1WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9NTU4OTNjNTc2ZWRkOTZlOTRmYTcwZmRhNjc2NDkzYWVhN2MxZWIzNWM2YmVlZWI4YjMxMWQ5MTI0ZTI5ZjI4NiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.GaSD8QZWdl8rVN5lpySc9clTMU1CqQteLU4rhHdh3Bo";

const getValue = async () => {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(['sliderValue'], (result) => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve(result.sliderValue !== undefined ? result.sliderValue : 0);
            }
        });
    });
};

const replace = (rate) => {
    let images = document.getElementsByTagName('img');  
    for (let i = 0; i < images.length; i++) {
        const r = Math.random() * 100;
        if (r < rate) {
            images[i].src = link; 
        }
    }
};

async function main() {
    try {
        const value = await getValue();
        replace(value);
    } catch (error) {
        console.error('Error retrieving value:', error);
    }
}

main();


