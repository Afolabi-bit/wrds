import PageBreak from "../../public/assets/images/page-break.svg";
import Oval from "../../public/assets/images/Oval.svg";
import SynonymsAndAntonyms from "./SynonymsAndAntonyms";

function WordMeaning({ word }) {
	return (
		<article>
			<div className="flex gap-[11px] mt-[28px] mb-[31px]">
				<p className="text-[18px] font-[700] leading-[23px] text-black3 ">
					{word.partOfSpeech}
				</p>
				<img
					src={PageBreak}
					alt="line"
				/>
			</div>
			<div>
				<p className="font-normal text-[16px] leading-[20px] text-white4 mb-[16px] ">
					Meaning
				</p>
				<div>
					{word.definitions.map((definition, index) => {
						definition.synonyms;
						return (
							<div key={index}>
								<div className="flex items-start gap-[20px] mb-[13px]  ">
									<img
										className="translate-y-[8px]"
										src={Oval}
										alt=""
									/>
									<p className="text-black3 text-[15px] leading-[24px] ">
										{definition.definition}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</article>
	);
}

export default WordMeaning;
