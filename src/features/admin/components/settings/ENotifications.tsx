"use client"
import { Google } from "@/components/icons/google"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"
import { useState } from "react"

const ENotifications = () => {
    const [trakingID, setTrackingID] = useState("")
    return (
        <div className="bg-white p-4 rounded-2xl border">
            <div className="flex justify-between mb-8">
                <div className="bg-red-100 p-3 flex justify-center items-center rounded-lg">
                    <Mail className="w-8" />
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="font-bold mb-2">Email Notifications</h3>
                    <p>Manage email alerts and notifications</p>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex gap-4">
                    <input type="checkbox" name="Enable Tracking" id="enableTracking" />
                    <label htmlFor="enableTracking">Enable Google Analytics tracking</label>
                </div>
                <div className="flex gap-4">
                    <input type="checkbox" name="Anonymize IP" id="anonymizeIP" />
                    <label htmlFor="anonymizeIP">Anonymize IP addresses (GDPR compliance)</label>
                </div>
            </div>
            <div className="flex flex-col gap-4 mb-6">
                <h2 className="text-center">Notification Email</h2>
                <Input
                    type="email"
                    placeholder="admin@example.com"
                    value={trakingID}
                    onChange={(e) => setTrackingID(e.target.value)}
                />
                <p className="text-sm">Where to send notifications and reports</p>
            </div>
            
        </div>
    )
}

export default ENotifications