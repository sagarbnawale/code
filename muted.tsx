import { EyeIcon } from '@heroicons/react/24/outline'

interface MutedSectionProps {
  title: string
  onUnmute: () => void
  children: React.ReactNode
}

export function MutedSection({
  title,
  onUnmute,
  children,
}: MutedSectionProps) {
  return (
    <section className="rounded-lg border bg-gray-50">
      {/* Muted Header */}
      <div className="flex items-center justify-between border-b px-6 py-4">
        <div className="flex items-center gap-2 text-gray-600">
          <EyeIcon className="h-5 w-5" />
          <h3 className="text-sm font-semibold">Muted Information</h3>
        </div>

        <button
          onClick={onUnmute}
          className="flex items-center gap-1 rounded-full border bg-white px-3 py-1 text-sm text-blue-600 hover:bg-blue-50"
        >
          <EyeIcon className="h-4 w-4" />
          Unmute
        </button>
      </div>

      {/* Muted Content */}
      <div className="px-6 py-6 opacity-50 pointer-events-none">
        <h4 className="mb-4 text-sm font-semibold text-gray-500">
          {title}
        </h4>

        {children}
      </div>
    </section>
  )
}
