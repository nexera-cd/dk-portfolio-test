'use client';

import React from 'react';
import Link from 'next/link';

interface LogoDKProps {
  className?: string;
  size?: number;
  withText?: boolean;
}

export function LogoDK({ className = '', size = 44, withText = true }: LogoDKProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 transition-opacity duration-300 hover:opacity-90 ${className}`}
      aria-label="David Kayi Kinkela - Retour à l'accueil"
    >
      <div
        className="relative flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 via-[#0b132b] to-[#1c2541] dark:from-slate-950 dark:via-[#090f20] dark:to-[#172554] shadow-md border border-slate-700/40 dark:border-blue-900/40 group-hover:border-blue-500/60 transition-colors duration-300"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-3/4 h-3/4 drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer hairline border */}
          <rect
            x="4"
            y="4"
            width="92"
            height="92"
            rx="16"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-blue-400/30"
          />
          {/* Letter D */}
          <path
            d="M 28 26 L 28 74 M 28 26 L 46 26 C 58 26 66 34 66 50 C 66 66 58 74 46 74 L 28 74"
            stroke="#f8fafc"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Letter K */}
          <path
            d="M 64 26 L 64 74 M 64 50 L 78 26 M 68 45 L 80 74"
            stroke="#38bdf8"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Architectural diamond pivot */}
          <circle cx="50" cy="14" r="2.5" fill="#93c5fd" />
        </svg>
      </div>

      {withText && (
        <div className="flex flex-col text-left">
          <span className="text-sm font-semibold tracking-wider uppercase text-slate-900 dark:text-slate-100 font-serif">
            David Kayi Kinkela
          </span>
          <span className="text-[10px] tracking-widest uppercase text-slate-500 dark:text-slate-400 font-medium">
            Affaires & Stratégie
          </span>
        </div>
      )}
    </Link>
  );
}
