document.getElementById("readButton").addEventListener("click", async () => {
    const rfidInput = document.getElementById("rfidInput").value;

    // Send the RFID data to the backend for processing
    const response = await fetch(`/api/students/:id${rfidInput}`);
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

