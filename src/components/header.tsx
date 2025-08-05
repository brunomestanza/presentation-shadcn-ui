import Image from 'next/image'

export function Header() {
	return (
		<header className="fixed h-fit w-full">
			<div className="border-b border-foreground/20 w-full px-4">
				<Image
					width={52}
					height={52}
					src="/rocketseat-logo.png"
					alt=""
					className="m-4"
				/>
			</div>
		</header>
	)
}
