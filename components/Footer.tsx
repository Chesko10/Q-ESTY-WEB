export default function Footer() {
  return (
    <footer className="bg-brown-dark px-6 py-10 text-cream">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
        <span className="font-serif text-xl font-bold">Güesty</span>
        <a
          href="mailto:guesty1318@gmail.com"
          className="text-sm text-cream/80 hover:text-cream"
        >
          guesty1318@gmail.com
        </a>
      </div>
    </footer>
  );
}
