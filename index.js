// arrays, objetos
let meta = {
  value: "ler um livro pro mês",
  checked: true,
  log: (info) => {
    console.log(info);
  }
};

meta.value = "não é mais ler um livro, agora serão 2 livros por mês";
meta.log(meta.value);


// function   vs.   arrow function

// const criarMeta = () => {}

// function criarMeta() {}
