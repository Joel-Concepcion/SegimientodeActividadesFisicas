document.getElementById('activityForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var steps = parseInt(document.getElementById('steps').value);
    var distance = parseFloat(document.getElementById('distance').value);
    var time = parseInt(document.getElementById('time').value);

    myChart.data.datasets[0].data = [steps, distance, time];
    myChart.update();

    var activity = "Pasos: " + steps + ", Distancia: " + distance + " km, Tiempo: " + time + " minutos";
    document.getElementById('activityDisplay').innerHTML = activity;
});

async function connectToDevice() {
    try {
        const device = await navigator.bluetooth.requestDevice({
            filters: [{ services: ['heart_rate'] }]
        });
        console.log('Conectado a:', device.name);
    } catch (error) {
        console.error('Error de conexión:', error);
    }
}

/*/ Datos iniciales para el gráfico
var ctx = document.getElementById('activityChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Pasos', 'Distancia', 'Tiempo'],
        datasets: [{
            label: 'Actividad Física',
            data: [0, 0, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// Función para manejar el envío del formulario y mostrar la actividad registrada
document.getElementById('activityForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    // Obtener los valores del formulario
    var steps = parseInt(document.getElementById('steps').value);
    var distance = parseFloat(document.getElementById('distance').value);
    var time = parseInt(document.getElementById('time').value);
    // Actualizar los datos del gráfico
    myChart.data.datasets[0].data = [steps, distance, time];
    myChart.update();
    // Crear un string con la actividad registrada
    var activity = "Pasos: " + steps + ", Distancia: " + distance + " km, Tiempo: " + time + " minutos";
    // Mostrar la actividad en el elemento HTML
    document.getElementById('activityDisplay').innerHTML = activity;
    // Puedes enviar estos datos a un servidor para su almacenamiento y procesamiento adicional si es necesario
});

// Conexión a dispositivo Bluetooth
async function connectToDevice() {
    try {
        const device = await navigator.bluetooth.requestDevice({
            filters: [{ services: ['heart_rate'] }]
        });
        console.log('Conectado a:', device.name);
        // Aquí puedes agregar el código para leer los datos del dispositivo Bluetooth y procesarlos
    } catch (error) {
        console.error('Error de conexión:', error);
    }
}*/