import CardItem from './components/Itens/CardItem.js';

function App() {
  const items = [
    {
      id: 0,
      titulo: "Porção ",
      imagem: "https://drive.google.com/uc?id=1eSU_mWM6aMvZZ0-RfBE02mTC8So3g8Ju&export=download",
      preco: "RS 25,00",
      quantidade: 0,
      descricao: ["400g de batata, 400g de frango sassami"]
    },
    {
      id: 1,
      titulo: "Porção ",
      imagem: "https://drive.google.com/uc?id=1q7jx57n7bXFgzMDFnswncJ3LSDKawoJH&export=download",
      preco: "RS 25,00",
      quantidade: 0,
      descricao: ["300g de batata, 250g de calabresa"]
    }];
    let itemsCarrinho = [];
    
    function  adicionarCarrinho(food){
       itemsCarrinho.push(food)
      };
    function  removerCarrinho(food){ 
      itemsCarrinho = itemsCarrinho.slice(itemsCarrinho.indexOf(food),1)
    };

  return (
    <div>
       {items.map((food, index) => { return <CardItem key={food.id} food={food} addCarrinho = {adicionarCarrinho.bind(this)} delCarrinho = {removerCarrinho.bind(this)}/>  })}
      <button onClick={() => { console.log(itemsCarrinho) }}>teste </button>
    </div >
  );
}
export default App;
