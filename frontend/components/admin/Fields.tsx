"use client";

import { useRef, useState } from "react";
import { resolveMediaUrl } from "@/lib/home-content";
import { deleteAdminImage, uploadAdminImage } from "@/lib/admin-api";

const inputClass =
  "w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-navy outline-none focus:border-gold";

export function TextField({
  label,
  value,
  onChange,
  multiline = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
}) {
  return (
    <label className="block space-y-1.5">
      <span className="text-xs font-semibold tracking-wide text-navy uppercase">
        {label}
      </span>
      {multiline ? (
        <textarea
          rows={4}
          className={`${inputClass} resize-y min-h-24`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          className={inputClass}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </label>
  );
}

export function ImageField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  /** Uploads created in this field session — safe to delete immediately when replaced. */
  const sessionUploadsRef = useRef<Set<string>>(new Set());
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const preview = resolveMediaUrl(value);

  async function removeSessionUpload(url: string) {
    if (!url || !sessionUploadsRef.current.has(url)) return;
    sessionUploadsRef.current.delete(url);
    try {
      await deleteAdminImage(url);
    } catch {
      // Save-time cleanup will still remove unused ImageKit files.
    }
  }

  async function handleFile(file: File) {
    setError("");
    setUploading(true);
    try {
      const previous = value;
      const url = await uploadAdminImage(file);
      sessionUploadsRef.current.add(url);
      onChange(url);
      await removeSessionUpload(previous);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  async function handleDelete() {
    const previous = value;
    onChange("");
    await removeSessionUpload(previous);
  }

  return (
    <div className="space-y-2">
      <span className="text-xs font-semibold tracking-wide text-navy uppercase">
        {label}
      </span>
      {preview ? (
        <div className="relative h-36 overflow-hidden rounded-lg border border-border bg-surface-muted">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={preview} alt="" className="h-full w-full object-cover" />
        </div>
      ) : (
        <div className="flex h-24 items-center justify-center rounded-lg border border-dashed border-border text-sm text-text-muted">
          No image
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className="rounded-md bg-navy px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-60"
          disabled={uploading}
          onClick={() => inputRef.current?.click()}
        >
          {uploading ? "Uploading..." : value ? "Replace image" : "Upload image"}
        </button>
        {value ? (
          <button
            type="button"
            className="rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-navy"
            onClick={() => void handleDelete()}
          >
            Delete image
          </button>
        ) : null}
      </div>
      {error ? <p className="text-xs text-red-600">{error}</p> : null}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) void handleFile(file);
          e.target.value = "";
        }}
      />
    </div>
  );
}

export function DeleteButton({
  label = "Delete",
  onClick,
}: {
  label?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-md border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-50"
    >
      {label}
    </button>
  );
}

export function AddButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-md border border-dashed border-gold px-3 py-2 text-sm font-semibold text-navy hover:bg-gold/10"
    >
      {label}
    </button>
  );
}
