import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Automatização de Processos de Dados",
    description:
      "Reduza o trabalho manual e acelere a integração de dados com parâmetros configuráveis.",
    icon: <ChartIcon />,
  },
  {
    title: "Transformação Flexível de Dados",
    description:
      "Adapte seus dados para diferentes formatos, facilitando integrações com ferramentas e plataformas.",
    icon: <WalletIcon />,
  },
  {
    title: "Conversão Automática de Dados",
    description:
      "Converta grandes volumes de dados de forma precisa e fácil, integrando com seus fluxos de trabalho.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Nossos {" "}
            </span>
            Serviços
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
          Nossa solução permite a transformação instantânea de formatos complexos de dados, reduzindo a sobrecarga de desenvolvimento e ajudando você a manter o foco no que realmente importa.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
