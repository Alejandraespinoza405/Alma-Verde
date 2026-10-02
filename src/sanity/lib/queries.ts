import { groq } from "next-sanity";

export const plantsQuery = groq`
  *[_type == "plant"] {
    _id,
    name,
    category,
    light,
    watering,
    difficulty,
    size,
    care,
    beginnerFriendly,
    petSafe,
    lastUpdated
  }
`;