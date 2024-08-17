import React from "react";
import 'animate.css';


export default function NossosCursos() {
  return (
    <div className="container p-4">
      <h1 
        style={{
          fontSize: "48px",
        }} 
        className="animate__animated animate__backInDown flex justify-content-center pb-5"
      >
        Nossos Cursos
      </h1>

      <div className="flex flex-wrap justify-content-between gap-4">
        {/* Card Marketing Digital */}
        <div 
          className="animate__animated animate__fadeIn animate__slow text-black-alpha-90 flex flex-column justify-content-between border-round-3xl"
          style={{
            backgroundColor: "#F75C38",
            width: "300px",
            height: "196px",
            boxShadow: "none",
            paddingTop: "26px",
            paddingLeft: "26px",
          }}
        >
          <h5 style={{
            fontSize: "28px",
            width: "145px",
            margin: "0",
          }}>Marketing Digital
          </h5>
          <p style={{
            padding: "0",
            margin: "0",
            paddingTop: "26px",
            paddingBottom: "26px",
          }} className="font-bold">
            12 meses
          </p>
        </div>

        {/* Card Desenvolvedor FullStack */}
        <div 
          className="animate__animated animate__fadeIn animate__slow text-black-alpha-90 flex flex-column justify-content-between border-round-3xl"
          style={{
            backgroundColor: "#A2FAA3",
            width: "300px",
            height: "196px",
            boxShadow: "none",
            paddingTop: "26px",
            paddingLeft: "26px",
          }}
        >
          <h5 style={{
            fontSize: "28px",
            width: "145px",
            margin: "0",
          }}>Desenvolvedor FullStack
          </h5>
          <p style={{
            padding: "0",
            margin: "0",
            paddingTop: "26px",
            paddingBottom: "26px",
          }} className="font-bold">
            12 meses
          </p>
        </div>

        {/* Card Data Analytics */}
        <div 
          className="animate__animated animate__fadeIn animate__slow text-black-alpha-90 flex flex-column justify-content-between border-round-3xl"
          style={{
            backgroundColor: "#E33A57",
            width: "300px",
            height: "196px",
            boxShadow: "none",
            paddingTop: "26px",
            paddingLeft: "26px",
          }}
        >
          <h5 style={{
            fontSize: "28px",
            width: "145px",
            margin: "0",
          }}>Data Analytics
          </h5>
          <p style={{
            padding: "0",
            margin: "0",
            paddingTop: "26px",
            paddingBottom: "26px",
          }} className="font-bold">
            12 meses
          </p>
        </div>

        {/* Card Cybersecurity */}
        <div 
          className="animate__animated animate__fadeIn animate__slow text-black-alpha-90 flex flex-column justify-content-between border-round-3xl"
          style={{
            backgroundColor: "#C60CD3",
            width: "300px",
            height: "196px",
            boxShadow: "none",
            paddingTop: "26px",
            paddingLeft: "26px",
          }}
        >
          <h5 style={{
            fontSize: "28px",
            width: "145px",
            margin: "0",
          }}>Cybersecurity
          </h5>
          <p style={{
            padding: "0",
            margin: "0",
            paddingTop: "26px",
            paddingBottom: "26px",
          }} className="font-bold">
            12 meses
          </p>
        </div>

        {/* Card Design UI/UX + IA */}
        <div 
          className="animate__animated animate__fadeIn animate__slow text-black-alpha-90 flex flex-column justify-content-between border-round-3xl"
          style={{
            backgroundColor: "#6E8CB9",
            width: "300px",
            height: "196px",
            boxShadow: "none",
            paddingTop: "26px",
            paddingLeft: "26px",
          }}
        >
          <h5 style={{
            fontSize: "28px",
            width: "145px",
            margin: "0",
          }}>Design UI/UX + IA
          </h5>
          <p style={{
            padding: "0",
            margin: "0",
            paddingTop: "26px",
            paddingBottom: "26px",
          }} className="font-bold">
            12 meses
          </p>
        </div>

        {/* Card Gestor de Projeto Ágil */}
        <div 
          className="animate__animated animate__fadeIn animate__slow text-black-alpha-90 flex flex-column justify-content-between border-round-3xl"
          style={{
            backgroundColor: "#FFAE42",
            width: "300px",
            height: "196px",
            boxShadow: "none",
            paddingTop: "26px",
            paddingLeft: "26px",
          }}
        >
          <h5 style={{
            fontSize: "28px",
            margin: "0",
          }}>Gestor de Projeto Ágil
          </h5>
          <p style={{
            padding: "0",
            margin: "0",
            paddingTop: "26px",
            paddingBottom: "26px",
          }} className="font-bold">
            12 meses
          </p>
        </div>

        {/* Card PHP com Laravel */}
        <div 
          className="animate__animated animate__fadeIn animate__slow text-black-alpha-90 flex flex-column justify-content-between border-round-3xl"
          style={{
            backgroundColor: "#2ECC71",
            width: "300px",
            height: "196px",
            boxShadow: "none",
            paddingTop: "26px",
            paddingLeft: "26px",
          }}
        >
          <h5 style={{
            fontSize: "28px",
            width: "145px",
            margin: "0",
          }}>PHP com Laravel
          </h5>
          <p style={{
            padding: "0",
            margin: "0",
            paddingTop: "26px",
            paddingBottom: "26px",
          }} className="font-bold">
            12 meses
          </p>
        </div>

        {/* Card Tráfego Pago e Performance */}
        <div 
          className="animate__animated animate__fadeIn animate__slow text-black-alpha-90 flex flex-column justify-content-between border-round-3xl"
          style={{
            backgroundColor: "#3498DB",
            width: "300px",
            height: "196px",
            boxShadow: "none",
            paddingTop: "26px",
            paddingLeft: "26px",
          }}
        >
          <h5 style={{
            fontSize: "28px",
            margin: "0",
          }}>Tráfego Pago e Performance
          </h5>
          <p style={{
            padding: "0",
            margin: "0",
            paddingTop: "26px",
            paddingBottom: "26px",
          }} className="font-bold">
            12 meses
          </p>
        </div>
      </div>

      <style jsx>{`
        .flex {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .container > div {
          flex-basis: calc(50% - 8px); /* Dois cards por linha, espaço de 8px entre eles */
        }

        @media (min-width: 1024px) {
          .container > div {
            flex-basis: calc(25% - 8px); /* Quatro colunas, dois cards por linha */
          }
        }

        @media (max-width: 1023px) {
          .container > div {
            flex-basis: 100%; /* Apenas uma coluna */
          }
        }
      `}</style>
    </div>
  );
}
