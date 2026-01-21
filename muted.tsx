type CheckboxProps = {
  label?: string;
  checked: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
};

export default function Checkbox({
  label,
  checked,
  onChange,
  disabled = false,
}: CheckboxProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="
          h-4 w-4
          rounded
          border-gray-300
          text-indigo-600
          focus:ring-2 focus:ring-indigo-500
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      />
      {label && (
        <span className="text-sm text-gray-700">
          {label}
        </span>
      )}
    </label>
  );
}


<Checkbox
  label="Still Running"
  checked={formData.stillRunning}
  onChange={(val) =>
    setFormData({ ...formData, stillRunning: val })
  }
/>
