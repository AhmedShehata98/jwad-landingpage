import { getPortfolio } from "@/services/api";
import PortfolioList from "@/components/PortfolioList";

const Portfolio = async () => {
  const portfolioSection = await getPortfolio();

  return (
    <section className="w-full min-h-screen hidden md:flex flex-col items-center justify-center py-20">
      <div className="app-container flex flex-col items-center justify-center pb-6 max-lg:pb-10 bg-[#181818] rounded-3xl">
        <div className="w-1/2 max-lg:w-full flex flex-col items-center justify-center px-6 py-12">
          <h2 className="text-5xl font-bold text-[#FCFCFF] leading-[72px] text-center">
            {portfolioSection.data.attributes.heading}
          </h2>
          <p className="text-[#B6B7C2] font-normal text-sm text-center">
            {portfolioSection.data.attributes.subheading}
          </p>
        </div>

        <PortfolioList />
      </div>
    </section>
  );
};

export default Portfolio;
