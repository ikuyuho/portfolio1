export type Case = {
  id: string;
  title: string;
  description: string;
  result: string;
  tools: string[];
};

export const cases: Case[] = [
  {
    id: "001",
    title: "請求書処理の自動化",
    description:
      "毎月200件以上の請求書をシステムに手入力していた作業をRPAで完全自動化。入力ミスもゼロになり、担当者を別業務にシフトできた。",
    result: "作業時間 80% 削減（月40時間 → 8時間）",
    tools: ["UiPath", "Excel"],
  },
  {
    id: "002",
    title: "在庫管理レポートの自動生成",
    description:
      "複数システムに分散した在庫データを毎朝手動で集計・加工していた日次レポート作成をPythonで自動化。朝一番に自動配信されるように。",
    result: "毎日2時間の作業を完全自動化（月40時間削減）",
    tools: ["Python", "Excel VBA"],
  },
];
