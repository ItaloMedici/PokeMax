import enUS from "./languages/en-US.json";
import ptBR from "./languages/pt-BR.json";

enum Languages {
  ptBR = "pt-BR",
  enUS = "en-US"
}

const messages = {
  [Languages.enUS]: enUS,
  [Languages.ptBR]: ptBR,
}

export { messages, Languages }