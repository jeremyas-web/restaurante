const SUPABASE_URL = "https://zfvucvlshuvtpcjbmznp.supabase.co";

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmdnVjdmxzaHV2dHBjamJtem5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2Mzg3ODcsImV4cCI6MjA5NzIxNDc4N30.w1cf4UG3RTHT5BLloLnIg1pWw-zz0mFa9kSfOdL5NS4";

const clienteSupabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const plato = document.getElementById("plato").value;

    const { error } = await clienteSupabase
        .from("clientes")
        .insert([
            {
                nombre,
                telefono,
                email,
                plato
            }
        ]);

    if (error) {
        console.error(error);
        alert(error.message);
        return;
    }

    alert("Datos guardados correctamente");
    formulario.reset();
});