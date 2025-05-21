const SynonymsAndAntonyms = ({ indicator, arr }) => {
	return (
		<div>
			<p>{indicator}</p>
			<p>
				{arr.map((word, index) => {
					return <span key={index}>{word}</span>;
				})}
			</p>
		</div>
	);
};

export default SynonymsAndAntonyms;
