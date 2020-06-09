import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ReactPlayer from "react-player";
import axios from "axios";

export default function Lecture() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  console.log(seconds);
  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, seconds]);

  window.addEventListener("unload", async (e) => {
    return await axios.post("/api/v1/watched", { seconds });
  });

  return (
    <div>
      <Navbar />
      <div className="container has-text-centered">
        <h2 className="is-size-2" style={{ marginBottom: 50 }}>
          Lecture Name
        </h2>
        <ReactPlayer
          url="https://vimeo.com/216095263"
          controls
          width="100%"
          style={{ marginBottom: 50 }}
          config={{
            vimeo: {
              playerOptions: {
                color: "ea7773",
              },
            },
          }}
          onPlay={() => setIsActive(true)}
          onPause={() => setIsActive(false)}
          onBuffer={() => setIsActive(false)}
          onReady={() => setIsActive(false)}
          onEnded={() => setIsActive(false)}
        />
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
