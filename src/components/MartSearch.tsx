import { styled } from "@compiled/react";
import axios from "axios";
import { getRegExp, engToKor } from "korean-regexp";
import { useEffect, useState } from "react";

interface SearchResult {
  isMatched: boolean,
  index: number,
  input: string,
  matched: string,
}

export default function MartSearch() {
  const [keyword, setKeyword] = useState("");
  const [martList, setMartList] = useState([""]);
  const [searchResult, setSearchResult] = useState([] as SearchResult[]);

  useEffect(() => {
    axios.get("https://is-mart-open-api.btry.dev/marts")
      .then((response) => {
        setMartList(response.data.result);
      });
  }, []);

  useEffect(() => {
    const regex = getRegExp(engToKor(keyword), { initialSearch: true });
    setSearchResult(
      martList
        .map((value) => {
          const matched = value.match(regex);
          return {
            isMatched: matched !== null,
            index: matched?.index ?? -1,
            input: value ?? "",
            matched: (matched === null) ? "" : matched[0]
          };
        })
        .filter((value) => value.isMatched)
        .sort((a, b) => {
          return a.index - b.index;
        })
    );
  }, [martList, keyword]);

  return (
    <>
      <InputField type="text" onChange={(e) => { setKeyword((e.target as HTMLInputElement).value) }} />
      <SearchResult>
        {searchResult
          .map(({index, input, matched}) => {
            if (matched.length > 0) {
              return <li key={input}>{input.substring(0, index)}<strong>{matched}</strong>{input.substring(index + matched.length, input.length)}</li>
            }
            return <li key={input}>{input}</li>
          })}
      </SearchResult>
    </>
  );
}

const InputField = styled.input`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  padding: 0.5rem;
  font-size: 1.25rem;
`;

const SearchResult = styled.ul`
  list-style: none;
  padding-left: 0;
  background-color: white;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  color: #888888;
  border-radius: 0.75rem;

  & li {
    font-size: 1.2rem;
    padding: 0.75rem;
  }

  & strong {
    color: red;
  }
`;