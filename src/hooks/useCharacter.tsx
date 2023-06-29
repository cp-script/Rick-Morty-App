import { useLazyQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { GET_CHARACTER_DATA, GET_CHARACTER_LIST } from "src/query/Character";
import { AppDispatch, IReducers } from "src/store";
import {
  setCharacter,
  setCharacters,
  setInfo,
  setLoading,
} from "src/store/slices/Character";
import { ICharacter, ID, IInfo } from "src/types";

const useCharacter = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [getCharacterList] = useLazyQuery(GET_CHARACTER_LIST);
  const [getCharacterData] = useLazyQuery(GET_CHARACTER_DATA);

  const characters = useSelector<IReducers, ICharacter[]>(
    (state) => state.character.characters
  );
  const character = useSelector<IReducers, ICharacter>(
    (state) => state.character.character
  );
  const info = useSelector<IReducers, IInfo>((state) => state.character.info);
  const loading = useSelector<IReducers, boolean>(
    (state) => state.character.loading
  );

  const getCharacters = (page: number) => {
    dispatch(setLoading(true));
    getCharacterList({
      variables: { page },
      onCompleted: (res) => {
        const { info, results } = res.characters;
        dispatch(setInfo(info));
        dispatch(setCharacters(results));
        dispatch(setLoading(false));
      },
      onError: (err) => {
        console.log(err);
        dispatch(setLoading(false));
      },
    });
  };

  const getCharacter = (id: ID) => {
    dispatch(setLoading(true));
    getCharacterData({
      variables: { id },
      onCompleted: (res) => {
        const { character } = res;
        dispatch(setCharacter(character));
        dispatch(setLoading(false));
      },
      onError: (err) => {
        console.log(err);
        dispatch(setLoading(false));
      },
    });
  };

  return {
    loading,
    characters,
    character,
    info,

    getCharacters,
    getCharacter,
  };
};

export default useCharacter;
