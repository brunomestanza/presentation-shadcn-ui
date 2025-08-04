import { PresenterSlide } from '@/components/slides/presenter-slide'

export default function Home() {
	return (
		<div>
			<PresenterSlide
				data={{
					id: 2,
					type: 'presenter',
					title: 'Quem está apresentando?',
					presenter: {
						name: 'Bruno Mestanza',
						role: 'Developer Instructor',
						company: 'Rocketseat',
						bio: `Desenvolvedor apaixonado por educação e produto com mais de ${10} anos de experiência em desenvolvimento web. Especialista em JavaScript, React, Next JS, Node.js, produto e Design.`,
						imageUrl: 'http://github.com/brunomestanza.png',
						linkedin: 'https://www.linkedin.com/in/brunomestanza',
						github: 'http://github.com/brunomestanza',
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
							`Mais de ${10} anos de experiência em desenvolvimento FullStack e Mobile`,
							'Mentor e educador de tecnologia e inovação',
							'Entusiasta de Design e desenvolvimento de produtos digitais',
							'Pós Graduado em desenvolvimento FullStack',
						],
					},
				}}
			/>
		</div>
	)
}
