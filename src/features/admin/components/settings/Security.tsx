"use client"

import { Input } from "@/components/ui/input"
import { InfoIcon, Shield } from "lucide-react"
import { useState } from "react"

const Security = () => {
    const [timeoutMinutes, setTimeoutMinutes] = useState("60")
    return (
        <section className="bg-white p-4 rounded-2xl border">
            <div className="flex justify-between mb-8">
                <div className="bg-red-100 p-3 flex justify-center items-center rounded-lg">
                    <Shield className="w-8" />
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="font-bold mb-2">Security</h3>
                    <p>Authentication and security settings</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 mb-6">
                <h2 className="text-center">Session Timeout (minutes)</h2>
                <Input
                    type="number"
                    placeholder="60"
                    value={timeoutMinutes}
                    onChange={(e) => setTimeoutMinutes(e.target.value)}
                />
                <p className="text-sm">Auto-logout after this many minutes of inactivity</p>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row gap-4 items-center">
                    <input
                        type="checkbox"
                        id="twoFactor"
                        name="Two factor"
                    />
                    <label htmlFor="twoFactor" className="cursor-pointer">Require two-factor authentication</label>
                </div>
                <p className="flex items-center ml-4 text-sm mt-2">
                    <InfoIcon />
                    Coming soon - this feature is not yet implemented
                </p>
            </div>
        </section>
    )
}

export default Security