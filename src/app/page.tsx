import { FrameworksSlide } from '@/components/slides/frameworks-slide'

export default function Home() {
	return (
		<div className="p-4">
			<FrameworksSlide
				data={{
					id: 15,
					type: 'frameworks',
					title: 'Bons Frameworks de Tecnologia para Testes',
					frameworks: [
						{
							technology: 'Angular',
							name: 'Jasmine + Karma',
							description: 'Framework de testes integrado com Angular CLI',
							link: 'https://angular.io/guide/testing',
							features: [
								'Testes unitários',
								'Testes de integração',
								'E2E com Protractor/Cypress',
							],
						},
						{
							technology: 'C#',
							name: 'xUnit / NUnit / MSTest',
							description: 'Frameworks de teste .NET populares',
							link: 'https://docs.microsoft.com/en-us/dotnet/core/testing/',
							features: [
								'Testes unitários',
								'Testes de integração',
								'Mocking com Moq',
							],
						},
						{
							technology: 'Go',
							name: 'Pacote de Testes Go',
							description: 'Pacote de testes integrado com Go',
							link: 'https://golang.org/pkg/testing/',
							features: [
								'Testes unitários',
								'Benchmarking',
								'Testes orientados por tabela',
							],
						},
						{
							technology: 'Java',
							name: 'JUnit + Mockito',
							description: 'Framework de testes Java padrão da indústria',
							link: 'https://junit.org/junit5/',
							features: [
								'Testes unitários',
								'Testes de integração',
								'Mocking',
								'Testes parametrizados',
							],
						},
						{
							technology: 'JavaScript',
							name: 'Jest',
							description: 'Framework de testes JavaScript delicioso',
							link: 'https://jestjs.io/',
							features: [
								'Testes unitários',
								'Testes de snapshot',
								'Mocking',
								'Cobertura de código',
							],
						},
						{
							technology: 'Kotlin',
							name: 'JUnit + MockK',
							description: 'Testes amigáveis ao Kotlin com MockK',
							link: 'https://mockk.io/',
							features: [
								'Testes unitários',
								'Testes de corrotina',
								'Mocking estilo DSL',
							],
						},
						{
							technology: 'Node.js',
							name: 'Jest / Mocha + Chai',
							description: 'Frameworks de teste Node.js populares',
							link: 'https://mochajs.org/',
							features: [
								'Testes unitários',
								'Testes de integração',
								'Testes de API',
							],
						},
						{
							technology: 'PHP',
							name: 'PHPUnit',
							description: 'O framework de testes PHP',
							link: 'https://phpunit.de/',
							features: [
								'Testes unitários',
								'Testes de integração',
								'Testes de banco de dados',
							],
						},
						{
							technology: 'Python',
							name: 'pytest',
							description: 'Testes Python simples e escaláveis',
							link: 'https://pytest.org/',
							features: [
								'Testes unitários',
								'Fixtures',
								'Testes parametrizados',
								'Ecossistema de plugins',
							],
						},
						{
							technology: 'React',
							name: 'React Testing Library',
							description: 'Utilitários de teste React DOM simples e completos',
							link: 'https://testing-library.com/docs/react-testing-library/intro/',
							features: [
								'Testes de componente',
								'Testes de interação do usuário',
								'Testes de acessibilidade',
							],
						},
						{
							technology: 'Next.js',
							name: 'Jest + React Testing Library',
							description: 'Next.js com Jest e React Testing Library',
							link: 'https://nextjs.org/docs/testing',
							features: [
								'Testes de componente',
								'Testes de rota API',
								'E2E com Playwright',
							],
						},
						{
							technology: 'React Native',
							name: 'Jest + React Native Testing Library',
							description: 'Testando aplicações React Native',
							link: 'https://callstack.github.io/react-native-testing-library/',
							features: [
								'Testes de componente',
								'Testes de navegação',
								'Testes de módulo nativo',
							],
						},
						{
							technology: 'Swift',
							name: 'XCTest',
							description: 'Framework de testes da Apple para Swift/iOS',
							link: 'https://developer.apple.com/documentation/xctest',
							features: [
								'Testes unitários',
								'Testes de interface',
								'Testes de performance',
							],
						},
					],
				}}
			/>
		</div>
	)
}
