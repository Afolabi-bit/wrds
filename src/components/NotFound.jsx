import Emoji from "../../public/assets/images/emoji.svg";

const NotFound = () => {
	return (
		<div className="w-full">
			<img
				src={Emoji}
				alt="Emoji"
			/>
			<h2>No Definitions Found</h2>
			<p>
				Sorry pal, we couldn't find definitions for the word you were looking
				for. You can try the search again at later time or head to the web
				instead.
			</p>
		</div>
	);
};

export default NotFound;
