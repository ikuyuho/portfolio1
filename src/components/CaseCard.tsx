"use client";

import { useRef } from "react";
import type { Case } from "@/data/cases";
import CaseSlider from "@/components/CaseSlider";

type Props = {
  caseItem: Case;
};

export default function CaseCard({ caseItem }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = () => dialogRef.current?.showModal();
  const closeModal = () => dialogRef.current?.close();

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) closeModal();
  };

  return (
    <>
      {/* カード（サマリー） */}
      <article
        className="bg-white rounded-2xl p-6 shadow-sm border border-warm-200 cursor-pointer hover:shadow-md hover:border-accent hover:-translate-y-1 transition-all duration-200"
        onClick={openModal}
      >
        <h3 className="text-lg font-bold text-text-primary mb-2">
          {caseItem.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
          {caseItem.description}
        </p>
        <p className="text-accent font-medium text-sm mb-4">{caseItem.result}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {caseItem.tools.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 text-xs rounded-full bg-warm-100 text-text-secondary"
            >
              {tool}
            </span>
          ))}
        </div>
        {caseItem.images.length > 0 && (
          <p className="text-xs text-text-muted mb-4">
            📎 添付 {caseItem.images.length}件
          </p>
        )}
        <div className="flex items-center justify-end gap-1 text-accent text-sm font-medium">
          <span>詳細を見る</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </div>
      </article>

      {/* モーダル */}
      <dialog
        ref={dialogRef}
        className="case-modal"
        onClick={handleBackdropClick}
      >
        {/* ヘッダー（固定） */}
        <div className="shrink-0 flex items-center justify-between px-6 py-4 border-b border-warm-200">
          <h2 className="text-lg font-bold text-text-primary">
            {caseItem.title}
          </h2>
          <button
            onClick={closeModal}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-warm-100 text-text-muted text-lg"
            aria-label="閉じる"
          >
            ✕
          </button>
        </div>

        {/* スクロール領域 */}
        <div className="flex-1 overflow-y-auto p-6 pb-10">
          {caseItem.images.length > 0 && (
            <div className="mb-6">
              <CaseSlider images={caseItem.images} title={caseItem.title} />
            </div>
          )}
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            {caseItem.description}
          </p>
          <p className="text-accent font-semibold mb-4">{caseItem.result}</p>
          <div className="flex flex-wrap gap-2">
            {caseItem.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 text-xs rounded-full bg-warm-100 text-text-secondary"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
}
