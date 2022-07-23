import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "@/api/client";
import BondInfo from "@/api/type/bond_info";
import { BondsInfos, BondInfosLoading } from "@/view/bond_infos";
import CenteredBox from "@/view/centered_box";

export default function SearchPage() {
  const { query } = useParams<string>();

  const [results, setResults] = useState<BondInfo[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    setResults([]);

    api
      .search(query!!)
      .then(setResults)
      .then(() => setLoaded(true));
  }, [query]);

  return (
    <Container>
      <CenteredBox>
        {!loaded ? <BondInfosLoading /> : <BondsInfos bonds={results} />}
      </CenteredBox>
    </Container>
  );
}
