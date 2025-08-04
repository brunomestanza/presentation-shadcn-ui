import { PyramidSlide } from '@/components/slides/pyramid-slide'

export default function Home() {
	return (
		<div>
			<PyramidSlide
				data={{
					id: 4,
					type: 'pyramid',
					title: 'A Pirâmide de Testes',
					imageUrl: '/test-pyramid.png',
				}}
			/>
		</div>
	)
}
