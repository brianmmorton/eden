import { Routes, Route } from 'react-router-dom'
import { useAuth } from '@/providers/auth-provider'
import { HomePage } from '@/pages/HomePage'
import { LoginPage } from '@/pages/LoginPage'
import Layout from '@/components/Layout'

function App() {
  const { loading, user } = useAuth()

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* {user && <Route path="/dashboard" element={<DashboardPage />} />} */}
      </Route>
    </Routes>
  )
}

export default App 