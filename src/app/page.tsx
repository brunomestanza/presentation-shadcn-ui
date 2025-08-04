import { TitleSlide } from '@/components/slides/title-slide'

export default function Home() {
	return (
		<div>
			<TitleSlide
				data={{
					id: 1,
					type: 'title',
					title: 'Introdução aos Testes Automatizados',
					subtitle: 'Entendendo testes através de exemplos simples e práticos',
				}}
			/>
		</div>
	)
}
