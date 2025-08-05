import { PatternsSlide } from '@/components/slides/patterns-slide'

export default function Home() {
	return (
		<div className="p-4">
			<PatternsSlide
				data={{
					id: 11,
					type: 'patterns',
					title: 'Padrões de Teste e Melhores Práticas',
					patterns: [
						{
							category: 'Padrões de Teste',
							items: [
								{
									name: 'Organizar-Agir-Verificar (AAA)',
									icon: '🎯',
									description: 'Estruture seus testes em três fases claras',
									details: [
										'Organizar: Configure dados e condições de teste',
										'Agir: Execute a função ou ação sendo testada',
										'Verificar: Verifique o resultado esperado',
									],
									example:
										"// Organizar\nconst usuario = { nome: 'João' };\n// Agir\nconst resultado = cumprimentarUsuario(usuario);\n// Verificar\nexpect(resultado).toBe('Olá, João!');",
								},
								{
									name: 'Modelo de Objeto de Página (POM)',
									icon: '📄',
									description:
										'Organize testes de interface com objetos de página reutilizáveis',
									details: [
										'Crie classes representando páginas web',
										'Encapsule elementos e ações da página',
										'Melhora a manutenibilidade e reduz duplicação',
									],
									example:
										'class PaginaLogin {\n  inserirNomeUsuario(nomeUsuario) { /* ... */ }\n  inserirSenha(senha) { /* ... */ }\n  clicarLogin() { /* ... */ }\n}',
								},
								{
									name: 'Testes Orientados por Dados',
									icon: '📊',
									description:
										'Execute o mesmo teste com diferentes conjuntos de dados',
									details: [
										'Separe lógica de teste dos dados de teste',
										'Teste múltiplos cenários eficientemente',
										'Use fontes de dados externas (CSV, JSON, bancos de dados)',
									],
									example:
										'const dadosTeste = [\n  { entrada: 5, esperado: 25 },\n  { entrada: 3, esperado: 9 }\n];\ndadosTeste.forEach(dados => {\n  test(`quadrado de ${dados.entrada}`, () => {\n    expect(quadrado(dados.entrada)).toBe(dados.esperado);\n  });\n});',
								},
							],
						},
						{
							category: 'Melhores Práticas',
							items: [
								{
									name: 'Escreva Testes Claros e Concisos',
									icon: '✨',
									description: 'Torne os testes fáceis de ler e entender',
									details: [
										'Use nomes descritivos de teste que expliquem o que está sendo testado',
										'Mantenha testes simples e focados em um comportamento',
										'Escreva testes que contem uma história sobre seu código',
									],
								},
								{
									name: 'Isolamento de Testes',
									icon: '🔒',
									description:
										'Garanta que os testes sejam independentes uns dos outros',
									details: [
										'Cada teste deve executar independentemente',
										'Limpe após os testes (resetar estado, limpar dados)',
										'Testes não devem depender da ordem de execução',
									],
								},
								{
									name: 'Cobertura de Testes',
									icon: '📈',
									description: 'Busque cobertura de teste significativa',
									details: [
										'Foque na lógica de negócio crítica e casos extremos',
										'Busque 70-80% de cobertura de código como diretriz',
										'Qualidade sobre quantidade - testes significativos importam mais',
									],
								},
								{
									name: 'Convenções de Nomenclatura de Testes',
									icon: '🏷️',
									description: 'Use nomes consistentes e significativos',
									details: [
										"Use nomes descritivos: 'deveria_retornar_erro_quando_email_invalido'",
										'Siga convenções da equipe consistentemente',
										'Inclua o comportamento esperado no nome',
									],
								},
								{
									name: 'Execução Regular de Testes',
									icon: '🔄',
									description:
										'Execute testes frequentemente e automaticamente',
									details: [
										'Integre testes no seu pipeline de CI/CD',
										'Execute testes antes de fazer commit do código',
										'Configure execução automática de testes em mudanças de código',
									],
								},
							],
						},
					],
				}}
			/>
		</div>
	)
}
