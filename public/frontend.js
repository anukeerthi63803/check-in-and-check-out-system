// Assuming you have an input field with id "rfidInput" for the RFID card ID
const rfidInput = document.getElementById("rfidInput");

// Event listener for the RFID card reader input
rfidInput.addEventListener("change", async () => {
    const rfidValue = rfidInput.value;

    // Send the RFID data to the backend for processing
    const response = await fetch(`/api/students/id=${rfidValue}`);
    const data = await response.json();

    if (data.error) {
        alert(data.error);
    } else {
        // Display student details in the UI
        const studentDetails = document.getElementById("studentDetails");
        studentDetails.innerHTML = `
            <p>Name: ${data.name}</p>
            <p>Reg No: ${data.reg_no}</p>
            <p>Place: ${data.place}</p>
            <p>Phone No: ${data.phone_no}</p>
            <p>Reason: ${data.reason}</p>
            <p>Date of Leaving: ${data.date_of_leaving}</p>
            <p>Scheduled Date of Return: ${data.scheduled_date_of_return}</p>
            <p>Actual Date of Return: ${data.actual_date_of_return}</p>
            <p>Time of Leaving: ${data.time_of_leaving}</p>
            <p>Time of Return: ${data.time_of_return}</p>
            <p>Room Number: ${data.room_number}</p>
            <p>Block: ${data.block}</p>
            <p>Credit: ${data.credit}</p>
        `;
    }
});

// If your RFID card reader doesn't trigger a change event,
// you might need to use a different event like "input" or "keydown".
// Make sure the event is triggered when the RFID card is read.
