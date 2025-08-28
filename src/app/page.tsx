import Carousel from "@/components/carousel";
import CarouselPullup from "@/components/carousel-pullup";
import Image from "next/image";

export default function Home() {
	return (
		<div className="w-full flex md:flex-row flex-col items-start max-w-4xl">
			<div className="md:sticky top-0 flex flex-col items-start w-full md:max-w-[362px] px-4 pt-12 pb-6 md:border-none border-b border-[#CACACA]">
				<div className="size-[140px] rounded-full overflow-hidden bg-[#CBCBCB]">
					<Image
						src="/pfp.png"
						alt="Profile Picture"
						width={140}
						height={140}
						className="rounded-full"
					/>
				</div>
				<h1 className="text-base font-sans tracking-tighter font-semibold leading-none mb-5 mt-6">Vinny Frigatti</h1>
				<p className="text-sm leading-[140%] text-balance text-[#818181]">Seasoned engineer with a passion for building consumer products and tinkering with new technologies. Capable of taking products from concept to production serving thousands of users. Thrives in fast paced, ever changing environment. Crypto trader/investor.</p>
				<div className="flex items-end gap-3 mt-6">
					<a href="https://www.linkedin.com/in/vinicius-frigatti/" className="text-[#818181] hover:text-[#0a66c2]">
						<svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
							<path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z" fill="currentColor"></path>
						</svg>
					</a>
				</div>
				<p className="text-xs hidden md:block text-[#C9C9C9] mt-5">© All rights reserved.</p>
			</div>
			<div className="flex-1 flex flex-col items-start min-h-screen border-l border-[#CACACA] px-4 pt-12 pb-6">
				<div className="flex items-start flex-col gap-3">
					<div className="flex items-center gap-2 text-xs font-semibold">
						<p>2023</p>
						<p className="text-[#0068D6]">Co-Founder & Chief Technology Officer</p>
					</div>
					<h2 className="text-2xl font-semibold tracking-tighter">Watches.io <span className="text-xs tracking-normal text-[#818181]">(rebranding ongoing)</span></h2>
					<p className="text-sm font-medium leading-[150%]">Watches.io is a tokenized watch trading marketplace (similar to Ebay) with blockchain-based components like NFT’s, payments, and smart contract escrow. The platform also hosts an on-chain collateralized lending protocol enabling users to lend against their watch value and analytics product for tracking the watch market. I led and largely developed the platform from scratch, end-to-end.</p>
					<Carousel />
				</div>

				<div className="w-full border-b border-[#CACACA] my-6" />

				<div className="flex items-start flex-col gap-3">
					<div className="flex items-center gap-2 text-xs font-semibold">
						<p>2017-2023</p>
						<p className="text-[#0068D6]">[Senior] Software Engineer</p>
					</div>
					<h2 className="text-2xl font-semibold tracking-tighter">Prudential Financial</h2>
					<p className="text-sm font-medium leading-[150%]">Developed inner workings of annuities/life insurance compensation systems paying 7 figure premiums and doing 150K+ transactions daily. Also contributed to building web application used by internal operations team. Led development initiatives around monolith to microservices migration, Kafka real-time data streaming, and flat file transfers to realtime API migrations.</p>
				</div>


				<div className="w-full border-b border-[#CACACA] my-6" />

				<p className="text-xl font-semibold text-[#818181] mb-6">Projects</p>

				<div className="flex items-start flex-col gap-3">
					<div className="flex items-center gap-2 text-xs font-semibold">
						<p>2017</p>
						<p className="text-[#0068D6]">Co-Founder</p>
					</div>
					<h2 className="text-2xl font-semibold tracking-tighter">pullup</h2>
					<p className="text-sm font-medium leading-[150%]">Pullup is a mobile app P2P marketplace connecting drivers to street parking spots. it enables anyone to sell a parking spot they&apos;re in and those looking for a spot can buy it. Design from scratch and built with Swift for iOS.</p>
					<CarouselPullup />
				</div>

				<div className="w-full border-b border-[#CACACA] my-6" />

				<div className="flex items-start flex-col gap-3">
					<div className="flex items-center gap-2 text-xs font-semibold">
						<p>2019</p>
						{/* <p className="text-[#0068D6]">Co-Founder</p> */}
					</div>
					<h2 className="text-2xl font-semibold tracking-tighter">Ethereum Mining Operation</h2>
					<p className="text-sm font-medium leading-[150%]">Managed and optimized an Ethereum mining operation, overseeing hardware setup, configuration, and maintenance of mining rigs to maximize hash rate and energy efficiency. Operational from 2019-2021.</p>
				</div>

				<p className="text-xs md:hidden block text-[#C9C9C9] mt-5">© All rights reserved.</p>
			</div>
		</div>
	);
}
