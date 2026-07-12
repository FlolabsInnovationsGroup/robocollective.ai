type SearchableProduct = {
    name?: string;
    description?: string;
    subCategoryTitle?: string;
    categoryId?: string;
    id?: string;
};

export function filterProductsBySearch<T extends SearchableProduct>(
    products: T[],
    query: string,
    extraTerms?: (product: T) => string[]
): T[] {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return products;

    return products.filter((product) => {
        const terms = [
            product.name,
            product.description,
            product.subCategoryTitle,
            product.categoryId,
            product.id,
            ...(extraTerms?.(product) ?? []),
        ];

        const haystack = terms.filter(Boolean).join(" ").toLowerCase();
        return haystack.includes(normalized);
    });
}