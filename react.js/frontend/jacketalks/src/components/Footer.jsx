const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Jacketalks</h3>
        <p>© {new Date().getFullYear()} Jacketalks. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
          <a href="#">Contato</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
