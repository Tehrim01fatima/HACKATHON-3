
import { groq } from "next-sanity";
export const allProducts= groq`*[_type == "products"]`
export const four= groq`*[_type == "products"] [0..3]`
export const three= groq`*[_type == "products"] [0..2]`
