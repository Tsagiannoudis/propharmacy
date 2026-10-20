import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface GuideBreadcrumbsProps {
  currentTitle: string;
}

export const GuideBreadcrumbs: React.FC<GuideBreadcrumbsProps> = ({ currentTitle }) => {
  return (
    <nav className="flex items-center justify-center text-xs text-slate-500 py-3 gap-1.5" aria-label="Breadcrumb">
      <Link href="/" className="hover:text-emerald-700 transition-colors">
        Home
      </Link>
      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
      <span className="text-slate-700 font-medium">{currentTitle}</span>
    </nav>
  );
};
