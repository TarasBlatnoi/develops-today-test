"use client";

export default function Dropdown({ mainLabel, options, onChange, ...props }) {
  return (
    <div className="flex flex-col items-start">
      <label
        htmlFor="dropdown"
        className="mb-2 ml-1 text-lg font-medium text-white"
      >
        {mainLabel}
      </label>
      <select
        id="dropdown"
        onChange={(e) => {
          onChange(e.target.value);
        }}
        {...props}
        className="p-2 border rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
