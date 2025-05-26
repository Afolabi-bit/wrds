import Emoji from "/assets/images/emoji.png";

const NotFound = () => {
	return (
		<div className="w-full text-center pt-[100px] md:pt-[82px] md:px-[50px] pb-[85px] md:pb-[118px] ">
			<img
				className="w-[64px] h-[64px] mx-auto mb-[30px] md:mb-[69px] "
				src={Emoji}
				alt="Emoji"
			/>
			<h2 className="font-bold text-center text-[16px] leading-[24px] text-black3 mb-[13px] md:mb-[24px] md:text-[20px] dark:text-white">
				No Definitions Found
			</h2>
			<p className="font-normal text-center text-[14px] leading-[24px] md:text-[20px] dark:text-white4 ">
				Sorry pal, we couldn't find definitions for the word you were looking
				for. You can try the search again at later time or head to the web
				instead.
			</p>
		</div>
	);
};

export default NotFound;
