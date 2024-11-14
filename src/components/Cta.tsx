import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
          Pronto para  
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              transformar a maneira{" "}
            </span>
            como você gerencia dados? 
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Experimente nossa API de conversão e integração agora mesmo e leve suas operações de dados a um novo nível de automação e eficiência.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">Fale com a gente!</Button>
          {/* <Button
            variant="outline"
            className="w-full md:w-auto"
          >
            View all features
          </Button> */}
        </div>
      </div>
    </section>
  );
};
