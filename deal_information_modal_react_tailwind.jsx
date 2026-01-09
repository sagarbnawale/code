'use client'

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface DealInformationProps {
  open: boolean
  onClose: () => void
}

export default function DealInformation({
  open,
  onClose,
}: DealInformationProps) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      {/* Backdrop */}
      <DialogBackdrop className="fixed inset-0 bg-black/40 transition-opacity data-[closed]:opacity-0" />

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          {/* Panel */}
          <DialogPanel className="w-full max-w-5xl transform overflow-hidden rounded-xl bg-white shadow-xl transition-all data-[closed]:scale-95 data-[closed]:opacity-0">
            {/* Header */}
            <div className="flex items-center justify-between border-b px-6 py-4">
              <DialogTitle className="text-lg font-semibold text-gray-900">
                Deal Information
              </DialogTitle>
              <button
                onClick={onClose}
                className="rounded-md p-1 text-gray-400 hover:text-gray-600"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="max-h-[70vh] overflow-y-auto px-6 py-6 space-y-8">
              {/* DEAL DETAILS */}
              <section>
                <h3 className="mb-4 text-sm font-semibold text-gray-500">
                  DEAL DETAILS
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input label="Deal ID" value="12312332" disabled />
                  <DateInput label="Earliest Final Lease Expiration" />
                  <DateInput label="Land Final Lease Expiration" />
                  <Select
                    label="Deal Type"
                    options={['Priority', 'Normal']}
                  />
                </div>
              </section>

              {/* LANDLORD DETAILS */}
              <section className="border-t pt-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-500">
                    LANDLORD DETAILS
                  </h3>
                  <MuteButton />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input label="Landlord" value="David Geborek" />
                  <Input
                    label="Landlord Contact Name"
                    value="David Geborek"
                  />
                  <Input
                    label="Primary Phone Number"
                    value="(555) 555-5555"
                  />
                  <TagInput
                    label="Primary Email"
                    tags={['email@email.com', 'email@email.com']}
                  />
                  <Input
                    label="Comment"
                    placeholder="Comments will go here."
                  />
                </div>
              </section>

              {/* ADDITIONAL DETAILS */}
              <section className="border-t pt-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-500">
                    ADDITIONAL DETAILS
                  </h3>
                  <MuteButton />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input label="Landlord" value="David Geborek" />
                  <Input
                    label="Landlord Contact Name"
                    value="David Geborek"
                  />
                  <Input
                    label="Alt 1 Phone Number"
                    value="(555) 555-5555"
                  />
                  <TagInput
                    label="Alt 1 Email"
                    tags={['superlongemailname@email.com']}
                  />
                </div>
              </section>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 border-t px-6 py-4">
              <button
                onClick={onClose}
                className="rounded-lg border px-4 py-2 text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="rounded-lg bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700">
                Save
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

/* ---------- Reusable Inputs ---------- */

function Input({
  label,
  value,
  placeholder,
  disabled,
}: any) {
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
  )
}

function DateInput({ label }: any) {
  return (
    <div>
      <label className="mb-1 block text-sm text-gray-600">{label}</label>
      <input
        type="date"
        className="w-full rounded-lg border px-3 py-2 text-sm"
      />
    </div>
  )
}

function Select({ label, options }: any) {
  return (
    <div>
      <label className="mb-1 block text-sm text-gray-600">{label}</label>
      <select className="w-full rounded-lg border px-3 py-2 text-sm">
        {options.map((opt: string) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  )
}

function TagInput({ label, tags = [] }: any) {
  return (
    <div>
      <label className="mb-1 block text-sm text-gray-600">{label}</label>
      <div className="flex flex-wrap gap-2 rounded-lg border px-2 py-2">
        {tags.map((tag: string) => (
          <span
            key={tag}
            className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs"
          >
            {tag}
            <span className="cursor-pointer text-gray-400">✕</span>
          </span>
        ))}
        <input
          className="flex-1 text-sm outline-none"
          placeholder="Add email"
        />
      </div>
    </div>
  )
}

function MuteButton() {
  return (
    <button className="rounded-full border px-3 py-1 text-sm text-gray-600 hover:bg-gray-50">
      🔇 Mute
    </button>
  )
}
