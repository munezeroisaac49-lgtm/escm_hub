const supabase = window.supabase.createClient(
  "https://hcciptlwlllbaicwcwua.supabase.co",
  "sb_publishable_PbQ71yJ8meJvLacuRq-zQg_Ds81dGdL"
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
