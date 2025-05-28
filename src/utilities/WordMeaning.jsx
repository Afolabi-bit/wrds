import PageBreak from "/assets/images/page-break.svg";
import Oval from "/assets/images/Oval.svg";
import PageBreakMd from "/assets/images/pagebreak-md.svg";

function SynonymsAndAntonyms({ indicator, arr }) {
	return (
		<div className="flex items-start mb-[10px]">
			<p className="inline-block text-[16px] leading-[19px] text-white4 mr-[24px] md:text-[20px] md:leading-[24px] lg:leading-[26px] ">
				{indicator}
			</p>
			<p className="inline-flex flex-wrap">
				{arr.map((item, index) => {
					return (
						<span
							className="font-bold text-[16px] leading-[19px] text-myPurple mr-[5px] md:text-[20px] md:leading-[24px] lg:leading-[26px] "
							key={index}
						>
							{item}
							{index !== arr.length - 1 && ", "}
						</span>
					);
				})}
			</p>
		</div>
	);
}

function Meaning({ definition }) {
	return (
		<div className="flex items-start gap-[20px] mb-[13px]  ">
			<img
				className="translate-y-[8px]"
				src={Oval}
				alt=""
			/>
			<div>
				<p className="text-black3 dark:text-white1 text-[15px] leading-[24px] md:text-[18px]  ">
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
					<p className="font-normal text-[15px] leading-[24px] text-white4 pt-[13px] md:text-[18px]  ">{`"${definition.example}"`}</p>
				)}
			</div>
		</div>
	);
}

function WordMeaning({ word }) {
	return (
		<article>
			<div className="flex gap-[11px] mt-[28px] mb-[31px]">
				<p className="text-[18px] font-[700] italic leading-[23px] text-black3 dark:text-white1 md:text-[24px] md:leading-[29px] ">
					{word.partOfSpeech}
				</p>
				<img
					className="md:hidden"
					src={PageBreak}
					alt="line"
				/>
				<img
					className="hidden md:block "
					src={PageBreakMd}
					alt="line"
				/>
			</div>
			<>
				<p className="font-normal text-[16px] leading-[20px] text-white4 dark:text-white4 mb-[16px] md:text-[20px] md:leading-[24px] lg:leading-[26px] ">
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
						arr={word.antonyms}
					/>
				)}
			</>
		</article>
	);
}

export default WordMeaning;
