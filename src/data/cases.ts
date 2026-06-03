export type Case = {
  id: string
  title: string
  description: string
  result: string
  tools: string[]
  /** スクリーンショットのパス配列。public/cases/{id}/ 配下に配置。
   *  例: ["/cases/001/01.png", "/cases/001/02.png"]
   *  空配列の場合はスライダーを非表示にする。 */
  images: string[]
};

export const cases: Case[] = [
  {
    id: "001",
    title: "問い合わせ管理の自動化",
    description:
"Gmailとスプレッドシートに分散していた問い合わせ管理を、Googleフォーム・スプレッドシート・GAS・Slack通知で一元化。転記作業や対応漏れを減らし、営業担当が問い合わせ状況をすぐ確認できる仕組みを構築しました。",
    result: "転記作業削減・対応漏れ削減・問い合わせ状況の可視化を実現",
    tools: [
      "Google Forms",
      "Google Sheets",
      "Google Apps Script",
      "Slack",
    ],
    images: [
      "/001/01.png",
      "/001/02.png",
      "/001/03.png",
      "/001/04.png",
      "/001/05.png",
      "/001/06.png",
    ],
  },
  {
    id: "002",
    title: "在庫管理レポートの自動生成",
    description:
      "複数システムに分散した在庫データを毎朝手動で集計・加工していた日次レポート作成をPythonで自動化。朝一番に自動配信されるように。",
    result: "毎日2時間の作業を完全自動化（月40時間削減）",
    tools: ["Python", "Excel VBA"],
    images: [
      "/002/01.png",
      "/002/02.png",
      "/002/03.png",
      "/002/04.png",
      "/002/05.png",
      "/002/06.png",
      "/002/07.png",
      "/002/08.png",
      "/002/09.png",
      "/002/10.png",
      "/002/11.png",
      "/002/12.png",
      "/002/13.png",
    ],
  },
];
