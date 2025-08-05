import { FileCode } from 'lucide-react'
import { CodeEditor } from '@/components/ui/code-editor'

interface TripleCodeBlockProps {
	implementation: string
	codeToTest: string
	testCode: string
	language?: string
}

export function TripleCodeBlock({
	implementation,
	codeToTest,
	testCode,
}: TripleCodeBlockProps) {
	return (
		<div className="flex flex-col gap-10 w-full max-w-full">
			{/* Implementation Section */}
			<div className="mx-auto w-full max-w-[54%]">
				<h3 className="text-white mb-4 text-base md:text-lg lg:text-xl">
					Exemplo:
				</h3>
				<div className="flex justify-between items-center mb-2 flex-wrap gap-2">
					<span className="text-xs md:text-sm font-medium text-emerald-500 uppercase tracking-wide">
						Implementação
					</span>
				</div>
				<div className="bg-zinc-900 border rounded p-4 border-l-4 border-emerald-500  box-border">
					<p className="text-gray-200 leading-relaxed m-0 text-sm md:text-base break-words">
						{implementation}
					</p>
				</div>
			</div>

			<div className="mx-auto flex gap-10">
				{/* Code Section */}
				<div className="w-full max-w-full">
					<div className="flex justify-between items-center mb-2 flex-wrap gap-2">
						<span className="text-xs md:text-sm font-medium text-emerald-500 uppercase tracking-wide">
							Código
						</span>
					</div>
					<CodeEditor
						cursor
						writing={false}
						className="w-[640px] h-[620px] mx-auto"
						lang="javascript"
						title="code-to-test.js"
						icon={<FileCode />}
						duration={10}
						delay={1}
						copyButton
						themes={{
							light: 'vitesse-light',
							dark: 'vitesse-dark',
						}}
					>
						{codeToTest}
					</CodeEditor>
				</div>

				{/* Test Section */}
				<div className="w-full max-w-full">
					<div className="flex justify-between items-center mb-2 flex-wrap gap-2">
						<span className="text-xs md:text-sm font-medium text-emerald-500 uppercase tracking-wide">
							Teste
						</span>
					</div>
					<CodeEditor
						cursor
						writing={false}
						className="w-[640px] h-[620px] mx-auto"
						lang="javascript"
						title="testing-code.js"
						icon={<FileCode />}
						duration={10}
						delay={1}
						copyButton
						themes={{
							light: 'vitesse-light',
							dark: 'vitesse-dark',
						}}
					>
						{testCode}
					</CodeEditor>
				</div>
			</div>
		</div>
	)
}
