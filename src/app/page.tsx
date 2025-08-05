import { UseCasesSlide } from '@/components/slides/use-cases-slide'

export default function Home() {
	return (
		<div className="p-4">
			<UseCasesSlide
				data={{
					id: 12,
					type: 'use-cases',
					title: 'Casos de Uso do Mundo Real',
					useCases: [
						{
							icon: '💰',
							title: 'Bug de Cálculo Financeiro',
							problem:
								'Um app bancário calcula juros compostos incorretamente, afetando milhares de contas de clientes',
							solution:
								'Testes unitários capturariam o erro matemático imediatamente durante o desenvolvimento antes da implantação',
							example:
								'calcularJurosCompostos(1000, 0.05, 12, 1) deveria retornar 1051.16, não 1500.00',
						},
						{
							icon: '📧',
							title: 'Integração de API Quebrada',
							problem:
								'Formulário de contato não envia emails após atualização da API do serviço de email de terceiros',
							solution:
								'Testes de integração verificam se o fluxo formulário → validação → API → entrega de email funciona corretamente',
							example:
								'enviarFormularioContato() → validarEntrada() → chamarAPIEmail() → confirmarEntrega()',
						},
						{
							icon: '👆',
							title: 'Botão Invisível no Mobile',
							problem:
								'Botão de envio fica oculto em dispositivos móveis devido a problemas de media query CSS',
							solution:
								'Testes de interface simulam interações móveis e capturam problemas de design responsivo em dispositivos',
							example:
								'clicarBotaoEnviar() deveria disparar envio do formulário em telas de 320px a 1920px',
						},
						{
							icon: '🔐',
							title: 'Vulnerabilidade de Bypass de Autenticação',
							problem:
								'Usuários podem acessar páginas de admin protegidas manipulando parâmetros de URL',
							solution:
								'Testes ponta a ponta verificam fluxos completos de autenticação e verificações de autorização',
							example:
								'acessarPainelAdmin() deveria redirecionar para login quando usuário não tem privilégios de admin',
						},
						{
							icon: '💳',
							title: 'Condição de Corrida no Processamento de Pagamento',
							problem:
								'Site de e-commerce cobra clientes múltiplas vezes devido a duplo clique no botão de pagamento',
							solution:
								'Testes de integração garantem que processamento de pagamento lida com requisições concorrentes adequadamente',
							example:
								'processarPagamento() → prevenirDuplicatas() → cobrarCartao() → criarPedido()',
						},
						{
							icon: '📱',
							title: 'Problema de Compatibilidade Cross-Browser',
							problem:
								'Aplicação funciona perfeitamente no Chrome mas quebra nos navegadores Safari e Firefox',
							solution:
								'Testes de interface executam através de múltiplos navegadores para capturar problemas de compatibilidade cedo',
							example:
								'fluxoLoginUsuario() deveria funcionar consistentemente no Chrome, Firefox, Safari e Edge',
						},
					],
				}}
			/>
		</div>
	)
}
