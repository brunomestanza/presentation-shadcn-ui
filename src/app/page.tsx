import { CodeExampleSlide } from '@/components/slides/code-example-slide'

export default function Home() {
	return (
		<div>
			<CodeExampleSlide
				data={{
					id: 6,
					type: 'code-example',
					title: 'Exemplo de Teste Unitário',
					implementation:
						'Vamos criar uma função calculadora que executa operações aritméticas básicas. Nosso teste unitário verificará se cada operação funciona corretamente com várias entradas, incluindo casos extremos como divisão por zero e operações inválidas.',
					codeToTest: `// Função calculadora para testar
function calcular(operacao, a, b) {
  switch (operacao) {
    case 'somar':
      return a + b;
    case 'subtrair':
      return a - b;
    case 'multiplicar':
      return a * b;
    case 'dividir':
      if (b === 0) {
        throw new Error('Divisão por zero');
      }
      return a / b;
    default:
      throw new Error('Operação inválida');
  }
}`,
					testCode: `// Testes unitários para calculadora
function testarCalculadora() {
  // Testar adição
  if (calcular('somar', 5, 3) !== 8) {
    throw new Error('Teste de adição falhou');
  }
  
  // Testar subtração
  if (calcular('subtrair', 10, 4) !== 6) {
    throw new Error('Teste de subtração falhou');
  }
  
  // Testar multiplicação
  if (calcular('multiplicar', 3, 4) !== 12) {
    throw new Error('Teste de multiplicação falhou');
  }
  
  // Testar divisão
  if (calcular('dividir', 15, 3) !== 5) {
    throw new Error('Teste de divisão falhou');
  }
  
  // Testar divisão por zero
  try {
    calcular('dividir', 10, 0);
    throw new Error('Deveria ter lançado erro de divisão por zero');
  } catch (error) {
    if (error.message !== 'Divisão por zero') {
      throw new Error('Erro errado para divisão por zero');
    }
  }
  
  // Testar operação inválida
  try {
    calcular('modulo', 10, 3);
    throw new Error('Deveria ter lançado erro de operação inválida');
  } catch (error) {
    if (error.message !== 'Operação inválida') {
      throw new Error('Erro errado para operação inválida');
    }
  }
  
  console.log('✓ Todos os testes unitários da calculadora passaram!');
}

testarCalculadora();`,
				}}
			/>
		</div>
	)
}
