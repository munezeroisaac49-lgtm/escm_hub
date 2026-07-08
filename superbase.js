import { createClient } from '@supabase/supabase-js'

// 1. Initialize Supabase Client
// Replace placeholders with your project API credentials
const supabaseUrl = 'https://hcciptlwlllbaicwcwua.supabase.co'
const supabaseAnonKey = 'sb_publishable_PbQ71yJ8meJvLacuRq-zQg_Ds81dGdL'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

/**
 * Handles Sign Up with custom metadata
 * @param {string} email
 * @param {string} password
 * @param {string} fullName
 * @param {string} userRole
 */
export async function signUpUser(email, password, fullName, userRole) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        // Saves Full Name and Role into Supabase user metadata
        data: {
          full_name: fullName,
          user_role: userRole,
        },
      },
    })

    if (error) throw error

    alert('Sign up successful! Please check your email for a verification link.')
    return data
  } catch (error) {
    alert(error.message)
    console.error('Sign up error:', error.message)
    return null
  }
}

/**
 * Handles Login
 * @param {string} email
 * @param {string} password
 */
export async function logInUser(email, password) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) throw error

    alert('Logged in successfully!')
    return data
  } catch (error) {
    alert(error.message)
    console.error('Login error:', error.message)
    return null
  }
}
