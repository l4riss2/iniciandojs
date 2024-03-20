const nome = "larissa";
console.log(nome);

const al1 = 10;
const al2 = 5; // comentário
const al3 = 8;

const media = (al1+al2+al3)/3

const nomeDoAluno1 = "João";
const nomeDoAluno2 = "Joãozinho";
const nomeDoAluno3 = "Joãozão";
 console.log(nomeDoAluno1);

console.log("A media dos alunos é:",media);

console.log('A media dos alunos foi ${media}');

console.log(typeof al1);

if(media>5){
    console.log("Parabens a media da turma foi:",media);
}
else{
     console.log("Caro aluno estude mais pq sua media foi baixa",media);
    }

const n = "lais";
const enderecoDalais= "rua kennedy n4";
const notaFinal = 9.8;
const salaDalais = 5;
const turnoDalais = "manha";

//Objeto
const lais = {
    endereco : "rua kennedy n4",
    notaf : 9.8,
    salaa : 5,
    turno : "manha"
}
console.log(lais.notaf)

// Arrays
const escola = [
     {
      nome:"lais",
      endereco:"rua kennedy n4",
      sala: 4,
      turno:"manha"},
     {
      nome:"lucas",
      endereco:"rua frei serafim",
      sala: 3,
      turno:"manha"}, 
      {
       nome:"joao",
       endereco:"rua sul",
       sala: 2,
       turno:"manha"},
]
console.log(escola[1].endereco,escola[1].nome)

// Arrays
const site = [
    {
     us:"j0a0",
     sn:"Star",
     id:3334443443},
    {
     us:"Gu1lh3rme",
     sn:"Am0R",
     id:344543324}, 
     {
      us:"Pedr00",
      sn:"V4Sc00",
      id:5646478394},
     {
      us:"lucas",
      sn:"fla2",
      id:7765445678}, 
     {
      us:"Gabriel",
      sn:"fech000",
      id:393994993},
]
console.log("Usuario:",site[3].us,"Senha:",site[3].sn,"Id:",site[3].id)

//Função
function soma(a,b){
    return a+b
}
console.log(soma(5,6))

//estrutura de repetição(For)
for(let b = 0; b<5; b++){
    console.log(b)
}
