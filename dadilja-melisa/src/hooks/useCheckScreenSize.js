import { useEffect } from "react";

const useCheckScreenSize = (minWidth, maxWidth, trackState) => {
	useEffect(() => {
		const handleWindowResize = () => {
			if (window.innerWidth >= minWidth && window.innerWidth <= maxWidth) {
				trackState(true);
			} else {
				trackState(false);
			}
		};

		handleWindowResize(); // Check initial window size

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);
};

export default useCheckScreenSize;
