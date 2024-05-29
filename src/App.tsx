import BackgroundImage from "./components/BackgroundImage";
import TerminalBox from "./components/TerminalBox";

export default function App() {
	return (
		<>
			<div className="h-screen w-full flex justify-center items-center font-josefin">
				<div className="w-full">
					<div className="block sm:hidden mb-10 bg-red-200 py-3  text-center text-xl text-gray-700">
						<p>This is designed for mobile view yet !!</p>
					</div>
					<div className="hidden sm:block">
						<TerminalBox />
					</div>
				</div>
			</div>
			<BackgroundImage />
		</>
	);
}
