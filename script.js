const rendaMensal = Number(prompt('Qual a sua renda mensal?'));

if (isNaN(rendaMensal)||rendaMensal<=0){
  alert('Insira uma informação válida')
} else {
  const gastoMoradia = Number(prompt('Qual o seu gasto com moradia?')) //deve ser 30%
const gastoEducacao = Number(prompt('Qual o seu gasto com educação?')) //deve ser 20%
const gastoTransporte = Number(prompt('Qual o seu gasto com transporte?')) //deve ser 15%

const corretoMoradia = rendaMensal*0.3;
const corretoEducacao = rendaMensal*0.2;
const corretoTransporte = rendaMensal*0.15;

console.log (`A sua renda mensal é R$${rendaMensal}\nGastos com moradia:R$${gastoMoradia}\nGastos com educação:R$${gastoEducacao}\nGastos com transporte:R$${gastoTransporte}`)
if (gastoMoradia===corretoMoradia) {
  console.log ('O uso recomendado para moradia da sua renda mensal é de 30%. Você está dentro do orçamento recomendado')
} else if (gastoMoradia>corretoMoradia) {
  console.log (`O uso recomendado para moradia, da sua renda mensal, é de 30%. Você está saindo do orçamento, reduza R$${gastoMoradia-corretoMoradia}, totalizando R$${corretoMoradia}`)
} else if (gastoMoradia<corretoMoradia) {
  console.log (`O uso recomendado para moradia, da sua renda mensal é de 30%. Você está abaixo do orçamento, podendo gastar mais R$${corretoMoradia-gastoMoradia}, totalizando R$${corretoMoradia} `)
} else {
  console.log('Erro na validação das informações')
}

if (gastoEducacao===corretoEducacao) {
  console.log ('O uso recomendado para educação, da sua renda mensal, é de 20%. Você está dentro do orçamento recomendado')
} else if (gastoEducacao>corretoEducacao) {
  console.log (`O uso recomendado para educação, da sua renda mensal, é de 20%. Você está saindo do orçamento, reduza R$${gastoEducacao-corretoEducacao}, totalizando R$${corretoEducacao}`)
} else if (gastoEducacao<corretoEducacao) {
  console.log (`O uso recomendado para educação, da sua renda mensal é de 20%. Você está abaixo do orçamento, podendo gastar R$${corretoEducacao-gastoEducacao}, totalizando R$${corretoEducacao} `)
} else {
  console.log('Erro na validação das informações')
}

if (gastoTransporte===corretoTransporte) {
  console.log ('O uso recomendado para transporte, da sua renda mensal, é de 15%. Você está dentro do orçamento recomendado')
} else if (gastoTransporte>corretoTransporte) {
  console.log (`O uso recomendado para transporte, da sua renda mensal, é de 15%. Você está saindo do orçamento, reduza R$${gastoTransporte-corretoTransporte}, totalizando R$${corretoTransporte}`)
} else if (gastoTransporte<corretoTransporte) {
  console.log (`O uso recomendado para transporte, da sua renda mensal é de 15%. Você está abaixo do orçamento, podendo gastar R$${corretoTransporte-gastoTransporte}, totalizando R$${corretoTransporte} `)
} else {
  console.log('Erro na validação das informações')
} }
