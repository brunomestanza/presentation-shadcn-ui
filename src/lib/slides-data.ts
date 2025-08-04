/** biome-ignore-all lint/suspicious/noTemplateCurlyInString: <If have any code examples, will have unused warnings> */
import dayjs from 'dayjs'
import type { SlideData } from '@/types/slide-types'

const now = dayjs()
const dateIStartedCoding = dayjs('2018-01-01')
const amountOfYearsCoding = now.diff(dateIStartedCoding, 'years')

export const slideData: SlideData[] = [
	{
		id: 1,
		type: 'title',
		title: 'Introdução aos Testes Automatizados',
		subtitle: 'Entendendo testes através de exemplos simples e práticos',
	},
	{
		id: 2,
		type: 'presenter',
		title: 'Quem está apresentando?',
		presenter: {
			name: 'Bruno Mestanza',
			role: 'Developer Instructor',
			company: 'Rocketseat',
			bio: `Desenvolvedor apaixonado por educação e produto com mais de ${amountOfYearsCoding} anos de experiência em desenvolvimento web. Especialista em JavaScript, React, Next JS, Node.js, produto e Design.`,
			imageUrl: 'http://github.com/brunomestanza.png',
			linkedin: 'https://www.linkedin.com/in/brunomestanza',
			github: 'http://github.com/brunomestanza',
			email: 'joao.silva@techcorp.com.br',
			website: 'https://joaosilva.dev',
			expertise: [
				'JavaScript/TypeScript',
				'React & Next.js',
				'React Native',
				'Node.js',
				'Design Engineering',
				'Produtos digitais',
				'Arquitetura de Software',
			],
			achievements: [
				`Mais de ${amountOfYearsCoding} anos de experiência em desenvolvimento FullStack e Mobile`,
				'Mentor e educador de tecnologia e inovação',
				'Entusiasta de Design e desenvolvimento de produtos digitais',
				'Pós Graduado em desenvolvimento FullStack',
			],
		},
	},
	{
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
	},
	{
		id: 3,
		type: 'concept',
		title: 'O que são Testes Automatizados?',
		conceptTitle: '🤖 Testes Automatizados são:',
		concepts: [
			'Programas que verificam se seu código funciona corretamente',
			'Executam automaticamente sem intervenção humana',
			'Parte essencial do ciclo de vida de desenvolvimento de software (SDLC)',
			'Vêm em diferentes tipos: Testes Unitários, de Integração e de Interface',
			'Fornecem documentação de como seu código deve se comportar',
			'Agem como uma rede de segurança ao fazer mudanças no código',
			'Executam consistentemente e repetidamente com os mesmos resultados',
			'Podem ser integrados em pipelines de build e implantação',
		],
		imageUrl: '/what-is-testing.png',
	},
	{
		id: 4,
		type: 'pyramid',
		title: 'A Pirâmide de Testes',
		imageUrl: '/test-pyramid.png',
	},
	{
		id: 5,
		type: 'concept',
		title: 'O que são Testes Unitários?',
		conceptTitle: '🔬 Testes Unitários:',
		concepts: [
			'Testam funções ou componentes individuais em isolamento',
			'Focam nas menores partes testáveis de uma aplicação',
			'Devem ser rápidos, confiáveis e independentes de dependências externas',
			'Fáceis de escrever, manter e entender',
			'Formam a base da sua suíte de testes (70-80% de todos os testes)',
			'Ajudam a capturar bugs cedo no processo de desenvolvimento',
			'Fornecem feedback imediato durante a codificação',
			'Devem testar um comportamento específico com asserções claras',
			'Usam mocks ou stubs para isolar a unidade sob teste',
			'Executam em milissegundos, permitindo ciclos de desenvolvimento rápidos',
			'Tem múltiplos casos de teste cobrindo diferentes cenários',
			'Cobre casos extremos e condições de erro, com tratativas descritivas',
		],
		imageUrl: '/what-are-unit-tests.png',
	},
	{
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
	},
	{
		id: 7,
		type: 'concept',
		title: 'O que são Testes de Integração?',
		conceptTitle: '🔗 Testes de Integração:',
		concepts: [
			'Testam como múltiplas unidades trabalham juntas como um grupo',
			'Verificam se diferentes partes da aplicação interagem corretamente',
			'Focam no fluxo de dados e comunicação entre componentes',
			'Capturam problemas que testes unitários podem perder nas interações de componentes',
			'Mais complexos que testes unitários, mas fornecem cobertura mais ampla do sistema',
			'Testam cenários realistas envolvendo múltiplas funções ou módulos',
			'Garantem que componentes integrados funcionem como um sistema coeso',
			'Frequentemente envolvem testes com dependências externas ou APIs',
			'Tipicamente compõem 20-30% da sua suíte de testes',
			'Podem requerer bancos de dados ou serviços',
		],
		imageUrl: '/what-are-integration-tests.png',
	},
	{
		id: 8,
		type: 'code-example',
		title: 'Exemplo de Teste de Integração',
		conceptTitle: '🔗 Características do Teste de Integração:',
		implementation:
			'Vamos criar um sistema de gerenciamento de usuários com funções para validação de usuário, armazenamento e notificação. Nosso teste de integração verificará se o processo completo de registro de usuário funciona corretamente, testando como todos os componentes interagem juntos, incluindo tratamento de erros e persistência de dados.',
		codeToTest: `// Sistema de gerenciamento de usuários
const usuarios = [];

function validarUsuario(dadosUsuario) {
  if (!dadosUsuario.email || !dadosUsuario.email.includes('@')) {
    return { valido: false, erro: 'Formato de email inválido' };
  }
  if (!dadosUsuario.nome || dadosUsuario.nome.length < 2) {
    return { valido: false, erro: 'Nome deve ter pelo menos 2 caracteres' };
  }
  if (!dadosUsuario.senha || dadosUsuario.senha.length < 6) {
    return { valido: false, erro: 'Senha deve ter pelo menos 6 caracteres' };
  }
  return { valido: true };
}

function salvarUsuario(dadosUsuario) {
  const usuarioExistente = usuarios.find(u => u.email === dadosUsuario.email);
  if (usuarioExistente) {
    throw new Error('Usuário já existe');
  }
  
  const novoUsuario = { 
    id: usuarios.length + 1, 
    ...dadosUsuario, 
    criadoEm: new Date().toISOString() 
  };
  usuarios.push(novoUsuario);
  return novoUsuario;
}

function enviarEmailBoasVindas(usuario) {
  // Simular envio de email com possível falha
  if (usuario.email.includes('invalido')) {
    throw new Error('Falha ao enviar email');
  }
  return \`Email de boas-vindas enviado para \${usuario.email}\`;
}

function registrarUsuario(dadosUsuario) {
  try {
    const validacao = validarUsuario(dadosUsuario);
    if (!validacao.valido) {
      return { sucesso: false, erro: validacao.erro };
    }
    
    const usuario = salvarUsuario(dadosUsuario);
    const resultadoEmail = enviarEmailBoasVindas(usuario);
    
    return {
      sucesso: true,
      usuario: usuario,
      mensagem: resultadoEmail
    };
  } catch (error) {
    return { sucesso: false, erro: error.message };
  }
}`,
		testCode: `// Teste de integração para registro de usuário
function testarRegistroUsuario() {
  // Limpar array de usuários para teste limpo
  usuarios.length = 0;
  
  // Teste 1: Registro bem-sucedido
  const usuarioValido = {
    nome: 'João Silva',
    email: 'joao@exemplo.com',
    senha: 'senhaSegura123'
  };
  
  const resultado = registrarUsuario(usuarioValido);
  
  if (!resultado.sucesso) {
    throw new Error('Registro de usuário válido falhou: ' + resultado.erro);
  }
  
  if (resultado.usuario.nome !== 'João Silva') {
    throw new Error('Nome do usuário não foi salvo corretamente');
  }
  
  if (!resultado.mensagem.includes('Email de boas-vindas enviado')) {
    throw new Error('Email de boas-vindas não foi enviado');
  }
  
  if (usuarios.length !== 1) {
    throw new Error('Usuário não foi salvo no banco de dados');
  }
  
  // Teste 2: Registro de usuário duplicado
  const resultadoDuplicado = registrarUsuario(usuarioValido);
  
  if (resultadoDuplicado.sucesso) {
    throw new Error('Usuário duplicado não deveria se registrar');
  }
  
  if (usuarios.length !== 1) {
    throw new Error('Usuário duplicado foi salvo no banco de dados');
  }
  
  // Teste 3: Registro com email inválido
  const usuarioInvalido = {
    nome: 'Maria Silva',
    email: 'email-invalido',
    senha: 'senha123'
  };
  
  const resultadoInvalido = registrarUsuario(usuarioInvalido);
  
  if (resultadoInvalido.sucesso) {
    throw new Error('Usuário inválido não deveria se registrar');
  }
  
  if (!resultadoInvalido.erro.includes('Formato de email inválido')) {
    throw new Error('Mensagem de erro errada para email inválido');
  }
  
  // Teste 4: Falha no envio de email
  const usuarioFalhaEmail = {
    nome: 'Usuário Teste',
    email: 'invalido@exemplo.com',
    senha: 'senha123'
  };
  
  const resultadoFalhaEmail = registrarUsuario(usuarioFalhaEmail);
  
  if (resultadoFalhaEmail.sucesso) {
    throw new Error('Registro deveria falhar quando envio de email falha');
  }
  
  console.log('✓ Teste de integração passou!');
}

testarRegistroUsuario();`,
	},
	{
		id: 9,
		type: 'concept',
		title: 'O que são Testes de Interface (Ponta a Ponta)?',
		conceptTitle: '🖱️ Testes de Interface (Ponta a Ponta):',
		concepts: [
			'Testam a jornada completa do usuário através da aplicação',
			'Simulam interações reais do usuário com a interface',
			'Verificam se todos os componentes funcionam juntos como esperado',
			'Capturam problemas que os usuários realmente encontrariam',
			'Mais lentos, mas o tipo mais abrangente de teste',
			'Testam a aplicação da perspectiva do usuário',
			'Frequentemente envolvem automação de navegador e simulação de interface de usuário',
			'Fornecem confiança de que todo o sistema funciona corretamente',
			'Tipicamente compõem 5-10% da sua suíte de testes',
			'Podem testar através de diferentes navegadores e dispositivos',
			'Podem envolver testes com ambientes reais ou de staging',
		],
	},
	{
		id: 10,
		type: 'code-example',
		title: 'Exemplo de Teste de Interface (Ponta a Ponta)',
		conceptTitle: '🖱️ Características do Teste de Interface:',
		concepts: [
			'Simula fluxos de trabalho e jornadas completas do usuário',
			'Testa interações e respostas da interface do usuário',
			'Verifica funcionalidade ponta a ponta através de todo o sistema',
			'Captura problemas de integração entre frontend e backend',
			'Testa cenários reais de usuário em ambientes similares à produção',
		],
		implementation:
			'Vamos simular uma aplicação de carrinho de compras onde usuários podem adicionar itens, atualizar quantidades, aplicar descontos e finalizar compra. Nosso teste de interface simulará a jornada completa do usuário desde navegar produtos até completar uma compra, testando toda a experiência do usuário incluindo autenticação, gerenciamento de carrinho e processamento de pagamento.',
		codeToTest: `// Simulação de carrinho de compras
let carrinho = [];
let estaLogado = false;
let usuarioAtual = null;
let codigoDesconto = null;

function adicionarAoCarrinho(item) {
  const itemExistente = carrinho.find(itemCarrinho => itemCarrinho.id === item.id);
  if (itemExistente) {
    itemExistente.quantidade += item.quantidade;
  } else {
    carrinho.push({ ...item });
  }
  return \`Adicionado \${item.nome} ao carrinho (Qtd: \${item.quantidade})\`;
}

function atualizarQuantidade(itemId, novaQuantidade) {
  const item = carrinho.find(itemCarrinho => itemCarrinho.id === itemId);
  if (!item) {
    return 'Item não encontrado no carrinho';
  }
  if (novaQuantidade <= 0) {
    carrinho = carrinho.filter(itemCarrinho => itemCarrinho.id !== itemId);
    return 'Item removido do carrinho';
  }
  item.quantidade = novaQuantidade;
  return 'Quantidade atualizada com sucesso';
}

function aplicarDesconto(codigo) {
  if (codigo === 'ECONOMIZE10') {
    codigoDesconto = { codigo: 'ECONOMIZE10', desconto: 0.1 };
    return 'Desconto aplicado: 10% de desconto';
  }
  return 'Código de desconto inválido';
}

function login(nomeUsuario, senha) {
  if (nomeUsuario === 'usuario@exemplo.com' && senha === 'senha123') {
    estaLogado = true;
    usuarioAtual = { email: nomeUsuario, nome: 'João Silva' };
    return 'Login realizado com sucesso';
  }
  return 'Credenciais inválidas';
}

function finalizarCompra() {
  if (!estaLogado) {
    return { sucesso: false, erro: 'Por favor, faça login primeiro' };
  }
  if (carrinho.length === 0) {
    return { sucesso: false, erro: 'Carrinho está vazio' };
  }
  
  let total = carrinho.reduce((soma, item) => soma + (item.preco * item.quantidade), 0);
  
  if (codigoDesconto) {
    total = total * (1 - codigoDesconto.desconto);
  }
  
  const itensCompra = [...carrinho];
  carrinho = []; // Limpar carrinho após finalização
  codigoDesconto = null;
  
  return {
    sucesso: true,
    idPedido: 'PED-' + Date.now(),
    itens: itensCompra,
    total: Math.round(total * 100) / 100,
    cliente: usuarioAtual
  };
}`,
		testCode: `// Teste de Interface (Ponta a Ponta) para fluxo de compras
function testarFluxoCompras() {
  // Resetar estado para teste limpo
  carrinho = [];
  estaLogado = false;
  usuarioAtual = null;
  codigoDesconto = null;
  
  console.log('🛒 Iniciando teste de fluxo de compras...');
  
  // Passo 1: Adicionar itens ao carrinho
  const notebook = { id: 1, nome: 'Notebook', preco: 2500, quantidade: 1 };
  const mouse = { id: 2, nome: 'Mouse Sem Fio', preco: 80, quantidade: 2 };
  const teclado = { id: 3, nome: 'Teclado Mecânico', preco: 350, quantidade: 1 };
  
  let resultado = adicionarAoCarrinho(notebook);
  if (!resultado.includes('Adicionado Notebook ao carrinho')) {
    throw new Error('Falha ao adicionar notebook ao carrinho');
  }
  
  resultado = adicionarAoCarrinho(mouse);
  if (!resultado.includes('Adicionado Mouse Sem Fio ao carrinho')) {
    throw new Error('Falha ao adicionar mouse ao carrinho');
  }
  
  resultado = adicionarAoCarrinho(teclado);
  if (!resultado.includes('Adicionado Teclado Mecânico ao carrinho')) {
    throw new Error('Falha ao adicionar teclado ao carrinho');
  }
  
  // Passo 2: Atualizar quantidades
  resultado = atualizarQuantidade(2, 3); // Mudar quantidade do mouse para 3
  if (resultado !== 'Quantidade atualizada com sucesso') {
    throw new Error('Falha ao atualizar quantidade do mouse');
  }
  
  // Passo 3: Aplicar código de desconto
  resultado = aplicarDesconto('ECONOMIZE10');
  if (!resultado.includes('Desconto aplicado')) {
    throw new Error('Falha ao aplicar código de desconto válido');
  }
  
  // Passo 4: Tentar código de desconto inválido
  resultado = aplicarDesconto('INVALIDO');
  if (!resultado.includes('Código de desconto inválido')) {
    throw new Error('Código de desconto inválido deveria ser rejeitado');
  }
  
  // Passo 5: Tentar finalizar sem login (deveria falhar)
  let resultadoCompra = finalizarCompra();
  if (resultadoCompra.sucesso) {
    throw new Error('Finalização deveria falhar sem login');
  }
  if (!resultadoCompra.erro.includes('Por favor, faça login primeiro')) {
    throw new Error('Mensagem de erro errada para finalização sem autenticação');
  }
  
  // Passo 6: Tentar login com credenciais inválidas
  resultado = login('email@errado.com', 'senhaerrada');
  if (resultado !== 'Credenciais inválidas') {
    throw new Error('Login inválido deveria ser rejeitado');
  }
  
  // Passo 7: Login com credenciais válidas
  resultado = login('usuario@exemplo.com', 'senha123');
  if (resultado !== 'Login realizado com sucesso') {
    throw new Error('Login válido falhou');
  }
  
  // Passo 8: Finalizar compra
  resultadoCompra = finalizarCompra();
  if (!resultadoCompra.sucesso) {
    throw new Error('Finalização falhou: ' + resultadoCompra.erro);
  }
  
  // Verificar detalhes do pedido
  const totalEsperado = (2500 + (80 * 3) + 350) * 0.9; // Com 10% de desconto
  if (Math.abs(resultadoCompra.total - totalEsperado) > 0.01) {
    throw new Error(\`Total incorreto: esperado \${totalEsperado}, obtido \${resultadoCompra.total}\`);
  }
  
  if (resultadoCompra.itens.length !== 3) {
    throw new Error('Número incorreto de itens no pedido');
  }
  
  if (resultadoCompra.cliente.email !== 'usuario@exemplo.com') {
    throw new Error('Informações incorretas do cliente');
  }
  
  // Passo 9: Verificar se carrinho está vazio após finalização
  if (carrinho.length !== 0) {
    throw new Error('Carrinho deveria estar vazio após finalização');
  }
  
  // Passo 10: Tentar finalizar com carrinho vazio
  resultadoCompra = finalizarCompra();
  if (resultadoCompra.sucesso) {
    throw new Error('Finalização deveria falhar com carrinho vazio');
  }
  
  console.log('✓ Teste de Interface (Ponta a Ponta) passou!');
  console.log(\`✓ Pedido \${resultadoCompra.idPedido || 'N/A'} processado com sucesso\`);
}

testarFluxoCompras();`,
	},
	{
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
						description: 'Execute testes frequentemente e automaticamente',
						details: [
							'Integre testes no seu pipeline de CI/CD',
							'Execute testes antes de fazer commit do código',
							'Configure execução automática de testes em mudanças de código',
						],
					},
				],
			},
		],
	},
	{
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
	},
	{
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
	},
	{
		id: 14,
		type: 'practice',
		title: 'Prática Hands-On',
		exercises: [
			{
				title: 'Exercício 1: Desafio de Teste Unitário',
				description:
					'Escreva testes unitários abrangentes para uma função de validação de senha. Teste diferentes cenários incluindo casos extremos e condições de erro:',
				code: `function validarSenha(senha) {
  if (!senha) return { valida: false, erro: 'Senha obrigatória' };
  if (senha.length < 8) return { valida: false, erro: 'Senha muito curta' };
  if (!/[A-Z]/.test(senha)) return { valida: false, erro: 'Precisa de letra maiúscula' };
  if (!/[a-z]/.test(senha)) return { valida: false, erro: 'Precisa de letra minúscula' };
  if (!/[0-9]/.test(senha)) return { valida: false, erro: 'Precisa de número' };
  if (!/[!@#$%^&*]/.test(senha)) return { valida: false, erro: 'Precisa de caractere especial' };
  return { valida: true, mensagem: 'Senha é válida' };
}

// Seus testes unitários aqui:
function testarValidacaoSenha() {
  // Teste 1: Senha vazia/nula
  // Teste 2: Senha muito curta (< 8 caracteres)
  // Teste 3: Faltando letra maiúscula
  // Teste 4: Faltando letra minúscula
  // Teste 5: Faltando número
  // Teste 6: Faltando caractere especial
  // Teste 7: Senha válida com todos os requisitos
  // Adicione seus casos de teste abrangentes aqui!
}`,
			},
			{
				title: 'Exercício 2: Desafio de Teste de Integração',
				description:
					'Crie um teste de integração para um sistema de posts de blog que valida, salva e notifica assinantes:',
				code: `const posts = [];
const assinantes = ['usuario1@exemplo.com', 'usuario2@exemplo.com'];

function validarPost(post) {
  if (!post.titulo || post.titulo.length < 5) return { valido: false, erro: 'Título muito curto' };
  if (!post.conteudo || post.conteudo.length < 50) return { valido: false, erro: 'Conteúdo muito curto' };
  if (!post.autor || post.autor.length < 2) return { valido: false, erro: 'Autor obrigatório' };
  return { valido: true };
}

function salvarPost(post) {
  const novoPost = { 
    id: posts.length + 1, 
    ...post, 
    criadoEm: new Date().toISOString(),
    publicado: true
  };
  posts.push(novoPost);
  return novoPost;
}

function notificarAssinantes(post) {
  const notificacoes = assinantes.map(email => ({
    email,
    assunto: \`Novo post: \${post.titulo}\`,
    enviado: true
  }));
  return \`Notificados \${assinantes.length} assinantes sobre: \${post.titulo}\`;
}

function publicarPost(dadosPost) {
  const validacao = validarPost(dadosPost);
  if (!validacao.valido) return { sucesso: false, erro: validacao.erro };
  
  const post = salvarPost(dadosPost);
  const notificacao = notificarAssinantes(post);
  
  return { sucesso: true, post, notificacao };
}

// Seu teste de integração aqui - teste o fluxo completo!`,
			},
			{
				title: 'Exercício 3: Desafio de Teste de Interface',
				description:
					'Escreva um teste de interface abrangente para uma aplicação de lista de tarefas que cobre o fluxo completo do usuário:',
				code: `let tarefas = [];
let proximoId = 1;
let filtro = 'todas'; // 'todas', 'ativas', 'concluidas'

function adicionarTarefa(texto) {
  if (!texto || !texto.trim()) return { sucesso: false, erro: 'Não é possível adicionar tarefa vazia' };
  const tarefa = { id: proximoId++, texto: texto.trim(), concluida: false, criadaEm: new Date() };
  tarefas.push(tarefa);
  return { sucesso: true, mensagem: \`Adicionada: \${tarefa.texto}\`, tarefa };
}

function alternarTarefa(id) {
  const tarefa = tarefas.find(t => t.id === id);
  if (!tarefa) return { sucesso: false, erro: 'Tarefa não encontrada' };
  tarefa.concluida = !tarefa.concluida;
  return { sucesso: true, mensagem: \`\${tarefa.concluida ? 'Concluída' : 'Não concluída'}: \${tarefa.texto}\` };
}

function excluirTarefa(id) {
  const indice = tarefas.findIndex(t => t.id === id);
  if (indice === -1) return { sucesso: false, erro: 'Tarefa não encontrada' };
  const excluida = tarefas.splice(indice, 1)[0];
  return { sucesso: true, mensagem: \`Excluída: \${excluida.texto}\` };
}

function definirFiltro(novoFiltro) {
  if (!['todas', 'ativas', 'concluidas'].includes(novoFiltro)) {
    return { sucesso: false, erro: 'Filtro inválido' };
  }
  filtro = novoFiltro;
  return { sucesso: true, mensagem: \`Filtro definido para: \${filtro}\` };
}

function obterTarefasFiltradas() {
  switch (filtro) {
    case 'ativas': return tarefas.filter(t => !t.concluida);
    case 'concluidas': return tarefas.filter(t => t.concluida);
    default: return tarefas;
  }
}

// Teste o fluxo completo do usuário: adicionar, alternar, filtrar, excluir!`,
			},
		],
	},
	{
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
				features: ['Testes unitários', 'Testes de integração', 'Testes de API'],
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
	},
	{
		id: 16,
		type: 'qa',
		title: 'Perguntas e Discussão',
		questions: [
			{
				icon: '🤔',
				title: 'Entendimento',
				text: 'Qual parte dos testes automatizados foi mais confusa? Vamos esclarecer juntos!',
			},
			{
				icon: '⚡',
				title: 'Valor Prático',
				text: 'Qual tipo de teste (Unitário, Integração, Interface) parece mais útil para seus projetos atuais?',
			},
			{
				icon: '🔄',
				title: 'Implementação',
				text: 'Quais desafios você antecipa ao implementar testes automatizados no seu fluxo de trabalho?',
			},
			{
				icon: '🚀',
				title: 'Próximos Passos',
				text: 'Quais ferramentas ou frameworks de teste você gostaria de aprender a seguir?',
			},
			{
				icon: '💡',
				title: 'Melhores Práticas',
				text: 'Quais melhores práticas de teste da sessão de hoje você implementará primeiro?',
			},
			{
				icon: '🎯',
				title: 'Aplicação no Mundo Real',
				text: 'Como você pode aplicar esses conceitos de teste aos seus projetos atuais ou futuros?',
			},
		],
	},
]
