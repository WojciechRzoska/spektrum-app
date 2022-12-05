import { usePerson } from 'hooks/usePerson';
import React, { useState, createContext } from 'react';

interface User {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
  created: string;
  edited: string;
}

interface StarWar {
  name: string;
  created: string;
  vehicles: string[];
}
interface Context {
  user: User | undefined;
  fetchNewUser: () => Promise<void>;
  counter: number;
  image: string;
  star_wars: StarWar[];
  handleAddUser: (values: NewUser) => void;
}

interface NewUser {
  login: string;
  password: string;
  email: string;
  number: string;
}

export const UsersContext = createContext<Context | null>(null);

const UsersProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User>();
  const [users, setUsers] = useState<NewUser[]>([]);
  const [counter, setCounter] = useState(1);
  const [image, setImage] = useState('https://picsum.photos/534/383?random=1');
  const [star_wars, setStarWars] = useState<StarWar[]>([]);
  const { getUser } = usePerson();

  const fetchNewUser = async () => {
    const new_user: User = await getUser(counter);
    setImage(`https://picsum.photos/534/383?random=${counter + 1}`);
    setUser(new_user);
    setStarWars([
      ...star_wars,
      {
        name: new_user?.name,
        created: new_user?.created,
        vehicles: new_user?.vehicles,
      },
    ]);
    setCounter(counter + 1);
  };

  const handleAddUser = (values: NewUser) => {
    const newUser = {
      login: values.login,
      password: values.password,
      email: values.email,
      number: values.number,
    };
    setUsers([newUser, ...users]);
  };

  return (
    <UsersContext.Provider
      value={{ user, fetchNewUser, counter, image, star_wars, handleAddUser }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
