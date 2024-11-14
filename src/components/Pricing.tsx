import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Free",
    popular: 0,
    price: 0,
    description:
      "Transforme seus dados sem custos iniciais. Experimente nossa API sem compromisso e descubra como a automação de dados pode otimizar seu fluxo de trabalho",
    buttonText: "Teste grátis",
    benefitList: [
      "Acesso Gratuito e Ilimitado",
      "Conversões Rápidas",
      "Sem Compromisso de Pagamento",
      "Sem Taxas Ocultas",
      "Suporte Básico",
    ],
  },
  {
    title: "Basic",
    popular: 1,
    price: 10,
    description:
      "Aumente a produtividade com mais recursos e maior capacidade. Com mais requisições e funcionalidades avançadas, o Plano Profissional é ideal para quem precisa de resultados rápidos e de alta qualidade no dia a dia.",
    buttonText: "Start Free Trial",
    benefitList: [
      "Conversões em Alta Velocidade",
      "Maior Limite de Requisições",
      "Acesso a Funcionalidades Avançadas",
      "Suporte Prioritário",
      "Personalização de Parâmetros",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 40,
    description:
      "Atenda grandes volumes de dados com eficiência e segurança. A solução completa para empresas que precisam de alta performance, integração e suporte dedicado. Acelere processos empresariais com uma API robusta e escalável.",
    buttonText: "Contact US",
    benefitList: [
      "Processamento de Dados em Escala",
      "Integração Total com Sistemas Corporativos:",
      "Ajuste de Desempenho",
      "Suporte Dedicado",
      "Segurança e Conformidade",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
         Escolha o
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
           Plano Ideal{" "}
        </span>
        para Suas Necessidades
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
      Planos flexíveis e escaláveis, projetados para atender às necessidades de desenvolvedores, profissionais e empresas, garantindo soluções eficientes e automáticas para todas as suas conversões de dados.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Mais popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">${pricing.price}</span>
                <span className="text-muted-foreground"> /month</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
