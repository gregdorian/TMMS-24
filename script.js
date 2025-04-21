// Configuración de Supabase
const supabaseUrl = 'https://eijeaimjxaywhohceqfc.supabase.co'; // Reemplaza con tu URL de Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpamVhaW1qeGF5d2hvaGNlcWZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxODg5NzEsImV4cCI6MjA2MDc2NDk3MX0.zyknNW6-uI0UtKhWIMVR-7K1EU5u_EYtpfsr8wgx7Mk'; // Reemplaza con tu clave de Supabase
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Manejo del formulario
document.getElementById('discForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  // Obtener valores del formulario
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;

  const respuestas = {};
  document.querySelectorAll('input[type="radio"]:checked').forEach((radio) => {
    respuestas[radio.name] = radio.value;
  });

  // Validar que todas las preguntas estén respondidas
  if (Object.keys(respuestas).length !== 28 * 2) { // 28 preguntas, 2 opciones cada una
    alert('Por favor, responde todas las preguntas.');
    return;
  }

  // Guardar en Supabase
  const { data, error } = await supabase
    .from('resultados_disc')
    .insert([{ nombre, apellido, respuestas }]);

  if (error) {
    console.error('Error al guardar en Supabase:', error);
    alert('Hubo un error al guardar tus respuestas. Por favor, intenta nuevamente.');
  } else {
    alert('¡Respuestas guardadas exitosamente!');
    console.log('Datos guardados:', data);
  }
});