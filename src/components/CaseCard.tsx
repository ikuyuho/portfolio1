import type { Case } from "@/data/cases";
import CaseSlider from "@/components/CaseSlider";

type Props = {
  caseItem: Case;
};

export default function CaseCard({ caseItem }: Props) {
  return (
    <article className="bg-white rounded-2xl p-6 shadow-sm border border-warm-200">
      <h3 className="text-lg font-bold text-text-primary mb-2">
        {caseItem.title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-4">
        {caseItem.description}
      </p>
      {caseItem.images.length > 0 && (
        <CaseSlider images={caseItem.images} title={caseItem.title} />
      )}
      <p className="text-accent font-medium text-sm mb-4">{caseItem.result}</p>
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
    </article>
  );
}
