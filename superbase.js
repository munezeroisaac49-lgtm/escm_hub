const supabase = window.supabase.createClient(
  "YOUR_SUPABASE_URL",
  "YOUR_ANON_KEY"
);

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  });

  if (error) {
    alert(error.message);
    return;
  }

  window.location.href = "dashboard.html";
}
