import type { IProduct } from "../../types/server";

type TProductItem = IProduct;

function ProductItem({ title, price, description, image }: TProductItem) {
  return (
    <div className="h-full rounded-lg bg-white shadow-sm transition-all duration-200 group-hover:shadow-lg">
      <div className="flex h-56 items-center justify-center p-6 bg-gradient-to-b from-gray-50 via-white to-slate-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-4 p-5">
        <h2 className="line-clamp-1 text-lg font-semibold text-gray-900">
          {title}
        </h2>

        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-blue-600">${price}</p>
          <span className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-700">
            New
          </span>
        </div>

        <p className="text-sm leading-6 text-gray-500 line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
