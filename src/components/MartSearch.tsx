import { styled } from "@compiled/react";
import axios from "axios";
import { getRegExp, engToKor } from "korean-regexp";
import { MouseEvent, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { MdSearch, MdArrowForward } from "react-icons/md";
import { apiEndpoint } from "../config/Resource"

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
  const [cookie, setCookie] = useCookies(["recent"]);

  useEffect(() => {
    axios.get(apiEndpoint + "/mart/list")
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

  const onClick = (e: MouseEvent<HTMLLIElement>) => {
    const name = (e.target as HTMLLIElement).getAttribute("id") ?? "";
    let cookieResult: string[] = cookie.recent ?? [];
    cookieResult = cookieResult.filter((value) => value.length != 0 && value !== name);
    cookieResult.push(name);
    setCookie("recent", cookieResult);
  }

  return (
    <>
      <InputField>
        <input type="text" onChange={(e) => { setKeyword((e.target as HTMLInputElement).value.trim()) }} />
        <MdSearch />
      </InputField>
      <SearchResult>
        {
          (searchResult.length != 0)
          ? searchResult
            .map(({index, input, matched}) => {
              if (matched.length > 0) {
                return <li key={input} id={input} onClick={onClick}><span>{input.substring(0, index)}<strong>{matched}</strong>{input.substring(index + matched.length, input.length)}</span> <MdArrowForward /></li>
              }
              return <li key={input} id={input} onClick={onClick}><span>{input}</span> <MdArrowForward /></li>
            })
          : <li><span>?????? ????????? ?????????</span></li>
        }
      </SearchResult>
    </>
  );
}

const InputField = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  margin-left: 1.5rem;
  margin-right: 1.5rem;
  padding: 0.75rem;
  
  background-color: white;
  border: 0.1rem solid #E0E0E0;
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;

  & input {
    border: 0;
    padding: 0;
    margin: 0;
    font-size: 1.25rem;
    width: 90%;

    &:focus {
      outline: none;
    }
  }

  & svg {
    color: #535353;
    margin-left: auto;
    font-size: 1.25rem;
  }
`;

const SearchResult = styled.ul`
  list-style: none;
  padding-left: 0;
  background-color: white;
  margin-top: 0;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  color: #535353;
  border: 0.1rem solid #E0E0E0;
  border-top: 0;
  border-bottom-left-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
  overflow-y: auto;
  max-height: calc(60vh - env(safe-area-inset-bottom));

  & li {
    display: flex;
    align-items: center;

    font-size: 1.2rem;
    padding: 0.75rem;

    &:hover {
      background-color: #EEEEEE;
    }

    & svg {
      color: #535353;
      margin-left: auto;
      font-size: 1.25rem;
    }
  }

  & strong {
    color: black;
  }
`;