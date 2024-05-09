const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <nav>
        <h6 className="footer-title">Ameciclo</h6>
        <a className="link link-hover">
          Ameciclo - Associação Metropolitana de Ciclistas do Recife
        </a>
        <a className="link link-hover">+55 (81) 9 3618-2947</a>
        <a className="link link-hover">
          R. da Aurora, 529, loja 2 - Santo Amaro, Recife/PE, 50050-145
        </a>
        <a className="link link-hover">contato@ameciclo.org</a>
      </nav>
      <nav>
        <h6 className="footer-title">Links</h6>
        <a className="link link-hover">FAQ</a>
        <a className="link link-hover">Wiki</a>
        <a className="link link-hover">Plataforma de Dados</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <a className="link link-hover">Facebook</a>
        <a className="link link-hover">Instagram</a>
        <a className="link link-hover">Twitter</a>
        <a className="link link-hover">Youtube</a>
        <a className="link link-hover">Telegram</a>
      </nav>
      <nav>
        <h6 className="footer-title">Apoio</h6>
        <a
          className="link link-hover"
          href=" https://vercel.com/?utm_source=ameciclo&utm_campaign=oss"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vercel
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
