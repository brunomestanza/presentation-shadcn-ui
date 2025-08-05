import { PracticeSlide } from '@/components/slides/pratice-slide'
import { QuizSlide } from '@/components/slides/quiz-slide'

export default function Home() {
	return (
		<div className="p-4">
			<PracticeSlide
				data={{
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
				}}
			/>
		</div>
	)
}
