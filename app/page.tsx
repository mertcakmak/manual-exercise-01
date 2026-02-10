import Stepper from "./modules/hair.loss/components/stepper";
import HairLossProvider from "./modules/hair.loss/providers/hair.loss.provider";

export default function Home() {
  return (
    <main>
      <HairLossProvider>
        <Stepper />
      </HairLossProvider>
    </main>
  );
}
