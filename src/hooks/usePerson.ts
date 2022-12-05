import { useCallback } from 'react';
import axios from 'axios';

export const usePerson = () => {
  const getUser = useCallback(async (id: number) => {
    try {
      const result = await axios.get(
        `https://swapi.py4e.com/api/people/${id}/`
      );
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);
  return {
    getUser,
  };
};
