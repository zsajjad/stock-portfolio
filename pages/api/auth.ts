/**
 * NOTE: this file is only needed if you're doing SSR (getServerSideProps)!
 */
import { supabase } from 'services/supabase'

export default function handler(req, res) {
  supabase.auth.api.setAuthCookie(req, res)
}