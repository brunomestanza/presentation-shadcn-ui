import { ConceptSlide } from '@/components/slides/concept-slide'

export default function Home() {
	return (
		<div>
			<ConceptSlide
				data={{
					id: 2,
					type: 'concept',
					title: 'Introdução aos Testes Automatizados',
					conceptTitle: '🚀 Por que os Testes Automatizados Importam:',
					concepts: [
						'Fornecem feedback mais rápido durante os ciclos de desenvolvimento',
						'Aumentam a qualidade geral e confiabilidade do código',
						'Reduzem o esforço de testes manuais e erros humanos',
						'Permitem refatoração e atualizações de código com confiança',
						'Suportam integração contínua e implantação (CI/CD)',
						'Capturam bugs antes que cheguem aos ambientes de produção',
						'Economizam tempo e dinheiro a longo prazo',
						'Melhoram a produtividade da equipe e confiança do desenvolvedor',
						'Fornecem documentação viva do comportamento do sistema',
						'Permitem testes de regressão a cada mudança de código',
					],
					imageUrl: '/test-introduction.png',
					code: `// Nossa função para testar
function soma(a, b) {
  return a + b;
}

// Nosso teste
if (soma(2, 3) !== 5) {
  throw new Error("Teste falhou!");
} else {
  console.log("✓ Teste passou!");
}`,
				}}
			/>
		</div>
	)
}
