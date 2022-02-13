import { FC, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Sidebar } from '../Sidebar';
import { adminTest } from '../../data/AdminTest';

interface PropTypes {
  children?: ReactNode;
  isProtested?: boolean;
}

const Layout: FC<PropTypes> = (props) => {
  const router = useRouter();

  useEffect(() => {
    const savedRole = localStorage.getItem('role');
    if (savedRole !== adminTest.role && props.isProtested) {
      router.replace('/');
    }
  }, []);

  return <Sidebar>{props.children}</Sidebar>;
};

export { Layout };
