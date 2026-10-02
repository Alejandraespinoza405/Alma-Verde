import { defineField, defineType } from "sanity";

export const plantType = defineType({
  name: "plant",
  title: "Planta",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Imagen",
      type: "image",
    }),
    defineField({
      name: "category",
      title: "Categoría",
      type: "string",
      options: {
        list: [
          "Interior",
          "Suculentas",
          "Flores",
          "Aromáticas",
          "Exterior",
        ],
      },
    }),
    defineField({
      name: "light",
      title: "Luz",
      type: "string",
    }),
    defineField({
      name: "watering",
      title: "Riego",
      type: "string",
    }),
    defineField({
      name: "difficulty",
      title: "Dificultad",
      type: "string",
      options: {
        list: ["Fácil", "Media", "Difícil"],
      },
    }),
    defineField({
      name: "size",
      title: "Tamaño",
      type: "string",
    }),
    defineField({
      name: "care",
      title: "Cuidados",
      type: "text",
    }),
    defineField({
      name: "beginnerFriendly",
      title: "Apta para principiantes",
      type: "boolean",
    }),
    defineField({
      name: "petSafe",
      title: "Segura para mascotas",
      type: "boolean",
    }),
    defineField({
      name: "lastUpdated",
      title: "Última actualización",
      type: "date",
    }),
  ],
});