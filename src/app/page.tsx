import { QuizSlide } from '@/components/slides/quiz-slide'

export default function Home() {
	return (
		<div className="p-4">
			<QuizSlide
				data={{
					id: 13,
					type: 'quiz',
					title: 'Quiz Interativo',
					questions: [
						{
							question:
								'Qual é o principal propósito dos testes unitários no desenvolvimento de software?',
							options: [
								'Testar todo o fluxo de trabalho da aplicação do início ao fim',
								'Testar funções ou componentes individuais em completo isolamento',
								'Testar interações da interface do usuário e elementos visuais',
								'Testar conexões de banco de dados e integrações de API externas',
							],
							correctAnswer: 1,
							explanation:
								'Testes unitários focam em testar funções ou componentes individuais em isolamento para garantir que funcionem corretamente por conta própria, sem dependências de outras partes do sistema.',
						},
						{
							question:
								'Na pirâmide de testes, qual tipo de teste você deveria ter mais?',
							options: [
								'Testes de Interface (Ponta a Ponta)',
								'Testes de Integração',
								'Testes Unitários',
								'Testes Manuais',
							],
							correctAnswer: 2,
							explanation:
								'Testes unitários deveriam formar a base da pirâmide de testes (70-80% dos testes) porque são rápidos, confiáveis, baratos de manter e ajudam a capturar bugs cedo no desenvolvimento.',
						},
						{
							question:
								'Qual é a principal vantagem dos testes automatizados sobre testes manuais?',
							options: [
								'É mais caro mas fornece cobertura mais completa',
								'Fornece feedback mais rápido e reduz significativamente erros humanos',
								'Só funciona para aplicações simples com funcionalidade básica',
								'Substitui completamente a necessidade de revisões de código e documentação',
							],
							correctAnswer: 1,
							explanation:
								'Testes automatizados fornecem feedback mais rápido durante o desenvolvimento, executam consistentemente sem erro humano e podem ser executados repetidamente como parte de pipelines de CI/CD.',
						},
						{
							question:
								'Quando você deveria escrever testes de integração na sua estratégia de testes?',
							options: [
								'Apenas depois que todos os testes unitários estão completos e passando',
								'Para testar como múltiplos componentes trabalham juntos e interagem',
								'Em vez de testes unitários para economizar tempo de desenvolvimento',
								'Apenas para componentes de interface de usuário e elementos visuais',
							],
							correctAnswer: 1,
							explanation:
								'Testes de integração são escritos para verificar se múltiplos componentes funcionam corretamente juntos, testando as interfaces e fluxo de dados entre diferentes partes do sistema.',
						},
						{
							question:
								'Quais características tornam um teste unitário eficaz e manutenível?',
							options: [
								'Testa múltiplas funções de uma vez para máxima eficiência',
								'Requer conexão com banco de dados para ser realista e completo',
								'É rápido, confiável, independente e testa uma coisa por vez',
								'Só testa cenários de caminho feliz para economizar tempo',
							],
							correctAnswer: 2,
							explanation:
								'Um bom teste unitário é rápido (executa em milissegundos), confiável (resultados consistentes), independente (não depende de outros testes) e foca em testar um comportamento específico com asserções claras.',
						},
					],
				}}
			/>
		</div>
	)
}
