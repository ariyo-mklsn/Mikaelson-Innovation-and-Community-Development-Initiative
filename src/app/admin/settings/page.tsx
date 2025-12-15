import Hero from "@/features/admin/components/settings/Hero"
import Header from "@/features/admin/components/settings/Header"
import Analytics from "@/features/admin/components/settings/Analytics"
import SiteConfiguration from "@/features/admin/components/settings/SiteConfiguration"
import ENotifications from "@/features/admin/components/settings/ENotifications"
import Security from "@/features/admin/components/settings/Security"
import DataManagement from "@/features/admin/components/settings/DataManagement"
import Integration from "@/features/admin/components/settings/Integration"

const page = () => {
    return (
        <div>
            <Header />
            <main className="py-12 px-8 bg-brand-bg-gray dark:bg-black/20 dark:text-white flex flex-col gap-4">
                <Hero />
                <Analytics />
                <SiteConfiguration />
                <ENotifications />
                <Security />
                <DataManagement />
                <Integration />
            </main>
        </div>
    )
}

export default page