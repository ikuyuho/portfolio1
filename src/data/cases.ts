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
    title: "売上CSV取込・出力の自動化",
    description:
      "複数チャネルから届く売上CSVをGoogle Driveに配置するだけで、Google Apps Scriptが自動で取込・バリデーション・重複チェック・エラー記録・Slack通知まで実行。正常データはスプレッドシートに蓄積し、freee取込用・売上レポート用・税理士提出用・BI分析用のCSVを出力できる仕組みを構築しました。",
    result:
      "CSV集計作業の削減・入力ミス防止・エラー確認の効率化・会計/分析向けCSV出力を実現",
    tools: [
      "Google Drive",
      "Google Sheets",
      "Google Apps Script",
      "Slack",
      "CSV",
      "clasp",
    ],
    images: [
      "/002/01.png",
      "/002/02.png",
      "/002/03.png",
      "/002/04.png",
      "/002/05.png",
      "/002/06.png",
    ],
  },
];
