
import { getWooProducts } from "@/lib/woocommerce";
import { mapWooProduct } from "@/lib/woo-product-adapter";
import { ProductCard } from "@/app/components/ProductCard";

export default async function ShopPage() {
    const wooProducts = await getWooProducts();
    const products = wooProducts.map(mapWooProduct);

    return (
        <main className="min-h-screen bg-surface py-12">
            <div className="container-page">
                <div className="mb-10">
                    <span className="eyebrow">ProPharmacy Shop</span>

                    <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-ink-900">
                        Τα προϊόντα μας
                    </h1>

                    <p className="mt-3 text-ink-500">
                        Ανακάλυψε τα προϊόντα του φαρμακείου μας.
                    </p>
                </div>

                {products.length === 0 ? (
                    <p className="py-16 text-center text-ink-500">
                        Δεν βρέθηκαν προϊόντα.
                    </p>
                ) : (
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
