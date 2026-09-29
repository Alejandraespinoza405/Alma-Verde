export function RecommendationCard() {
  return (
    <div className="flex h-72 flex-col justify-between rounded-lg bg-[#58734a] p-8 text-white shadow-md">
      <div>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#dce6d5]">
          Alma Verde
        </p>

        <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
          Tu rincón verde te está esperando
        </h2>
      </div>

      <div>
  <p className="mb-6 max-w-md text-lg leading-relaxed text-[#eef3eb]">
    Respondé unas preguntas y descubrí qué planta combina con tu espacio y tu rutina.
  </p>

  <div className="flex -translate-y-12 justify-end">
    <button className="rounded-full bg-white px-6 py-3 font-semibold text-[#4a3b2a]">
      Quiero descubrirla
    </button>
  </div>
</div>
    </div>
  );
}