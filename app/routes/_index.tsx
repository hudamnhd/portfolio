import { Button, buttonVariants } from "#app/components/ui/button";
import { Link } from "react-router";
import { cn } from "#app/utils/misc";
import { Theme, useTheme } from "remix-themes";

function ThemeSwitch() {
	const [theme, setTheme] = useTheme();

	const nextMode = theme === "light" ? "dark" : "light";
	const modeLabel = {
		light: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="lucide lucide-sun"
			>
				<circle cx="12" cy="12" r="4" />
				<path d="M12 2v2" />
				<path d="M12 20v2" />
				<path d="m4.93 4.93 1.41 1.41" />
				<path d="m17.66 17.66 1.41 1.41" />
				<path d="M2 12h2" />
				<path d="M20 12h2" />
				<path d="m6.34 17.66-1.41 1.41" />
				<path d="m19.07 4.93-1.41 1.41" />
			</svg>
		),
		dark: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="lucide lucide-moon"
			>
				<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
			</svg>
		),
	};

	return (
		<>
			{theme && (
				<Button
					onClick={() => setTheme(nextMode as Theme)}
					title="Change theme"
					variant="ghost"
					size="icon"
				>
					{modeLabel[theme]}
				</Button>
			)}
		</>
	);
}

const RouteIndex = () => {
	return (
		<main className="relative flex min-h-screen flex-col py-4 md:py-6 mx-auto w-fit">
			<nav className="container sticky top-0 z-50 mb-1 flex w-full max-w-4xl items-center justify-between  py-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<Link
					to="/"
					className="text-md flex items-center space-x-2 font-medium tracking-tight opacity-80 transition-opacity duration-150 hover:opacity-100"
				>
					<span>huda</span>
				</Link>
				<div className="flex items-center space-x-1">
					<Link
						className={cn(
							buttonVariants({ size: "icon", variant: "ghost" }),
							"",
						)}
						to="https://www.linkedin.com/in/pheralb"
						title="LinkedIn"
						target="_blank"
					>
						<svg
							width={24}
							height={18}
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="xMidYMid"
							viewBox="0 0 256 256"
						>
							<path
								d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
								fill="currentColor"
							/>
						</svg>
					</Link>
					<Link
						className={cn(
							buttonVariants({ size: "icon", variant: "ghost" }),
							"",
						)}
						to="https://twitter.com/hudamnhd"
						title="Twitter"
						target="_blank"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={24}
							height={18}
							fill="none"
							viewBox="0 0 1200 1227"
						>
							<path
								fill="currentColor"
								d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
							/>
						</svg>
					</Link>
					<Link
						className={cn(
							buttonVariants({ size: "icon", variant: "ghost" }),
							"",
						)}
						to="https://github.com/hudamnhd"
						title="GitHub"
						target="_blank"
					>
						<svg
							viewBox="0 0 256 250"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="xMidYMid"
							width={24}
							height={18}
						>
							<path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
						</svg>
					</Link>
					<ThemeSwitch />
				</div>
			</nav>
			{/**/}{" "}
			<div className="container max-w-4xl flex-1">
				{/**/}
				<div className="grid items-center gap-14 py-4 md:py-4">
					<section className="delay-0 duration-500 animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards">
						<article className="py-4">
							<p className="leading-loose break-words max-w-3xl">
								I'm <span className="font-bold tracking-tight">Huda</span>, a
								front-end web developer specializing in building seamless web
								apps and websites using TailwindCSS and React. With a passion
								for crafting intuitive interfaces and scalable solutions, I aim
								to deliver impactful digital experiences that provide real
								value.
							</p>
						</article>
					</section>
					{/**/}{" "}
				</div>
				{/**/}
				{/**/}
			</div>{" "}
			<footer className="container mt-10 flex max-w-4xl flex-col items-center justify-center space-y-1 md:flex-row md:justify-between md:space-y-0">
				<p className="text-sm md:text-md">✨ Building amazing things</p>{" "}
				<div className="flex items-center space-x-1 text-sm md:text-md">
					<h2>Huda</h2> <span className="text-muted-foreground">-</span>{" "}
					<p>2025</p>
				</div>
			</footer>
		</main>
	);
};

export default RouteIndex;
