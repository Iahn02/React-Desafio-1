import Header from "./Header";
import CardPizza from "./CardPizza";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-md-4">
            <CardPizza 
              name="Napolitana" 
              price={5950} 
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]} 
              img="https://ruta-imagen-pizza.jpg" 
            />
          </div>
          {/* Aquí puedes agregar más columnas con más CardPizza */}
        </div>
      </div>
    </>
  );
};
export default Home;