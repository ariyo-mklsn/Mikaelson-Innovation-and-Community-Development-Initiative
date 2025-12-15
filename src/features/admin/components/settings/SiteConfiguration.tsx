"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Settings } from "lucide-react";
import { useState } from "react";

const SiteConfiguration = () => {
  const [siteName, setSiteName] = useState("Mikaelson Initiative");
  const [siteDescription, setSiteDescription] = useState("");
  const [supportEmail, setSupportEmail] = useState("");

  return (
    <div className="bg-white p-4 rounded-2xl border">
      <div className="flex justify-between mb-8">
        <div className="bg-red-100 p-3 flex justify-center items-center rounded-lg">
          <Settings className="w-8" />
        </div>

        <div className="flex flex-col items-center">
          <h3 className="font-bold mb-2">Site Configuration</h3>
          <p>Basic site settings</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-6">
        <h2 className="text-center">Site Name</h2>
        <Input
          type="text"
          placeholder="Mikaelson Initiative"
          value={siteName}
          onChange={(e) => setSiteName(e.target.value)}
        />

        <h2 className="text-center">Site Description</h2>
        <Textarea
          placeholder="A brief description of your platform"
          value={siteDescription}
          onChange={(e) => setSiteDescription(e.target.value)}
        />

        <h2 className="text-center">Support Email</h2>
        <Input
          type="email"
          placeholder="support@example.com"
          value={supportEmail}
          onChange={(e) => setSupportEmail(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SiteConfiguration;