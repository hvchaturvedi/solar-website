"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919310078444"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M20.52 3.48A11.91 11.91 0 0012 0C5.37 0 0 5.37 0 12a11.9 11.9 0 001.64 6.02L0 24l6.14-1.6A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12a11.91 11.91 0 00-3.48-8.52zM12 22a9.94 9.94 0 01-5.1-1.4l-.36-.22-3.64.95.97-3.55-.23-.37A9.94 9.94 0 0112 2c5.52 0 10 4.48 10 10s-4.48 10-10 10z" />
      </svg>
    </a>
  );
}
