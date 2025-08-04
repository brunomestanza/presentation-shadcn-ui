'use client'

import { Github, Globe, Linkedin, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import type { SlideData } from '@/types/slide-types'
import { Button } from '../ui/button'

interface PresenterSlideProps {
	data: SlideData
}

export function PresenterSlide({ data }: PresenterSlideProps) {
	const [isAnimated, setIsAnimated] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => setIsAnimated(true), 300)
		return () => clearTimeout(timer)
	}, [])

	const handleSocialClick = (url: string) => {
		window.open(url, '_blank', 'noopener,noreferrer')
	}

	if (!data.presenter) return null

	const {
		name,
		role,
		company,
		bio,
		imageUrl,
		linkedin,
		github,
		email,
		website,
		achievements,
		expertise,
	} = data.presenter

	return (
		<div className="min-h-[400px] w-full">
			<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 text-center break-words">
				{data.title}
			</h1>

			<div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full max-w-6xl mx-auto">
				{/* Left Side - Profile Image and Basic Info */}
				<div
					className={`
          flex flex-col items-center lg:items-start lg:flex-[0_0_35%] 
          opacity-0 translate-y-8 transition-all duration-700 ease-out
          ${isAnimated ? 'opacity-100 translate-y-0' : ''}
        `}
				>
					{/* Profile Image */}
					<div className="relative mb-6">
						<div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary shadow-2xl shadow-primary/20">
							<Image
								width={460}
								height={460}
								src={imageUrl}
								alt={`${name} - ${role}`}
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="absolute -bottom-2 -right-2 bg-primary px-3 py-1 rounded-full text-sm font-semibold">
							Palestrante
						</div>
					</div>

					{/* Name and Role */}
					<div className="text-center lg:text-left mb-6">
						<h2 className="text-2xl md:text-3xl font-bold text-white mb-2 break-words">
							{name}
						</h2>
						<p className="text-lg md:text-xl text-primary font-semibold mb-1 break-words">
							{role}
						</p>
						<p className="text-base md:text-lg text-zinc-400 flex items-center justify-center lg:justify-start gap-2 break-words">
							<MapPin size={16} className="flex-shrink-0" />
							{company}
						</p>
					</div>

					{/* Social Links */}
					<div className="flex gap-4 mb-6">
						{linkedin && (
							<Button
								onClick={() => handleSocialClick(linkedin)}
								className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
								title="LinkedIn"
							>
								<Linkedin size={20} />
								<span className="hidden sm:inline">LinkedIn</span>
							</Button>
						)}
						{github && (
							<Button
								onClick={() => handleSocialClick(github)}
								className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
								title="GitHub"
							>
								<Github size={20} />
								<span className="hidden sm:inline">GitHub</span>
							</Button>
						)}
						{email && (
							<Button
								onClick={() => handleSocialClick(`mailto:${email}`)}
								className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
								title="Email"
							>
								<Mail size={20} />
								<span className="hidden sm:inline">Email</span>
							</Button>
						)}
						{website && (
							<Button
								onClick={() => handleSocialClick(website)}
								className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
								title="Website"
							>
								<Globe size={20} />
								<span className="hidden sm:inline">Site</span>
							</Button>
						)}
					</div>
				</div>

				{/* Right Side - Detailed Information */}
				<div
					className={`
          flex-1 opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300
          ${isAnimated ? 'opacity-100 translate-y-0' : ''}
        `}
				>
					{/* Bio Section */}
					<div className="bg-zinc-900 p-6 md:p-8 rounded-lg border-l-4 border-emerald-500 mb-6">
						<h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
							<span>👨‍💻</span>
							Sobre o Palestrante
						</h3>
						<p className="text-zinc-300 leading-relaxed text-sm md:text-base break-words">
							{bio}
						</p>
					</div>

					{/* Expertise Section */}
					{expertise && expertise.length > 0 && (
						<div className="bg-zinc-900 p-6 md:p-8 rounded-lg border-l-4 border-blue-500 mb-6">
							<h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
								<span>🚀</span>
								Áreas de Especialização
							</h3>
							<div className="flex flex-wrap gap-2">
								{expertise.map((skill) => (
									<span
										key={skill}
										className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					)}

					{/* Achievements Section */}
					{achievements && achievements.length > 0 && (
						<div className="bg-zinc-900 p-6 md:p-8 rounded-lg border-l-4 border-amber-500">
							<h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
								<span>🏆</span>
								Conquistas e Experiência
							</h3>
							<ul className="space-y-3">
								{achievements.map((achievement) => (
									<li
										key={achievement}
										className="text-zinc-300 text-sm md:text-base leading-relaxed flex items gap-3 break-words"
									>
										<span className="text-amber-500 font-bold flex-shrink-0">
											•
										</span>
										<span>{achievement}</span>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>

			{/* Bottom Call to Action */}
			<div
				className={`
        mt-8 text-center opacity-0 translate-y-8 transition-all duration-700 ease-out delay-500
        ${isAnimated ? 'opacity-100 translate-y-0' : ''}
      `}
			>
				<div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-lg p-6 max-w-2xl mx-auto">
					<h3 className="text-lg md:text-xl font-bold text-white mb-2">
						🤝 Vamos nos conectar!
					</h3>
					<p className="text-zinc-400 text-sm md:text-base">
						Sinta-se à vontade para fazer perguntas durante a apresentação ou me
						conectar nas redes sociais para continuar a conversa sobre testes
						automatizados.
					</p>
				</div>
			</div>
		</div>
	)
}
