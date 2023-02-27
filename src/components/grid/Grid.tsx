import { PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useT } from "../../hooks/useT";
import { Pokemon } from "../../models/Pokemon";
import { Card } from "../card/Card";
import { Dialog } from "../dialog";
import { List, LoadMoreButton, Wrapper } from "./styles";

type GridProps = {
  data: Pokemon[];
  onLoadMore(): void;
};

export const Grid = ({ data, onLoadMore }: GridProps) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { getMessage } = useT();

  const onSelect = (idx: number) => {
    setSelectedIndex(idx);
    setOpenDialog(true);
  };

  return (
    <Wrapper>
      <List aria-label="pokemons">
        {data.map((p, i) => (
          <Card key={p.id} pokemon={p} onSelect={() => onSelect(i)} />
        ))}
      </List>
      {data.length > 2 ? (
        <LoadMoreButton onClick={onLoadMore}>
          <PlusIcon />
          {getMessage("loadMore")}
        </LoadMoreButton>
      ) : null}
      {data.length > 1 && (
        <Dialog
          visible={openDialog}
          onHide={() => setOpenDialog(false)}
          pokemon={data[selectedIndex]}
        />
      )}
    </Wrapper>
  );
};
