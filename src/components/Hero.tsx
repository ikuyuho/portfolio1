export default function Hero() {
  return (
    <section id="hero" className="px-6 py-20 text-center">
      <p className="text-text-secondary text-sm tracking-widest mb-3">
        業務改善 / RPA自動化
      </p>
      <h1 className="text-4xl font-bold text-text-primary mb-4">
        [Your Name]
      </h1>
      <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed">
        反復業務をなくし、人が本来の仕事に集中できる環境をつくります。
      </p>
      <a
        href="#contact"
        className="inline-block mt-8 px-8 py-3 rounded-full bg-accent text-warm-50 font-medium hover:bg-accent-hover transition-colors"
      >
        お問い合わせ
      </a>
    </section>
  );
}
