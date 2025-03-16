import Image from "next/image";
import { IoWarningOutline } from "react-icons/io5";
import { MdOutlineSupportAgent, MdWhatsapp } from "react-icons/md";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function Home() {
  return (
    <div>
      {/* sessão 1 */}
      <div className="flex flex-col justify-around items-center px-10 md:px-20 h-screen"
        style={{ backgroundImage: `url(./sessao1.png)`, width: '100', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
        <Image src="/logo-principal.svg" width={100} height={100} alt="" />

        <h1 className="md:text-4xl text-3xl font-semibold text-center p-5" style={{ backgroundColor: `rgba(226, 207, 59, 0.2)` }}>Precisa Declarar Seu Imposto de Renda?
          Nós Cuidamos de Tudo Para Você! </h1>

        <h2 className="md:text-3xl text-2xl font-semibold text-center p-5" style={{ backgroundColor: `rgba(226, 207, 59, 0.4)` }}>Evite multas e dores de cabeça! Conte com especialistas para garantir uma declaração segura, rápida e sem complicações.</h2>
        <button className="flex gap-2 items-center bg-green-400 py-3 px-4 text-lg text-slate-50 font-semibold tracking-wider rounded-md">
          <MdWhatsapp size={30} />
          Fale Conosco
        </button>
      </div>

      {/* sessão 2 */}
      <div className="flex flex-col pt-10 items-center px-10 md:px-20 h-auto rounded-2x" style={{ backgroundColor: `rgba(7, 11, 246, 0)` }}>

        <div className="flex items-center gap-5 mb-10" style={{ backgroundColor: `rgba(226, 207, 59, 0.2)` }}>
          <Image src="/logo-principal.svg" width={100} height={100} alt="" />
          <h2 className="text-2xl pb-5 font-semibold tracking-wider pr-7">Nosso compromisso</h2>
        </div>

        <div className="flex flex-col justify-center md:flex-row flex-wrap gap-3 md:gap-5 w-full md:px-20">

          <div className="card">
            <div className="card-header flex gap-3 justify-center items-center p-2 px-3 border  w-full md:w-60 text-2xl rounded-t-md bg-blue-800 text-white">
              <IoWarningOutline className="font-bold" />
              Problema
            </div>
            <div className="card-body px-3 text-xl text-justify w-full md:w-60 border md:h-[270px] h-[220px]">
              Declarar o Imposto de Renda
              pode ser um processo confuso e cheio de detalhes.
              Um erro pode resultar em multas e até cair na malha fina. Mas não se preocupe, estamos aqui para ajudar!
            </div>
          </div>

          <div className="card">
            <div className="card-header flex gap-3 justify-center border items-center p-2 px-3 w-full md:w-60 text-2xl rounded-t-md bg-blue-800 text-white">
              <Image src="/card-edit.png" width={25} height={25} alt="" />
              Complicações
            </div>
            <div className="card-body px-3 text-xl text-justify w-full md:w-60 border md:h-[270px] h-[220px]">
              Erros na declaração podem gerar pendências com a Receita Federal, resultando em dores de cabeça e possíveis penalidades.
            </div>
          </div>

          <div className="card">
            <div className="card-header flex gap-3 justify-center border items-center p-2 px-3 w-full md:w-60 text-2xl rounded-t-md bg-blue-800 text-white">
              <Image src="/tempo.png" width={25} height={15} alt="" />
              Tempo
            </div>
            <div className="card-body px-3 text-xl text-justify w-full md:w-60 border md:h-[270px] h-[220px]">
              A correria do dia a dia pode fazer com que você adie a declaração e corra o risco de pagar multas por atraso.
            </div>
          </div>

          <div className="card">
            <div className="card-header flex gap-3 justify-center border items-center p-2 px-3 w-full md:w-60 text-2xl rounded-t-md bg-blue-800 text-white">
              <Image src="/card-alert.png" width={25} height={15} alt="" />
              Precissão
            </div>
            <div className="card-body px-3 text-xl text-justify w-full md:w-60 border md:h-[270px] h-[220px]">
              Nossa equipe cuida de tudo para garantir que sua declaração seja feita corretamente, sem erros ou riscos desnecessários.
            </div>
          </div>

          <div className="card">
            <div className="card-header flex gap-3 justify-center border items-center p-2 px-3 w-full md:w-60 text-2xl rounded-t-md bg-blue-800 text-white">
              <Image src="/card-flash.png" width={25} height={15} alt="" />
              Agilidade
            </div>
            <div className="card-body px-3 text-xl text-justify w-full md:w-60 border md:h-[270px] h-[220px]">
              Com um processo simples e rápido, você envia seus documentos e nós resolvemos o resto, sem complicação!
            </div>
          </div>

          <div className="card">
            <div className="card-header flex gap-3 justify-center border items-center p-2 px-3 w-full md:w-60 text-2xl rounded-t-md bg-blue-800 text-white">
              <Image src="/card-target.png" width={25} height={15} alt="" />
              Solução
            </div>
            <div className="card-body px-3 text-xl text-justify w-full md:w-60 border md:h-[270px] h-[220px]">
              Evite problemas e tenha tranquilidade! Entre em contato agora e deixe seu Imposto de Renda nas mãos de especialistas.
            </div>
          </div>

        </div>

      </div>

      {/* sessão 3 */}
      <div className="flex flex-col pt-20 items-center px-10 md:px-20 h-auto"
        style={{ backgroundImage: `url(./sessao3.jfif)`, width: '100', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >

        <div className="flex items-center gap-5 mb-10" style={{ backgroundColor: `rgba(226, 207, 59, 0.2)`, borderEndEndRadius: 20 }}>
          <Image src="/logo-principal.svg" width={100} height={100} alt="" />
          <h2 className="text-2xl pb-5 font-semibold tracking-wider pr-7">Nosso compromisso</h2>
        </div>

        <div className="flex flex-col gap-10">
          {/* <Accordion type="single" collapsible style={{  backgroundColor: `rgba(219, 233, 212, 0.9)` }} className="rounded-2xl px-10"> */}

          <Accordion type="single" collapsible className="w-full flex flex-col gap-10" >

            <AccordionItem value="1" className="w-full md:pt-2 pt-16">

              <AccordionTrigger className="text-2xl px-10  flex items-center justify-start" style={{ backgroundColor: `rgba(219, 233, 212, 0.3)` }}>
                <div className="p-2 rounded-full"> <MdOutlineSupportAgent size={40} color="blue" /> </div>
                Contato
              </AccordionTrigger>
              <AccordionContent className="text-lg pl-2" style={{ backgroundColor: `#ebf0e94c` }}>
                Você entra em contato e nos envia seus documentos.
              </AccordionContent>
            </AccordionItem >

            <AccordionItem value="item-2" className="w-full md:pt-2 pt-16">
              <AccordionTrigger className="text-2xl px-10 flex items-center justify-start" style={{ backgroundColor: `rgba(219, 233, 212, 0.3)` }}>
                <div className="p-2 rounded-full"> <Image src="/card-target.png" width={40} height={40} alt="" /> </div>
                Análise
              </AccordionTrigger>
              <AccordionContent className="text-lg pl-2" style={{ backgroundColor: `#ebf0e94c` }}>
                Nossa equipe analisa e prepara sua declaração em tempo recorde.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="w-full md:pt-2 pt-16">
              <AccordionTrigger className="text-2xl px-10  flex items-center justify-start" style={{ backgroundColor: `rgba(219, 233, 212, 0.3)` }}>
                <div className="p-2 rounded-full"> <Image src="/card-edit.png" width={40} height={40} alt="" /> </div>
                Conferência
              </AccordionTrigger>
              <AccordionContent className="text-lg pl-2" style={{ backgroundColor: `#ebf0e94c` }}>
                Revisamos todos os detalhes para garantir precisão.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="w-full md:pt-2 pt-16 pb-20">
              <AccordionTrigger className="text-2xl px-10  flex items-center justify-start" style={{ backgroundColor: `rgba(219, 233, 212, 0.3)` }}>
                <div className="p-2 rounded-full"> <Image src="/card-flash.png" width={40} height={40} alt="" /> </div>
                Envio
              </AccordionTrigger>
              <AccordionContent className="text-lg pl-2" style={{ backgroundColor: `#ebf0e94c` }}>
                Enviamos para a Receita Federal e você recebe o comprovante.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

        </div>
      </div>

      {/* sessão 4 */}
      <div className="flex flex-col pt-10 items-center px-10 md:px-20 h-auto w-screen">
        
        <div className="flex items-center gap-5 mb-10" style={{ backgroundColor: `rgba(226, 207, 59, 0.2)`, borderEndEndRadius: 20 }}>
          <Image src="/logo-principal.svg" width={100} height={100} alt="" />
          <h2 className="text-2xl pb-5 font-semibold tracking-wider pr-7">Solução (Benefícios do Serviço)</h2>
        </div>

        <div className="box-item flex flex-col gap-10">
          {/* item-01 */}
        <div className="box-item flex justify-start items-center h-16">
          <div className="box-icon bg-blue-700 p-2 w-16 rounded-l-xl h-16 flex items-center">
            <Image src="/item-01.svg" width={50} height={50} alt="" className="" />
          </div>
          <div className="box-body bg-blue-400 p-2 w-full rounded-r-xl h-16 flex items-center">
          Declaração 100% correta e sem riscos com  profissionais experiêntes.
          </div>
        </div>

        {/* item-02 */}
        <div className="box-item flex justify-start items-center h-16">
          <div className="box-icon bg-blue-700 p-2 w-16 rounded-l-xl h-16 flex items-center">
            <Image src="/item-02.svg" width={50} height={50} alt="" className="" />
          </div>
          <div className="box-body bg-blue-400 p-2 w-full rounded-r-xl h-16 flex items-center">
          Atendimento rápido e personalizado de acordo com a necessidade de cada cliente
          </div>
        </div>

        {/* item-03 */}
        <div className="box-item flex justify-start items-center h-16">
          <div className="box-icon bg-blue-700 p-2 w-16 rounded-l-xl h-16 flex items-center">
            <Image src="/item-03.svg" width={50} height={50} alt="" className="" />
          </div>
          <div className="box-body bg-blue-400 p-2 w-full rounded-r-xl h-16 flex items-center">
          Declaração 100% correta e sem riscos com  profissionais experiêntes.
          </div>
        </div>

        {/* item-04 */}
        <div className="box-item flex justify-start items-center h-16 mb-10">
          <div className="box-icon bg-blue-700 p-2 w-16 rounded-l-xl h-16 flex items-center">
            <Image src="/item-04.svg" width={50} height={50} alt="" className="" />
          </div>
          <div className="box-body bg-blue-400 p-2 w-full rounded-r-xl h-16 flex items-center">
          Declaração 100% correta e sem riscos com  profissionais experiêntes.
          </div>
        </div>

        </div>
      </div>
      {/* sessão 5 */}
      <div className="flex flex-col pt-10 items-center px-10 md:px-20 h-screen w-screen">
        
        <div className="flex items-center gap-5 mb-10" style={{ backgroundColor: `rgba(226, 207, 59, 0.2)`, borderEndEndRadius: 20 }}>
          <Image src="/logo-principal.svg" width={100} height={100} alt="" />
          <h2 className="text-2xl pb-5 font-semibold tracking-wider pr-7">Solução (Benefícios do Serviço)</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-10 mb-5 ">
            <div className="box-item1  flex flex-1">
              <Image src="/image-final.svg" width={400} height={100} alt="" />
            </div>
            <div className="box-item2 flex flex-1 flex-col justify-around items-center text-3xl text-center">
              <h3>Não corra Riscos!</h3>
              <h3> Entre em contato agora e faça sua declaração com segurança!</h3>
              <h3>📲 Clique no botão abaixo e fale com um especialista! 👇</h3>
            </div>
        </div>

        <button className=" mb-10 flex gap-2 items-center bg-green-400 py-3 px-4 text-lg text-slate-50 font-semibold tracking-wider rounded-md">
          <MdWhatsapp size={30} />
          Fale Conosco
        </button>

        </div>
    </div>
  );
}
