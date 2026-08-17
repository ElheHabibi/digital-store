import type { IProduct } from "../../types/server";

type TProductItem = IProduct;

function ProductItem({ title, price, description, image }: TProductItem) {
  return (
    <div className="border border-[#2C2C28] rounded bg-[#1E1E1B] h-full flex flex-col justify-between hover:border-[#E8A33D] transition-colors">
      <div className="bg-[#EDEDE8] rounded-t p-4 bg-gradient-to-b from-[#EDEDE8] to-[#8A8A82]">
        <img src={image} alt={title} className="h-32 sm:h-40 w-full object-contain" />
      </div>

      <div className="flex flex-col justify-between p-3 sm:p-4 gap-2 sm:gap-3">
        <h2 className="text-sm text-[#EDEDE8] line-clamp-1 overflow-clip">
          {title}
        </h2>
        <p className="font-mono text-sm text-[#E8A33D]">{price}$</p>
        <p className="text-xs text-[#8A8A82] line-clamp-2 overflow-clip">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProductItem;