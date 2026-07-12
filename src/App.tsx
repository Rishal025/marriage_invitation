import { Suspense } from 'react'
import InvitationPage from './pages/InvitationPage'

function App() {
  return (
    <Suspense fallback={null}>
      <InvitationPage />
    </Suspense>
  )
}

export default App
