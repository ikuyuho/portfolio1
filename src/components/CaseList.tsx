import { cases } from "@/data/cases";
import CaseCard from "@/components/CaseCard";

export default function CaseList() {
  return (
    <section id="cases" className="px-6 py-16 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-text-primary text-center mb-10">
        業務改善の実績
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {cases.map((c) => (
          <CaseCard key={c.id} caseItem={c} />
        ))}
      </div>
    </section>
  );
}
