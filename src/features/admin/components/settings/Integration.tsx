"use client"
import { Input } from '@/components/ui/input';
import { Plug } from 'lucide-react'
import React, { useState } from 'react'

const Integration = () => {
    const [slackHook, setSlackHook] = useState("");
    const [discordHook, setDiscordHook] = useState("");
    return (
        <section className="bg-white p-4 rounded-2xl border">
            <div className="flex justify-between mb-8">
                <div className="bg-red-100 p-3 flex justify-center items-center rounded-lg">
                    <Plug className="w-8" />
                </div>

                <div className="flex flex-col items-center">
                    <h3 className="font-bold mb-2">Integrations</h3>
                    <p>Third-party service connections</p>
                </div>
            </div>
            <div>
                <div>
                    <h3 className='text-center text-sm mb-2'>Slack Webhook URL</h3>
                    <Input
                        type='url'
                        placeholder='https://hooks.slack.com/services/...'
                        value={slackHook}
                        onChange={(e) => setSlackHook(e.target.value)}
                    />
                    <p className="text-sm mt-2">Receive notifications in Slack</p>
                </div>
                <div>
                    <h3 className='text-center text-sm mb-2'>Discord Webhook URL</h3>
                    <Input
                        type='url'
                        placeholder='https://discord.com/api/webhooks/...'
                        value={discordHook}
                        onChange={(e) => setDiscordHook(e.target.value)}
                    />
                    <p className="text-sm mt-2">Receive notifications in Discord</p>
                </div>
            </div>
        </section>
    )
}

export default Integration