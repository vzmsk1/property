import PropertyCard from "@/components/property-card.component";
import type { PropertyTypes } from "@/types/property.types";
import { fetchProperties } from "@/utils/request";

const PropertiesPage = async () => {
  const properties = await fetchProperties();

  properties.sort(
    (a: PropertyTypes, b: PropertyTypes) =>
      Number(new Date(b.createdAt)) - Number(new Date(a.createdAt)),
  );

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property: PropertyTypes) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        ) : (
          <p>No Properties Found</p>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
