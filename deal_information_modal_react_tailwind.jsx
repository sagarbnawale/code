import { useState } from "react";

export default function DealInformationModal() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-5xl rounded-xl bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <span className="material-icons text-gray-600">description</span>
            Deal Information
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="max-h-[70vh] overflow-y-auto px-6 py-5 space-y-8">
          {/* DEAL DETAILS */}
          <section>
            <h3 className="mb-4 text-sm font-semibold text-gray-500">DEAL DETAILS</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input label="Deal ID" value="12312332" disabled />
              <DateInput label="Earliest Final Lease Expiration" />
              <DateInput label="Land Final Lease Expiration" />
              <Select label="Deal Type" options={["Priority", "Normal"]} />
            </div>
          </section>

          {/* LANDLORD DETAILS */}
          <section className="border-t pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-500">LANDLORD DETAILS</h3>
              <MuteButton />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input label="Landlord" value="David Geborek" />
              <Input label="Landlord Contact Name" value="David Geborek" />
              <Input label="Primary Phone Number" value="(555) 555-5555" />
              <TagInput label="Primary Email" />
              <Input label="Comment" placeholder="Comments will go here." />
            </div>
          </section>

          {/* ADDITIONAL DETAILS */}
          <section className="border-t pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-500">ADDITIONAL DETAILS</h3>
              <MuteButton />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input label="Landlord" value="David Geborek" />
              <Input label="Landlord Contact Name" value="David Geborek" />
              <Input label="Alt 1 Phone Number" value="(555) 555-5555" />
              <TagInput label="Alt 1 Email" defaultTags={["superlongemailname@email.com"]} />
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t px-6 py-4">
          <button
            onClick={() => setOpen(false)}
            className="rounded-lg border px-4 py-2 text-gray-600 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button className="rounded-lg bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

/* Reusable components */
function Input({ label, value, placeholder, disabled }) {
  return (
    <div>
      <label className="mb-1 block text-sm text-gray-600">{label}</label>
      <input
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full rounded-lg border px-3 py-2 text-sm disabled:bg-gray-100"
      />
    </div>
  );
}

function DateInput({ label }) {
  return (
    <div>
      <label className="mb-1 block text-sm text-gray-600">{label}</label>
      <div className="relative">
        <input
          type="date"
          className="w-full rounded-lg border px-3 py-2 text-sm"
        />
      </div>
    </div>
  );
}

function Select({ label, options }) {
  return (
    <div>
      <label className="mb-1 block text-sm text-gray-600">{label}</label>
      <select className="w-full rounded-lg border px-3 py-2 text-sm">
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function TagInput({ label, defaultTags = [] }) {
  return (
    <div>
      <label className="mb-1 block text-sm text-gray-600">{label}</label>
      <div className="flex flex-wrap gap-2 rounded-lg border px-2 py-2">
        {defaultTags.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs"
          >
            {tag}
            <span className="cursor-pointer">✕</span>
          </span>
        ))}
        <input className="flex-1 text-sm outline-none" placeholder="Add email" />
      </div>
    </div>
  );
}

function MuteButton() {
  return (
    <button className="flex items-center gap-1 rounded-full border px-3 py-1 text-sm text-gray-600 hover:bg-gray-50">
      🔇 Mute
    </button>
  );
}
