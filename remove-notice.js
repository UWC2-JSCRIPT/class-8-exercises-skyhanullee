setTimeout( () => {
    const maintenanceNotice = document.getElementById("maintenance-notice");
    maintenanceNotice.style.display = "none";
    console.log(`Maintenance notice is now hidden.`);
    },
    5000
);