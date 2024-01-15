import { ProductCollection } from "@medusajs/medusa"
import ProductRail from "./product-rail"
import PageBanner from "@modules/layout/components/pagebanner/pagebanner.jsx"

const FeaturedProducts = ({
  collections,
}: {
  collections: ProductCollection[]
}) => {
  return (
    <>
      <PageBanner
        title="GenEdUSA Store"
        description="Shop GenEdUSA Items and Packages"
        imgSrc="/logo.png"
        imgAlt="GenEdUSA Logo"
      />
      <div>
        <ul className="flex flex-col gap-x-6 gap-y-8">
          {collections.map((collection) => (
            <li key={collection.id}>
              <ProductRail collection={collection} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default FeaturedProducts
