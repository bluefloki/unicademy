import React from "react";
import Navbar from "./Navbar";

export default function Lecture() {
  return (
    <div>
      <Navbar />
      <div className="container has-text-centered">
        <h2 className="is-size-2">Lecture Name</h2>
        <iframe
          width="1152"
          height="648"
          src="https://www.youtube-nocookie.com/embed/-_QFAWcaGTM"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{ marginTop: 50 }}
        ></iframe>
        <p className="has-text-left">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
          sint facilis, tempora aperiam tempore tenetur id deserunt.
          Praesentium, sed. Esse nostrum cumque enim quisquam ipsum ad facere
          asperiores quidem amet atque itaque similique magnam consequuntur nam
          quasi beatae, laboriosam dignissimos inventore corrupti! Eveniet natus
          omnis minus. Qui, iusto! Reiciendis excepturi in dolor aspernatur
          labore quia quo quod magnam sit tempore error animi adipisci ipsam,
          fugiat corporis, sed laudantium id qui sapiente modi neque ducimus
          porro, suscipit unde? Magnam aperiam exercitationem id non earum vero?
          Tempora, vitae labore laboriosam accusantium quod nostrum consequuntur
          eaque sapiente, delectus numquam, iusto illo adipisci repellat.
        </p>
      </div>
    </div>
  );
}
