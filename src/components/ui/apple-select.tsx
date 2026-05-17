import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface AppleSelectOption {
  value: string;
  label: string;
}

interface AppleSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: AppleSelectOption[];
  placeholder?: string;
  className?: string;
}

export function AppleSelect({
  value,
  onChange,
  options,
  placeholder = "Select an option",
  className = "",
}: AppleSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const selectedIndex = options.findIndex((opt) => opt.value === value);
      setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : 0);
    }
  }, [isOpen, options, value]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!isOpen) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) => (prev < options.length - 1 ? prev + 1 : prev));
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0) {
          onChange(options[highlightedIndex].value);
          setIsOpen(false);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        break;
    }
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className={`
          w-full flex items-center justify-between
          bg-noir-deep/50 backdrop-blur-sm
          border border-creme/15 hover:border-brass/50
          px-4 py-3.5
          text-left
          transition-all duration-200 ease-out
          focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass/30
          ${isOpen ? "border-brass ring-1 ring-brass/30" : ""}
        `}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className={`font-serif text-lg ${selectedOption ? "text-creme" : "text-creme/40"}`}>
          {selectedOption?.label || placeholder}
        </span>
        <ChevronDown
          className={`
            w-5 h-5 text-creme/50 transition-transform duration-200 ease-out
            ${isOpen ? "rotate-180 text-brass" : ""}
          `}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`
          absolute z-50 w-full mt-2
          bg-noir-deep/95 backdrop-blur-xl
          border border-creme/10
          shadow-2xl shadow-black/50
          overflow-hidden
          transition-all duration-200 ease-out origin-top
          ${isOpen ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"}
        `}
        style={{ maxHeight: "280px" }}
        role="listbox"
      >
        <div className="py-2 overflow-y-auto custom-scrollbar" style={{ maxHeight: "280px" }}>
          {options.map((option, index) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
              className={`
                w-full px-4 py-3 text-left
                font-serif text-base
                transition-colors duration-150
                ${value === option.value
                  ? "bg-brass/15 text-brass"
                  : highlightedIndex === index
                    ? "bg-creme/5 text-creme"
                    : "text-creme/70"
                }
              `}
              role="option"
              aria-selected={value === option.value}
            >
              <div className="flex items-center justify-between">
                <span>{option.label}</span>
                {value === option.value && (
                  <svg
                    className="w-4 h-4 text-brass"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
