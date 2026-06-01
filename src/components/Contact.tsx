export default function Contact() {
  return (
    <section id="contact" className="px-6 py-16 text-center">
      <h2 className="text-2xl font-bold text-text-primary mb-4">
        お問い合わせ
      </h2>
      <p className="text-text-secondary mb-8 max-w-md mx-auto">
        業務改善に関するご相談はお気軽にどうぞ。
        まずは課題をお聞かせください。
      </p>
      <a
        href="mailto:your@email.com"
        className="inline-block px-8 py-3 rounded-full bg-accent text-warm-50 font-medium hover:bg-accent-hover transition-colors"
      >
        メールで相談する
      </a>
    </section>
  );
}
