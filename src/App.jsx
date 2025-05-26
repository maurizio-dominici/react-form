// IMPORTS

export default function App() {
  const listItems = [
    {
      id: 1,
      title: "La tecnologia del futuro",
      content: "Dispositivi intelligenti cambiano il modo in cui viviamo.",
    },
    {
      id: 2,
      title: "Cibo sano e gustoso",
      content: "Ricette semplici per mangiare bene ogni giorno.",
    },
    {
      id: 3,
      title: "Viaggi da sogno",
      content: "Destinazioni imperdibili per la tua prossima vacanza.",
    },
    {
      id: 4,
      title: "Fitness a casa",
      content: "Allenamenti veloci per restare in forma senza palestra.",
    },
    {
      id: 5,
      title: "Finanza personale facile",
      content: "Consigli pratici per risparmiare e investire meglio.",
    },
  ];

  return (
    <div className="container">
      <ul>
        {listItems.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}
