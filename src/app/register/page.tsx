"use client";

import { useState } from "react";

export default function RegisterClub() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const payload = {
      clubName: form.clubName.value.trim(),
      description: form.description.value.trim(),
      student: {
        name: form.studentName.value.trim(),
        designation: form.designation.value.trim(),
        branch: form.studentBranch.value.trim(),
        phone: form.studentPhone.value.trim(),
        usn: form.usn.value.trim(),
      },
      faculty: {
        name: form.facultyName.value.trim(),
        branch: form.facultyBranch.value.trim(),
        phone: form.facultyPhone.value.trim(),
      },
    };

    const res = await fetch("/api/register-club", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (data.success) {
      alert("Club registered successfully!");
      form.reset();
    } else {
      alert(data.error || "Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-start sm:items-center justify-center px-4 sm:px-6 py-10 sm:py-14 transition-colors duration-300">
      <form
        onSubmit={handleSubmit}
        className="fade-up golden-glow w-full max-w-xl sm:max-w-2xl bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-6 sm:p-8 md:p-10 space-y-8 transition-all duration-300"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          Club Registration
        </h1>

        {/* Club Info */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="font-semibold text-[var(--foreground)]/80">
              Club Name
            </label>
            <input name="clubName" required className="input" />
          </div>

          <div className="space-y-2">
            <label className="font-semibold text-[var(--foreground)]/80">
              Description
            </label>
            <textarea
              name="description"
              required
              className="input min-h-[120px]"
            />
          </div>
        </div>

        <div className="border-t border-[var(--card-border)] pt-6" />

        {/* Student Section */}
        <h2 className="text-lg sm:text-xl font-semibold text-center">
          Student Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="font-semibold text-[var(--foreground)]/80">
              Name
            </label>
            <input name="studentName" required className="input" />
          </div>

          <div className="space-y-2">
            <label className="font-semibold text-[var(--foreground)]/80">
              Designation
            </label>
            <input name="designation" required className="input" />
          </div>

          <div className="space-y-2">
            <label className="font-semibold text-[var(--foreground)]/80">
              Branch
            </label>
            <input name="studentBranch" required className="input" />
          </div>

          <div className="space-y-2">
            <label className="font-semibold text-[var(--foreground)]/80">
              Phone (10 digits)
            </label>
            <input
              name="studentPhone"
              required
              pattern="[0-9]{10}"
              maxLength={10}
              className="input"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="font-semibold text-[var(--foreground)]/80">
            USN (Alphanumeric)
          </label>
          <input
            name="usn"
            required
            pattern="[A-Za-z0-9]+"
            className="input"
          />
        </div>

        <div className="border-t border-[var(--card-border)] pt-6" />

        {/* Faculty Section */}
        <h2 className="text-lg sm:text-xl font-semibold text-center">
          Faculty Coordinator
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="font-semibold text-[var(--foreground)]/80">
              Name
            </label>
            <input name="facultyName" required className="input" />
          </div>

          <div className="space-y-2">
            <label className="font-semibold text-[var(--foreground)]/80">
              Branch
            </label>
            <input name="facultyBranch" required className="input" />
          </div>

          <div className="space-y-2 sm:col-span-2">
            <label className="font-semibold text-[var(--foreground)]/80">
              Phone (10 digits)
            </label>
            <input
              name="facultyPhone"
              required
              pattern="[0-9]{10}"
              maxLength={10}
              className="input"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
className="w-full py-3 rounded-xl bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600 active:scale-[0.97] transition-all duration-200 text-black font-semibold shadow-lg"        >
          {loading ? "Submitting..." : "Register Club"}
        </button>
      </form>
    </div>
  );
}