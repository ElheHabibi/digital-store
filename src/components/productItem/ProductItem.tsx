import type { IProduct } from "../../types/server";

type TProductItem = IProduct;

function ProductItem({ title, price, description, image }: TProductItem) {
  return (
    <div className="border border-border rounded bg-surface h-full flex flex-col justify-between hover:border-accent transition-colors">
      <div className="bg-foreground rounded-t p-4 bg-gradient-to-b from-foreground to-muted">
        <img
          src={image}
          alt={title}
          className="h-32 sm:h-40 w-full object-contain"
        />
      </div>

      <div className="flex flex-col justify-between p-3 sm:p-4 gap-2 sm:gap-3">
        <h2 className="text-sm text-foreground line-clamp-1">{title}</h2>
        <p className="text-sm text-accent">{price}$</p>
        <p className="text-xs text-muted line-clamp-2">{description}</p>
      </div>
    </div>
  );
}

export default ProductItem;
