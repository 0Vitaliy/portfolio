'use client';
import { useState } from 'react';

export default function Page() {
  const [forms, setForms] = useState([]);

  const fetchForms = async () => {
    const res = await fetch('/api/parse-forms?url=https://om-test.mysites.io/');
    const data = await res.json();
    setForms(data.forms || []);
  };

  return (
    <div className="p-4">
      <button onClick={fetchForms} className="bg-blue-500 text-white p-2 rounded">
        Сканувати форми
      </button>

      {forms?.map((form: any, idx) => (
        <div key={idx} className="mt-4 border p-2">
          <h3 className="font-semibold">Action: {form.action}</h3>
          <ul className="list-disc pl-6">
            {form?.fields?.map((field: any, i: any ) => (
              <li key={i}>{field.name} ({field.type})</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
