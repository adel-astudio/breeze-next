import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/hooks/auth'
import { viewContext } from '@/pages/dashboard'
import { useContext } from 'react'
import Footer from '../Footer'
import ToolBar from '../ToolBar'

const AppLayout = ({ header, children }) => {
    const { user } = useAuth({ middleware: 'auth' })
    const { view } = useContext(viewContext);
    return (
        <div className="min-h-screen">
            <Navigation user={user} />

            {/* Page Content */}
            <main>{children}</main>

            <Footer />
        </div>
    )
}

export default AppLayout
