const Header = () => {
  return (
    <header className="text-center text-white py-5" style={{ backgroundImage: 'url("ruta-a-tu-imagen.jpg")', backgroundColor: '#333' }}>
      <h1>¡Pizzería Mamma Mia!</h1>
      <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      <hr className="w-75 mx-auto" />
    </header>
  );
};
export default Header;