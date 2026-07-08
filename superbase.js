// Initialize Supabase Client globally using the browser window object
const supabaseUrl = 'https://hcciptlwlllbaicwcwua.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjY2lwdGx3bGxsYmFpY3djd3VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM0NzQzMDcsImV4cCI6MjA5OTA1MDMwN30.K6OP6UuRFW2rv2cUDvT0NWVq-FKxAcTJXI14PuFmf34'

const supabase = window.supabase.createClient(supabaseUrl, supabaseAnonKey)

/**
 * Handles User Registration (Sign Up) with Full Name and Role
 */
async function signUp() {
  const fullName = document.getElementById("full-name-input")?.value || "";
  const email = document.getElementById("email-input")?.value || "";
  const userRole = document.getElementById("user-role-select")?.value || "Student";
  const password = document.getElementById("password-input")?.value || "";

  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: fullName,
          user_role: userRole,
        }
      }
    });

    if (error) throw error;

    alert("Sign up successful! Please check your email for a verification link.");
  } catch (error) {
    alert(error.message);
    console.error("Sign up error:", error.message);
  }
}

/**
 * Handles User Authentication (Login)
 */
async function login() {
  const email = document.getElementById("email-input")?.value || "";
  const password = document.getElementById("password-input")?.value || "";

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });

    if (error) throw error;

    alert("Logged in successfully!");
    window.location.href = "dashboard.html"; // Redirects upon success
  } catch (error) {
    alert(error.message);
    console.error("Login error:", error.message);
  }
}
