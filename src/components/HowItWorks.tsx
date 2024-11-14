import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, PlaneIcon, GiftIcon, ChartIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Alta Confiabilidade",
    description: "API em Rust para performance e estabilidade, pronta para produção.",
  },
  {
    icon: <ChartIcon />,
    title: "Envio Fácil",
    description: "Envie arquivos CSV, JSON ou YAML e inicie a conversão.",
  },
  {
    icon: <PlaneIcon />,
    title: "Velocidade Máxima",
    description: "Conversão instantânea e precisa para o formato desejado.",
  },
  {
    icon: <GiftIcon />,
    title: "Pronto para Uso",
    description: "Receba dados no formato certo para bancos de dados ou integrações.",
  },
];


export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Como{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Funciona{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      Como Funciona Nossa API de Conversão de Dados
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
