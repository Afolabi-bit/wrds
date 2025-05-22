import PageBreak from "../../public/assets/images/page-break.svg";
import Oval from "../../public/assets/images/Oval.svg";

function SynonymsAndAntonyms({ indicator, arr }) {
	return (
		<div>
			<p className="inline-block text-[16px] leading-[19px] text-white4 mr-[24px]">
				{indicator}
			</p>
			<p className="inline-flex flex-wrap">
				{arr.map((item, index) => {
					return (
						<span
							className="font-bold text-[16px] leading-[19px] text-myPurple "
							key={index}
						>{`${arr.length - 1 !== index ? `${item}, ` : `${item}`}`}</span>
					);
				})}
			</p>
		</div>
	);
}

function Meaning({ definition }) {
	return (
		<div>
			<div className="flex items-start gap-[20px] mb-[13px]  ">
				<img
					className="translate-y-[8px]"
					src={Oval}
					alt=""
				/>
				<div>
					<p className="text-black3 text-[15px] leading-[24px] ">
						{definition.definition}
					</p>
					{definition.synonyms.length !== 0 && (
						<SynonymsAndAntonyms
							indicator={"Synonyms"}
							arr={definition.synonyms}
						/>
					)}
					{definition.antonyms.length !== 0 && (
						<SynonymsAndAntonyms
							indicator={"Antonyms"}
							arr={definition.antonyms}
						/>
					)}
					{definition.example && (
						<p className="font-normal text-[15px] leading-[24px] text-white4 pt-[13px]  ">{`"${definition.example}"`}</p>
					)}
				</div>
			</div>
		</div>
	);
}

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
			<>
				<p className="font-normal text-[16px] leading-[20px] text-white4 mb-[16px] ">
					Meaning
				</p>
				<>
					{word.definitions.map((definition, index) => {
						definition.synonyms;
						return (
							<Meaning
								definition={definition}
								key={index}
							/>
						);
					})}
				</>
				{word.synonyms.length !== 0 && (
					<SynonymsAndAntonyms
						indicator={"Synonyms"}
						arr={word.synonyms}
					/>
				)}
				{word.antonyms.length !== 0 && (
					<SynonymsAndAntonyms
						indicator={"Antonyms"}
						arr={word.synonyms}
					/>
				)}
			</>
		</article>
	);
}

export default WordMeaning;
