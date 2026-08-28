import "./globals.css";
import Link from "next/link";
import CajaComentarios from "@/shared/components/caja-comentarios";
import {Portada2, Consulta, Mediciones, Valores, Objetivos, Covertura} from '@/features'

export default function Home() {
  return (
    <>
      <Portada2 />
      <Consulta />
      <Mediciones />
      <Valores />
      <Objetivos />
      <CajaComentarios />
      <Covertura />
    </>
  );
}