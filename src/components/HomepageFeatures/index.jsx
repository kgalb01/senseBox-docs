import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import LogoSensebox from "@site/static/img/logo.svg";
import ArduinoCategoryIcon from "@site/static/img/category-icons/arduino.png";
import BlocklyCategoryIcon from "@site/static/img/category-icons/blockly.png";
import HardwareCategoryIcon from "@site/static/img/category-icons/hardware.png";
import openSenseMapCategoryIcon from "@site/static/img/category-icons/osem.png";
import homeCategoryIcon from "@site/static/img/category-icons/home.png";
import senseBoxCategoryIcon from "@site/static/img/category-icons/senseBox.png";
import miscCategoryIcon from "@site/static/img/category-icons/allgemein.png";
import trafficLight from "@site/static/img/category-icons/trafficLight.png";
import bikeCategory from "@site/static/img/category-icons/bikesilhouette.png";
import osem from "@site/static/img/osem.png";
import blockly from "@site/static/img/blockly.png";
import hardware from "@site/static/img/hardware.jpg";
import { useBoardStore } from "@site/src/lib/stores/store";

const FeatureList2 = [
  {
    title: ":edu S2",
    description: (
      <>Informationen zum Anschluss und zur Programmierung der senseBox:edu S2 für den Einsatz im Bildungsbereich</>
    ),
    to: "/docs/boards/mcus2/mcu-s2-overview",
  }, 
  {
    title: ":edu",
    description: (
      <>
        Informationen zum Anschluss und zur Programmierung der senseBox:edu für den Einsatz im Bildungsbereich
      </>
    ),
    to: "/docs/boards/mcu/mcu-overview",
  },
 /*  {
    title: ":bike",
    description: (
      <>
        Informationen zum Anschluss und Programmierung der Sensoren, Bees und
        weiteren Bauteilen für Bildungszwecke
      </>
    ),
    to: "/docs/category/bike",
  },
  {
    title: ":home",
    description: (
      <>
        Informationen zum Anschluss und Programmierung der Sensoren, Bees und
        weiteren Bauteilen für Bildungszwecke
      </>
    ),
    to: "/docs/category/home",
  },
  {
    title: ":mini",
    description: (
      <>
        Informationen zum Anschluss und Programmierung der Sensoren, Bees und
        weiteren Bauteilen für Bildungszwecke
      </>
    ),
    to: "/docs/category/mini",
  },
  {
    title: ":CO2-Ampel",
    description: (
      <>
        Informationen zum Anschluss und Programmierung der Sensoren, Bees und
        weiteren Bauteilen für Bildungszwecke
      </>
    ),
    to: "/docs/category/trafficLight",
  },
   */
];

const ThumbNailPreviewList = [
  {
    title: "openSenseMap",
    Image: osem,
    description: (
      <>Die openSenseMap als Internetplattform für offene Umweltdaten</>
    ),
    to: "https://docs.opensensemap.org/",
  },
  {
    title: "Blockly",
    Image: blockly,
    description: <>Die frei verfügbare grafische Oberfläche zum Programmieren der senseBox </>,
    onClick: () => { useBoardStore.setState({ board: "Blockly" })} ,
    to: "/docs/category/blockly-2",
  },
  {
    title: "Hardware Glossar",
    Image: hardware,
    description: (
      <>
        Informationen zum Anschluss und zur Programmierung der Sensoren, Bees und
        weiteren Bauteilen
      </>
    ),
    onClick: () => { useBoardStore.setState({ board: "Glossar" })} ,
    to : "/docs/category/glossar"
  },
];

function ThumbailPreview({ Image, title, description, onClick,  to }) {
  return (
    <Link onClick={onClick} className="w-full lg:w-[25%] bg-gradient-to-r from-green-3 to-green mx-auto hover:text-white hover:no-underline  text-white rounded-lg overflow-hidden hover:shadow-[rgba(0,0,15,0.5)_-7px_7px_0px_0px] hover:shadow-yellow  hover:-translate-y-1 transition duration-300" to={to}>
    <div>
      <img className="w-full h-48 object-cover" src={Image} alt={title} />
      <div className="p-4">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="mt-2">{description}</p>
      </div>
    </div>
    </Link>

  );
}

function Feature({ title, description, to }) {
  const handleBoardChange = (selectedBoard) => {
    // Verwende die setBoard-Funktion direkt, um das Board im Store zu aktualisieren
    useBoardStore.setState({ board: selectedBoard });
    // Hier kannst du weitere Aktionen ausführen, wenn sich das Board ändert
  };

  return (
    <Link
      className={clsx(
        "w-full lg:w-[15%] flex flex-col items-center text-white border-3 border-dotted border-yellow hover:text-white shadow-2xl rounded-lg p-4",
        "transition duration-300 ease-in-out hover:bg-yellow hover:no-underline hover:shadow-4xl "
      )}
      to={to}
      onClick={() => handleBoardChange(title)}
    > 
      <div className="text-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{description}</p>
      </div>
    </Link>
  );
}
export default function HomepageFeatures() {
  return (
    <section className="flex flex-col">
      <div>
        <div className="flex flex-col gap-20 bg-gradient-to-r from-green to-green-3 p-8">
          <div className="flex flex-col lg:flex-row items-center  justify-evenly">
            <div className="text-center text-white">
              <h1 className="font-bold">senseBox Dokumentation</h1>
              <p>Der Platz für die Beschreibung der senseBox-Dokumentation.</p>
            </div>
            <div>
              <LogoSensebox />
            </div>
          </div>
          <div className="flex lg:flex-row  flex-wrap justify-center gap-4">
            {FeatureList2.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col  lg:flex-row justify-center gap-4 lg:gap-0 p-4 lg:p-20">
        {ThumbNailPreviewList.map((props, idx) => (
          <ThumbailPreview key={idx} {...props} />

        ))}
      </div>
    </section>
  );
}
