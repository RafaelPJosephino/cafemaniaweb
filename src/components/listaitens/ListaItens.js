const fooditem=[
    {
        titulo: "Cheese paratha",
        imagem: '../imgs/b1.jpg',
        preco: "RS 250",
        categoria: "breakFast",
        descricao: "These cheese flatbreads make for a wholesome breakfast or brunch. There are many many varieties of paratha made and this is one such tasty paratha which the kids are going to love."
    },
    {
        titulo: "Aloo Paratha",
        imagem: '../imgs/b2.jpg',
        preco: "RS 200",
        categoria: "breakFast",
        descricao: "Aloo Paratha is a bread dish originating from the Indian subcontinent. It is a breakfast dish originated from the Punjab region."
    },
    {
        titulo: "Egg Paratha",
        imagem: '../imgs/b3.jpg',
        preco: "RS 150",
        categoria: "breakFast",
        descricao: "Egg paratha recipe — easy breakfast, brunch or dinner recipe that is protein rich, healthy and tasty. Egg paratha is a kids' favorite, so i make it often for their after school snack. To make egg paratha, you can use ready paratha, roti or frozen paratha as well."
    },
    {
        titulo: "Daal Chawal",
        imagem: '../imgs/l1.jpg',
        preco: "RS 400",
        categoria: "Lunch",
        descricao: "The most fascinating, fabulously fantastic and simple lightweight Pakistan’s most favorite dish, Daal Chawal Recipe (Daal Rice) is here at Sooperchef.pk. It’s simple, fast and delicious Pakistani Recipe."
    },
    {
        titulo: "Pakal Paneer",
        imagem: '../imgs/l2.jpg',
        preco: "RS 400",
        categoria: "Lunch",
        descricao: "Palak Paneer is a popular Indian dish of Indian cottage cheese cubes in a mild, spiced smooth spinach sauce. This delicious creamy dish is made with fresh spinach leaves, paneer (firm cottage cheese), onions, tomatoes, herbs and spices."
    },
    {
        titulo: "Aloo Ghobi",
        imagem: '../imgs/l3.jpg',
        preco: "RS 200",
        categoria: "Lunch",
        descricao: "Aloo Gobi ki Sabzi is a classic Pakistani dish of Potatoes and Cauliflower cooked in savory spices and garnished with chillies and cilantro."
    },
    {
        titulo: "Aloo Goshat",
        imagem: '../imgs/l4.jpg',
        preco: "RS 200",
        categoria: "Lunch",
        descricao: "Aloo Gosht is a spicy, thick and creamy meat gravy that originates from Pakistani and North Indian cuisine.This gravy has potatoes cooked with lamb or mutton in a thick stew."
    },
    {
        titulo: "Banana Shakes",
        imagem: '../imgs/s1.jpg',
        preco: "RS 150",
        categoria: "Shakes",
        descricao: "You need less than five minutes to make this easy banana smoothie. Use our simple recipe on it’s own or use it as a base for other smoothies."
    },
    {
        titulo: "Mango Shakes",
        imagem: '../imgs/s2.jpg',
        preco: "RS 150",
        categoria: "Shakes",
        descricao: "Mango shake is a cool and tempting fruit drink prepared by simply blending ripe mango pieces, milk and sugar. To keep things simple and easy, this recipe primarily explains how to make mango shake with milk."
    },

    {
        titulo: "Biryani",
        imagem: '../imgs/d1.jpg',
        preco: "RS 600",
        categoria: "Dinner",
        descricao: "Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and meat, and sometimes, in addition, eggs and/or vegetables such as potatoes in certain regional varieties."
    },
    {
        titulo: "Korma",
        imagem: '../imgs/d2.jpg',
        preco: "RS 250",
        categoria: "Dinner",
        descricao: "Korma is a gravy dish that is usually made with yogurt, lots of nuts and spices. A Mughal era original, Chicken Korma is the perfect dinner party dish that is easy, quick and a no fuss recipe."
    }
]



const[comidaitem, setCategoriaSelecionada] = useState([
    {
      titulo: "Porção (1)",
      imagem: "https://drive.google.com/u/0/uc?id=1zGQ7Q4Bw4yzKFB6qqiuR0QfAkG2og0Jl&export=download",
      preco: "(P) RS 25,00 (M) RS 50,00 (G) RS 75,00",
      categoria: "porcao",
      descricao: ["400gm batata 400 gm frango sassami", "500gm batata 500 gm frango sassami", "600gm batata 600 gm frango sassami"]
      },
{
  titulo: "Porção (2)",
    imagem: "https://drive.google.com/u/0/uc?id=1zGQ7Q4Bw4yzKFB6qqiuR0QfAkG2og0Jl&export=download",
      preco: "(P) RS 25,00 (M) RS 50,00 (G) RS 75,00",
        categoria: "combos",
          descricao: ["400gm batata 400 gm frango sassami", "500gm batata 500 gm frango sassami", "600gm batata 600 gm frango sassami"]
},
{
  titulo: "Porção (3)",
    imagem: "https://drive.google.com/u/0/uc?id=1zGQ7Q4Bw4yzKFB6qqiuR0QfAkG2og0Jl&export=download",
      preco: "(P) RS 25,00 (M) RS 50,00 (G) RS 75,00",
        categoria: "combos",
          descricao: ["400gm batata 400 gm frango sassami", "500gm batata 500 gm frango sassami", "600gm batata 600 gm frango sassami"]
},
{
  titulo: "Porção (4)",
    imagem: "https://drive.google.com/u/0/uc?id=1zGQ7Q4Bw4yzKFB6qqiuR0QfAkG2og0Jl&export=download",
      preco: "(P) RS 25,00 (M) RS 50,00 (G) RS 75,00",
        categoria: "porcao",
          descricao: ["400gm batata 400 gm frango sassami", "500gm batata 500 gm frango sassami", "600gm batata 600 gm frango sassami"]
},
{
  titulo: "Porção (5)",
    imagem: "https://drive.google.com/u/0/uc?id=1zGQ7Q4Bw4yzKFB6qqiuR0QfAkG2og0Jl&export=download",
      preco: "(P) RS 25,00 (M) RS 50,00 (G) RS 75,00",
        categoria: "porcao",
          descricao: ["400gm batata 400 gm frango sassami", "500gm batata 500 gm frango sassami", "600gm batata 600 gm frango sassami"]
},
{
  titulo: "Porção (6)",
    imagem: "https://drive.google.com/u/0/uc?id=1zGQ7Q4Bw4yzKFB6qqiuR0QfAkG2og0Jl&export=download",
      preco: "(P) RS 25,00 (M) RS 50,00 (G) RS 75,00",
        categoria: "porcao",
          descricao: ["400gm batata 400 gm frango sassami", "500gm batata 500 gm frango sassami", "600gm batata 600 gm frango sassami"]
},
{
  titulo: "Porção (7)",
    imagem: "https://drive.google.com/u/0/uc?id=1zGQ7Q4Bw4yzKFB6qqiuR0QfAkG2og0Jl&export=download",
      preco: "(P) RS 25,00 (M) RS 50,00 (G) RS 75,00",
        categoria: "porcao",
          descricao: ["500gm batata 500 gm frango sassami", "500gm batata 500 gm frango sassami", "600gm batata 600 gm frango sassami"]
},
{
  titulo: "Porção (8)",
    imagem: "https://drive.google.com/u/0/uc?id=1zGQ7Q4Bw4yzKFB6qqiuR0QfAkG2og0Jl&export=download",
      preco: "(P) RS 25,00 (M) RS 50,00 (G) RS 75,00",
        categoria: "porcao",
          descricao: ["400gm batata 400 gm frango sassami", "500gm batata 500 gm frango sassami", "600gm batata 600 gm frango sassami"]
},
{
  titulo: "Porção (9)",
    imagem: "https://drive.google.com/u/0/uc?id=1zGQ7Q4Bw4yzKFB6qqiuR0QfAkG2og0Jl&export=download",
      preco: "(P) RS 25,00 (M) RS 50,00 (G) RS 75,00",
        categoria: "porcao",
          descricao: ["400gm batata 400 gm frango sassami", "500gm batata 500 gm frango sassami", "600gm batata 600 gm frango sassami"]
},
{
  titulo: "Porção (10)",
    imagem: "https://drive.google.com/u/0/uc?id=1zGQ7Q4Bw4yzKFB6qqiuR0QfAkG2og0Jl&export=download",
      preco: "(P) RS 25,00 (M) RS 50,00 (G) RS 75,00",
        categoria: "porcao",
          descricao: ["400gm batata 400 gm frango sassami", "500gm batata 500 gm frango sassami", "600gm batata 600 gm frango sassami"]
},
{
  titulo: "Porção (11)",
    imagem: "https://drive.google.com/u/0/uc?id=1zGQ7Q4Bw4yzKFB6qqiuR0QfAkG2og0Jl&export=download",
      preco: "(P) RS 25,00 (M) RS 50,00 (G) RS 75,00",
        categoria: "porcao",
          descricao: ["400gm batata 400 gm frango sassami", "500gm batata 500 gm frango sassami", "600gm batata 600 gm frango sassami"]
}]);