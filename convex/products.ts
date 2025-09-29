import { query } from "./_generated/server";
import { v } from "convex/values";

export const getProducts = query({
  args: {},
  handler: async (ctx) => {
    // Return sample products data
    return [
      {
        _id: "1",
        name: "Steel Billets",
        category: "Raw Materials",
        description: "High-quality steel billets manufactured using advanced technology for superior strength and durability.",
        specifications: [
          "Size: 100mm x 100mm to 200mm x 200mm",
          "Length: 6m to 12m",
          "Grade: Fe 415, Fe 500, Fe 550",
          "Standard: IS 2830:2012"
        ],
        features: [
          "Superior tensile strength",
          "Excellent weldability",
          "Corrosion resistant",
          "BIS certified quality"
        ],
        imageUrl: "/api/placeholder/400/300"
      },
      {
        _id: "2",
        name: "TMT Bars 550D",
        category: "TMT Bars",
        description: "Premium grade TMT bars with 550 MPa yield strength, perfect for high-rise construction and infrastructure projects.",
        specifications: [
          "Diameter: 8mm to 32mm",
          "Length: 12m standard",
          "Yield Strength: 550 MPa",
          "Standard: IS 1786:2008"
        ],
        features: [
          "German Thermex® Technology",
          "Superior earthquake resistance",
          "High ductility",
          "Fire resistant up to 600°C"
        ],
        imageUrl: "/api/placeholder/400/300"
      },
      {
        _id: "3",
        name: "CRS TMT Bars",
        category: "TMT Bars",
        description: "Corrosion Resistant Steel TMT bars designed for coastal and industrial environments with enhanced durability.",
        specifications: [
          "Diameter: 10mm to 25mm",
          "Length: 12m standard",
          "Yield Strength: 500-550 MPa",
          "Corrosion Resistance: Enhanced"
        ],
        features: [
          "Anti-corrosion coating",
          "Extended lifespan",
          "Suitable for marine environments",
          "Reduced maintenance costs"
        ],
        imageUrl: "/api/placeholder/400/300"
      }
    ];
  },
});
