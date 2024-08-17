import { useDispatch, useSelector } from "react-redux"
import { createNewArticle } from "../services/articles"
import { logo, logoSvg, sideBarSvg } from "../assets"
import URLInput from "./URLInput"

const Hero = ({ onMenuClick }) => {
	const dispatch = useDispatch()
	const article = useSelector((state) => state.articles.currentArticle)[0]
	return (
		<div className="w-full h-full p-4 bg-[#F5F5F5] lg:rounded-2xl">
			<div className="max-w-screen-sm mx-auto h-full flex flex-col items-center justify-end">

				<div className="w-full pb-8 flex items-center justify-between  bg-[#F5F5F5]">
					<img src={logoSvg} alt="Lynix" className="w-24 cursor-pointer" onClick={() => { dispatch(createNewArticle()) }} />
					<img src={sideBarSvg} alt="=" className="w-6 cursor-pointer xl:hidden" onClick={onMenuClick} />
				</div>

				{
					article ? (
						<div className="w-full flex-1 pb-12 flex flex-col gap-2 overflow-y-scroll no-scrollbar">
							<div className="w-full flex gap-4 items-center">
								<img src={logo} alt="Lynix" className="w-8 lg:w-10" />
								<p className="text-3xl md:text-2xl font-medium">{article?.title}</p>
							</div>
							<p className="w-full h-max pl-12 lg:pl-14 text-lg text-black-500">{article?.summary}</p>
						</div>
					) : (
						<div className="w-full flex-1 flex flex-col gap-6 items-center justify-center text-center">
							<img src={logo} alt="Lynix" className="w-14 md:w-20 md:mb-6" />
							<h1 className="text-3xl md:text-5xl font-extrabold">Enhance you Reading with <br /> <span className="gradient_text">Lynix </span></h1>
							<p className="md:w-[80%] text-sm md:text-base text-black-500">Streamline your reading with Lynix—an innovative, open-source tool that converts extensive articles into precise summaries.</p>
						</div>
					)
				}

				<URLInput />

			</div>
		</div>
	)
}

export default Hero