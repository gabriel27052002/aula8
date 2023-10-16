const { expect } = require('chai');
const { calcularIMC } = require('../src/imc');

describe('Calculadora de IMC', () => {

  it('Calculadora deve rodar tranquilo', () => {
    const peso = 80; // 80 kg
    const altura = 180; // 180 cm

    const IMEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal(IMEsperado);
  });



  it('altura = 0, entrada inadequada', () => {
    const peso = 70; // 70 kg
    const altura = 0; // 0 cm

    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal('NaN');
  });

  it('Determinar categoria - Abaixo do peso', () => {
    const imc = 17.5; // IMC correspondente a "Abaixo do peso"
  
    const categoriaEsperada = 'Abaixo do peso';
    const categoriaCalculada = determinarCategoriaIMC(imc);
  
    expect(categoriaCalculada).to.equal(categoriaEsperada);
  });
  
  it('Determinar categoria - Sobrepeso', () => {
    const imc = 27.5; // IMC correspondente a "Sobrepeso"
  
    const categoriaEsperada = 'Sobrepeso';
    const categoriaCalculada = determinarCategoriaIMC(imc);
  
    expect(categoriaCalculada).to.equal(categoriaEsperada);
  });
  
});