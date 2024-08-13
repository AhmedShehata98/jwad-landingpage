import SalesListCarousel from "@/components/SalesListCarousel";
import { getAllSalesList, getSales } from "@/services/api";

const Sales = async () => {
  const salesItems = await getSales();
  const salesCardItems = await getAllSalesList();

  return (
    <section className="w-full min-h-screen max-lg:h-fit max-sm:min-h-fit flex flex-col items-center justify-start bg-[#F7F7F7] py-16">
      <h4
        className="w-3/5 max-sm:w-full max-sm:px-6 mt-20 text-5xl max-md:text-2xl font-bold leading-[72px] text-center bg-gradient-to-l from-[#156EFD] via-[#FF782A] to-[#7169E3]"
        style={{
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {salesItems.data.attributes.heading}
      </h4>
      <div className="w-full px-3 flex items-center justify-center gap-3">
        <SalesListCarousel dataList={salesCardItems.data} />
      </div>
    </section>
  );
};

export default Sales;
