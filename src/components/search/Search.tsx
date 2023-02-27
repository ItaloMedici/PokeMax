import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Container, Input, Submit } from "./styles";
import { useT } from "../../hooks/useT";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

type SearchProps = {
  onSubmit(value: string): void
  onClear(): void
} 

export const Search = ({ onSubmit, onClear }: SearchProps) => {
  const [value, seValue] = useState("");
  const { getMessage } = useT();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value)
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    seValue(e.target.value)

    if (e.target.value.length === 0) {
      onClear()
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        autoComplete="false"
        placeholder={getMessage("searchPokemon")}
        aria-label={getMessage("search")}
        onChange={onChange}
        value={value}
      />
      <Submit type="submit" onClick={() => onSubmit(value)}>
        <div>
          <MagnifyingGlassIcon />
        </div>
        <span>{getMessage("submit")}</span>
      </Submit>
    </Container>
  );
};
