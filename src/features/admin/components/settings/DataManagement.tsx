"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { Database } from 'lucide-react';
import { useState } from 'react';

const DataManagement = () => {
    const [siteName, setSiteName] = useState("365");
  return (
    <div className="bg-white p-4 rounded-2xl border">
      <div className="flex justify-between mb-8">
        <div className="bg-red-100 p-3 flex justify-center items-center rounded-lg">
          <Database className="w-8" />
        </div>

        <div className="flex flex-col items-center">
          <h3 className="font-bold mb-2">Data Management</h3>
          <p>Backup and data retention settings</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-6">
        <h2 className="text-center">Data Retention (days)</h2>
        <Input
          type="number"
          placeholder="365"
          value={siteName}
          onChange={(e) => setSiteName(e.target.value)}
        />

        <h2 className="text-center">Default Export Format</h2>
        <select className='p-2 border rounded-lg'>
            <option value="csv">CSV</option>
            <option value="json">JSON</option>
            <option value="excel">Excel</option>
            <option value="PDF">PDF</option>
        </select>
      </div>
      <hr />
      <div>
        <h4 className="text-red-600">Danger Zone</h4>
        <p className="text-sm text-center">Irreversible and destructive actions</p>
        <Button variant="destructive" className='bg-transparent border border-red-600 text-red-600 hover:bg-red-600 hover:text-white'>Clear Cache</Button>
      </div>
    </div>
  )
}

export default DataManagement