import '../components/NavBar.css'
export const Navbar = () => {
  return (
    <div class="navbar">
    <div class="container">
      <div class="logo">
        <img src="img/icon.png" alt="Logo 9CAMP" />
      </div>
      <div class="menu">
        <div class="botao">
          <img src="img/add.png" alt="Botão Adicionar" />
        </div>
        <div class="botao">
          <img src="img/logg.png" alt="Botão Logout" />
        </div>
      </div>
    </div>
  </div>
  );
}