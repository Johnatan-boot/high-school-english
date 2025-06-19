const Header = () => (
  <header className="bg-white border-b border-gray-200 px-6 py-4">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      
      {/* Logo alinhado à esquerda */}
      <div className="flex items-center">
        <h1 class="logo" >CulturaTalks</h1>
      </div>

      {/* Navegação à direita, elementos em linha */}
      <nav>
        <a href="#" className="text-[#121212] font-medium hover:text-[#1a3cff] transition-colors">Cursos</a>
        <a href="#" className="text-[#121212] font-medium hover:text-[#1a3cff] transition-colors">Professores</a>
        <a href="#" className="text-[#121212] font-medium hover:text-[#1a3cff] transition-colors">Login</a>
      </nav>
    </div>
  </header>
);

export default Header;
