import { Cross2Icon } from "@radix-ui/react-icons";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useT } from "../../hooks/useT";
import { Pokemon } from "../../models/Pokemon";
import { ProgressBar } from "../progress-bar/ProgressBar";
import {
  CloseButton,
  DialogWrapper,
  Flex,
  Image,
  Modal,
  Name,
  Stats,
  Title,
} from "./styles";

type DialogProps = {
  visible: boolean;
  onHide(): void;
  pokemon: Pokemon;
};

export const Dialog = ({ visible, onHide, pokemon }: DialogProps) => {
  const { getMessage } = useT();
  const dialogRef = useRef(null);

  useEffect(() => {
    if (visible) {
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [visible]);

  const handleKeyDown = (event) => {
    if (event.key === "Escape" || event.key === "Enter") {
      onHide();
    }
  };

  return createPortal(
    <Modal
      aria-hidden={!visible}
      visible={visible}
      tabIndex={-1}
      ref={dialogRef}
    >
      <DialogWrapper
        visible={visible}
        aria-modal="true"
        aria-labelledby="pokemon-name"
      >
        <CloseButton
          autoFocus
          aria-label={getMessage("close")}
          onClick={() => onHide()}
        >
          <Cross2Icon />
        </CloseButton>
        <Flex>
          <Name id="pokemon-name">{pokemon.name.toUpperCase()}</Name>
          <Image src={pokemon.imageUrl} />
        </Flex>
        <Flex>
          <Title>Stats</Title>
          <Stats>
            {pokemon.stats.map((s) => (
              <ProgressBar
                key={s.name}
                stats={s.name}
                value={s.value}
                type={pokemon.types[0]}
              />
            ))}
          </Stats>
        </Flex>
      </DialogWrapper>
    </Modal>,
    document.body
  );
};
