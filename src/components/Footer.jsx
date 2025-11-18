
export default function Footer() {
  return (
    <footer className="container-p py-12 text-white/60">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Shaheen Munaz. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="mailto:shaheenmunaz456@gmail.com">Email</a>
          <a href="https://github.com/Shaheen199" target="_blank">GitHub</a>
          <a href="tel:+94764168821">Call</a>
        </div>
      </div>
    </footer>
  );
}
